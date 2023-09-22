## Monitoring
SRE本の定義: システムに関するリアルタイム定量データの収集、処理、集計、表示

例
- クエリの件数と種類
- エラーの件数と種類
- 処理時間
- サーバーの存続時間


### pyramid
Product
|
Developing
|
Capacity Planning
|
Testing
| 
Postmortems
| 
Incident Response
|
Monitoring

### 4 Keys
Continual Improvement
Dashboard
Automated Alerts
Monitoring Tools


## Four Golden Sygnals
1. Latency
2. Traffic
3. Saturation
4. Errors

### 1. Latency
システムの一部が結果を返すまでの時間

USに直接影響があり、issuueの釣行であり、Capacity需要を示唆するもの

例
- page load latency
- number of requests waiting for a thread
- query duration
- Service Response time
- Transaction duration
- Time to first response
- Time to complete data return


### 2. Traffic
現在のシステム需要を教えてくれる
過去の傾向をキャパシティプランニングに使える
インフラ支出の計算に使える

例
- # HTTP requests per second
- # requests for static vs. dynamic content
- Network I/O
- # Concurrent sessions
- # transactions per second
- # of retrievals per second
- # of active requests
- # of write ops
- # of read ops
- # of active connections

### 3. Saturation
システムがどれだけ限界に近いか(ただしこれはかなり主観的)
サービスの逼迫度を教えてくれる

最も制約が多いリソースに注目するのがよい

例
- % memory utilization
- % thread pool utilization
- % cache utilization
- % disk utilization
- %CPU utilization
- Disk quota
- Memory quota
- # of available connections
- And # of users on the system

### 4. Errors
例
- Wrong answers
- # 400/500 HTTP codes
- # failed requestss
- # exceptions
- # stack traces
- # Servers that fail liveness checks 


## SLI/SLA/SLO
### SLI
利用者体験と密接であるべき
- 好ましいイベント / 有効なイベント  とするのがいい

### SLO
SLOは100%ギリギリのラインが望ましい(99.9%)

SMART
Specific(具体的である)
Measurable(計測可能、数式で表現できる)
Achievable(実現可能)
Relevant(関連性) - ユーザーに関連があるか、業績に影響があるか
Time-bound - 年, 月, 日, 曜日は? 7日移動平均? 

### SLA
お客様に対する約束
- Minimum Level
- 破られた場合の補償

信用の失墜を防ぐため早めに是正措置を取れるように
SLAのサービス水準よりもかなり早めにアラートをあげるようにする


SLOを達成できない場合の対策も明文化しておくべき
- 変更のペースを落として、リスク解消と信頼性回復にフォーカスするなど



## Integrated Monitoring Tool
Signal
- Metrics
- Logs
- Trace
|
v
Visualize
- Dashboards
- Metrics Exploerer
- Logs Exploerer
- Service Monitoring
- Health Checks
- Debugger
- Profiler
^
|
Trigger
- Alerts
- Error Reporting
- SLO


## Monitoring Tools
BigQuery
- Queries in flight
- bytes billed
- slots used

Cloud Run
- CPU utlization
- billable time
- memory utlization

Applications
- OpenTelemetry

Compute
- CPU and memory utilization
- Uptime
- disk throughput

### Cloud Monitoring
なんかいろいろできる

## Logging Tools
### Cloud Logging
Log analysis
- use Google Cloud's integrated logs Exploerer
- Entries can be exported to several destination
- Pub/Sub messages can be analyzed in near-real time using custom code or stream processing
- BigQuery allows examination of logging data through SQL queries
- Archived log files in Cloud Storage can be analyzed with several tools and techniques


LogExports
- CloudStorage
- BigQueryTable
- Cloud Monitoring Dashboard

LoRetention
- 30days by default(max: 3650 days)
- admin logs 400 days by default
- Can be exporeted to CloudStorage or BigQuery to extend retention


### ログの4大カテゴリ
Audit Logs
- いつ、どこで、だれが、なにを
- Admin Activity
- Data Access
- ユーザーによるリソースの作成変更、削除
- System Event
- Access Transparency (Googleがリソースにアクセスしたとき)

Agent Logs
- Fluentd agent

Network Logs
- VPC flow
- Telemetly
- Firewall Rules Logging
- NAT gateway logs

Service Logs
- Standard Out / Error


## Error Reporting & Debugging
### Error Reporting
稼働中のサービスのクラッシュを分析、集計できる

### Cloud Debugger
Cloud Debugger

### Cloud Trace
分散アプリからレイテンシを集計して表示 (AppEngine, ComputeEngine, K8s に使える)
パフォーマンス分析表示

### Cloud Profiler
CPUとheapの利用状況を見れる

