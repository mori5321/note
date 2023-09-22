## AppEngine

- Stabdard
    - Java, Python, PHP, Go, Node, Ruby
    - Sandbox制約
- Flexible
    - GCE + 好きなコンテナでどうぞ
    - instance management は AppEngineがやってくれる


GKEとの違い
- App Engine Standard -> 最大限に自動制御
- App Engine - Flexible -> 中間
- GKE -> 柔軟性

## Cloud Endpoint * Apigee Edge
### Cloud Endpoints
- Distributesd API management system

### Apigee Edge
レート制限, 割当, 文責など
- 他社にソフトウェアサービスを提供できる
- Google Cloud じゃなくてもいい

## CoudRun
Run stateless container
Serverless (No Infra management)
Built on Knative, k8s
スケールはやい

開発ワークフロー
- 1. Source Code
- Build & package as  container
- push Artifact Registery

can both source based workflow & container based workflow


