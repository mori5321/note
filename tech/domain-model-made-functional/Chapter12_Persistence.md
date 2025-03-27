# Wrapping Up

High-Level Principles of Persistence
- separating queries from commands
- keeping the I/O at the edges
- and ensuring that bounded contexts own their own data store

We, then, dive down low-level mechanics of interacting with a relational database.
- NoSQL
- RDB

# Pusing Persistence to the Edges

- Repository Pattern は? 

# Command Query Separation

> Command-query separation is a design principle based on these distinctions. It states that code that returns data (“queries”) should not be mixed up with code that updates data (“commands”). Or to put it more simply: asking a question should not change the answer.


> Functions that return data should not have side effects. Functions that have side effects (updating state) should not return data—that is, they should be unit-returning functions.


## Command と QueryでType を分けろ
なぜ？

1. 書き込みのときに必要なデータと、クエリしたときに返して欲しいデータは往々にして異なる。

たとえばQueryは非正規化したデータや算出されたデータが欲しいかもしれない。しかしこれらは書き込みのときは使えない。

たとえばCreateするときはIDやVersionなどは必要ないかもしれない。がクエリでは必要だ


2. QueryとCommandは独立して進化していくので、結合すべきではない
1つのデータに対して
- 3つのQuery
- 1つのUpdate

3. いくつかのクエリは、パフォーマンス上の理由で複数のentitiesを一度に返す必要がある。
たとえばQuery時に Order を取得する際、Customerのデータを一緒に取ってきたいかもしれない。
一方でWrite時にはCustomerIdさえあればOKで、Customer全体は必要ない。

## CQRS & Database Segregation

Consitency の章はちゃんと読んだほうが良さそう。


## Event Sourcing
Event Sourcing アプローチでは、現在の状態は1つのobjectとして永続化されない。
代わりに、なにか変更があるたびにその変更を表すイベントが永続化される。
これによって変更の履歴を追跡することができる。

現在の状態をrestoreするために、過去のeventがreplayされる。

このアプローチのadvantageは
- すべてがAudit(監査)されるという種類のドメインモデルに合致する
- 会計士は消しゴムを使わない(追記する)

# Bounded Contexts  Must Own Their Data Storage
- Bounded Context は 自分自身のためのdata storageを持たねばならず、他のコンテキストと協調することなく変更を加えられる必要がある
- Bounded Context が保有するデータに、他のコンテキストが直接アクセスできてはならない。代わりに公開されたAPI経由でデータを取得する



どうやって他のコンテキスト(Order)のデータを自コンテキスト(BI Tool)に持ち込む? 

- 他のシステムから発信されるイベントをサブスクライブする。対応するレコードを独自のデータストアに挿入する
    - pros: 別ドメインとして扱える

- ETLを利用してソースからデータをコピーする
    - pros: 初期実装が簡単
    - cons: スキーマが変更されたときにメンテナンスが発生する可能制がある


BI Toolには大したdomain modelはいらないかもしれない。


# Document Database

##  Mapping Nested Types to Tables

- もしinner type が DDD Entity ならば、そのidentityとともに、別テーブルに保存すべき
    -> Orderに対するOrder Line
- もしinner type が Value Object であるならば、identityなしに、inleineで親データに保存されるべき。
    -> Orderに対するShipping Address


F#SQL Type Provider かしこい


## Transaction
原則 one aggreagate = one trasaction

Starbucks Does Not Use Two Phase Commit.
別々のシステム間で更新を適切に同期させる(二相コミット)のは、ハイコストだし多くの場合必要でない

たとえば 請求書をすぐ作成することを要求する代わりに、請求ドメインにイベントを送信し残りの注文処理を続行するとする。そのメッセージが紛失し請求書が作成されなかったらどうする?

1. なにもしない。顧客は無料でコーヒーを手に入れる。ビジネスがこの損失を飲む。エラーの発生率が低いならばこれでいい。
2. メッセージが紛失したことを検知して再送信する。reconcilation processが行なうもので、2つのデータセットを比較し、一致しない場合はエラーを修正する
3. 前のアクションを取り消す。注文をキャンセルする or 返金を要求する (Compensation transsaction)


