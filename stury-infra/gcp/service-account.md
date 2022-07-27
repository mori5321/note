# Refs
https://qiita.com/t-yotsu/items/5d3d36847fbc71b72b76
https://cloud.google.com/iam/docs/understanding-service-accounts?hl=ja

# サービスアカウント
サービスアカウントは個人ではなくアプリケーションやVMに属する特別なアカウント
サービスアカウントは0以上のサービスアカウントのキーペアを持ち、Googleの認証に章する。

以下に留意が必要
- どのリソースにアクセスできるようにすべきか
- どのパーミッションが必要か
- どこでそのコードは実行されるのか(GCP, オンプレ)

サービスアカウントはリソースやIdentityとして扱うことができる
- Identityとして扱うとき、リソースにアクセスするためのロールをサービスアカウントに与えることができる
- リソースとして扱うとき、サービスアカウントにアクセスするためのパーミッションをユーザーに与えることができる。


- サービスアカウントをトラックする。
  - たくさんつくるとどのサービスアカウントが何の目的のものかわからなくなるのでよい命名をつけるべき
- サービスアカウントに最小限の権限を与える
  - 最小限の権限のみを与えるべきである

# Keyの管理について
2種類のサービスアカウントキーがある。
- GCP Managed Keys. 
  - AppEngineやComputeEngineなどのサービスで使用されるキーでありダウンロードできない。Googleが管理し自動でローテーションする
- User Managed Keys
  - ユーザーが作成、DL可能。ユーザーが管理する。

以下のことを考慮する必要がある
- 鍵の保管場所
- 鍵の配布
- 鍵の失効
- 鍵のローテーション
- 鍵を認証されていないユーザーから守る
- 鍵の復旧

### 鍵のセキュリティを改善するためには?
- IAM service Account APIを利用して自動rotateする


  