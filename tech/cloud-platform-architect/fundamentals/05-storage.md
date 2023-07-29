# CloudStorage
- オブジェクトストレージ
    != FileStorage
    != BlockStorage

パッケージ形式で保存されている
- バイナリ本体
- メタデータ

オブジェクトストレージとWebサービスは相性がいい
どんな容量のデータでも格納して取り出せる

ウェブサイトコンテンツ
アーカイブと障害復旧データ
大容量データの直接ダウンロード
動画や写真など (BLOB Binary Large Object ストレージが必要な場面)

データのアーカイブやバックアップ
中間結果、処理ワークフロー

レイテンシが最短になる場所がよい

ストレージオブジェクトは普遍である。変更のたびバージョンが追加される。

アクセス制御
IAMロール + ACL(AccessControlList)

だいたいIAMでいい
細かい制御が必要ならACLでScope + Permission操作可能

ライフサイクル管理ポリシーを設定可能
- 365日で削除
- 特定の日付より前のデータを削除
- 3バージョンのみ保存

## Cloud Storage
Standard Storage
利用頻度の高いHotData

Nearline Storage
利用頻度の低いデータ保存(1ヶ月に1回)
バックアップ、データのアーカイブ

Coldline Storage
90日に1回程度

Archive Storage
年に1回
365日の最低保存期間がある


共通項
- 上限がない
- グローバル
- 低レイテンシー
- エクスペリエンスの一貫性
- 冗長構成
    - 災害時のデータ保護


- 書き込み前にサーバー側で暗号化される


データの格納方法
- gsutil での 転送
- Console での drag & drop
- テラバイトやペタバイト単位のデータ
    - Storage Transfer Service
    - バッチ転送の
        - 別のクラウドプロバイダ
        - 別のプロジェクト

BigQueryやCloudSQLとの間でExport, Import可能
FireStoreなどのBackupも可能
Compute Engine の image なども格納可能



## CloudSQL
- Can scale up to 64 processor cores, 400+ GB of RAM, and 30 TB of storage
- Support automatic replication scenarios 
- managed backups
- Encryption
- Network firewall

Accesible by other Google Cloud service, and external services


## Cloud Spanner
Fully managed relational database
- 水平スケーリング
- 強整合性

Usecase
- JOIN とセカンダリインデックス
- 2TB
- 膨大な数のIO

## Firestore
Document -> Collection 
- indexed by default

## Cloud BigTable
NoSQL

Usecase
- 1テラバイトを越える半構造化/構造化データ
- データが高スループットで移動
- 強いリレーショナルセマンティクスが不要
- データが時系列
- 非ッグデータをつかっていて非同期バッチや同期処理が必要


ストリーミング
-  Hadoop MapReduce, DataFlow, Spark



