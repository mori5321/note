# 12 構文の意味と実際
## 12.1 プログラミング言語とはなにか
プログラミング言語とは、マシンが理解できる形式でアルゴリズムを記述するために設計されたformal(=形式が整った)コンピュータ言語である。
コンパイラこそ言語の定義だと言う意見もあるがこれはいささか乱暴。

実装に依存しない形での言語の記述方法が必要。

言語は以下の3つの側面から見るのが一般的である。
- 文の構成規則
  - 形式文法をつかって記述される。これらの規則が言語の構文(syntax)を形成する
- 言語の構造体が抽象マシンに及ぼす影響
  - これすなわち意味(semantics)である
- 第三の側面として実際(pragmatics)がある
  - 現実の実装がプログラムの振る舞いにもたらす影響


## 12.2 構文と形式文法
1つの言語は「ある種のアルファベットの組み合わせで得られる全部の文字列の部分集合(subset)である」

文字列の集合を以下とする
∑ = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +, -, x, /, . }

しかしこれらのあらゆる組み合わせが有効なセンテンスではない(例: ++--++)

形式文法を最初に形式化したのはノーム・チョムスキーだ。

センテンスは木のような構造を持つ。

すべての部分は記号(symbol)と呼ばれる。アトミックな記号(symbol)は終端(terminal)と呼ばれる。複雑な記号は非終端(nonterminal)と呼ばれる。

形式に注目すると、その文法は次のもので構成される。
- 終端記号の有限集合
- 非終端記号の有限集合
- 言語の構成に関する情報である「生成規則」の有限集合
- 1個の開始記号(starting symbol)。これは非終端。

非終端 ::= 終端と非終端の連なり

バッカスナウア記法
- 終端は引用符で囲まれた文字列で表現する
- 生成規則は ::= をつかって書く
- 非終端の名前は角カッコの内側に書く

## 12.2.1
自然数の言語を1個の文法をつかって表現することができる

∑ = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}

- 先頭にゼロのある数字は不自然なので不許可
- いくつかの非終端記号を用意する
  - notzeroはゼロ意外のすべての数字
  - digitはあらゆる数字
  - rawはdigitの任意のシーケンス

1個の非終端に対して復数の規則を定義できる。

<notzero> ::= '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
<digit> ::= '0' | <notzero>

<raw> :== <digit> | <digit> <raw> // 1個の数字または1個の数字に別の数字列がつづくもの
<number> ::= <digit> | <notzero><raw>
<expr> ::= <number> | <number> '+' <number> | <number> '-' <number>
<str> ::= <number> '\0'
