# Part1 Understanding the domain
## Chapter1. Introducting Domain-Driven Deisng
### The Importance of a Shared Model
Problemを間違えてとらえていたら、役に立つsolutionを提供することはできない。
Developer が Problem を正しく理解できることを、どう担保する?

仕様書/要求書での解決 -> 問題を理解している人と実装者の間に乖離が生まれやすい。
domain expert - developer

伝言ゲームで悲惨な結果に。どうすればいいか? => 仲介者を減らせ。

better solution
- domain expert と developerが直接コミュニケーションして
- feedback loop を domain expert と developer の間で回し
- なにか誤解があれば、すぐにそれを次のiterationで修正する

しかしこのapproachにも問題が残る。
もしもDeveloperがTranslatorとして振る舞うならば。その翻訳なかで重要な機微をlostしてしまうことがある。

3rd Approach
domain expert, developer, その他stakeholderと, 一部の重要なsourcecodeが同じモデルを共有する
tranlationは不要
codeは共有モデルを直接書き起こせばいい

Benefit
- Faster time to market
    - The team is more likely to develop an appropiate  solution
- More business value
    - Solution more accurately aligned with the problem, makes ccustomer happier
- Less Waste
- Easier Maintenance and Evolution


How can we do this?
- Focus on business events and workflows rather than data structures
- Partition the problem domain into smaller subdomains
- Create a model of each subdomain in the solution
- Develop a common language 

### Understanding the Domain Through Business Events
Let's start with business events rather than data structures. 

なぜか?
ビジネスはdataを"もっている"だけではない
どのような変換が動いていて、その関連を理解すべきである

Domain Eventは常に過去形で書かれるべき。発生した事実は変えられないから。


#### Using Event Storming to Discover the Domain
Event Storming
全stakeholder呼べ。

Event Storming Question
・When to do that?
・What triggers that?
・What would you call that as an event?

Just like DDD, Event Storming has an emphasis on communication and shared models and avoiding “us” vs. “them” thinking. Not only will attendees learn about unfamiliar aspects of the domain, but they might realize that their assumptions about other teams are wrong or perhaps even develop insights that can help the business improve.

壁にイベントが張り巡らされていると、見逃されていたrequirementが見えてくる。

チーム間のつながりも見えてくる。1チームが

Reporting Requirement(read-only model)を見逃すなよ。

### Edgeを特定せよ
チーム間のinteractionの端と端

### Partitioning the Domain into Subdomains
ビジネスの中で組織はわかれている。そこにヒントがある。

domain = area of cohrent knowledge.
domain = Whare is just that domain epert is expert in!
- ex: "billing" is what people in the billing department -- the domain experts -- do.


Problem Space と Solution Spaceは分けるべき
たとえばbounded contextが2つにわかれていても、すでに運用されているLegacyシステムがある都合でSolutionとしては1システムでやるべきときがある。

"Good Fenses make Good Neigbors"

### FocuAnd conversely


### Ubiquitus Language
we should not have things in our design that do not represent something in the domain expert’s model. That means no terms like OrderFactory, OrderManager, OrderHelper, and so forth. 
(Codebaseにはこういうテクニカルなワードは入ってきてよいが、Designには入ってきてはいけない)

domain-expertから一方的に与えられるだけのものではなく、相互に、常時更新されるべきもの

contextごとにdialerctがある
同じwordでもcontextごとに違うことを意味することがある
