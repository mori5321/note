## GCP
- Computing
- Storage
- BigData
- MachineLearning
- Application Services

## 本コースで学ぶこと
- App Engine, GKE など アプリ環境の選び方
- ストレージオプションの選び方
- Google Serviceの操作方法
- 実際の用途

## Cloud Computingの概要
5つの特徴
- オンデマンドかつセルフサービスでコンピューティングリソースを取得できる
    - 処理能力, ストレージ, ネットワークを人手をかけずに確保できる
- どこからでもインターネット経由でリソースにアクセスできる
- プロバイダは大規模なリソースプールを用意する
    - 一括で購入して節約分を顧客に還元できる
    - 顧客はリソースの場所を意識する必要がない
- 弾力性(Elastic)がある
    - 必要に応じて増やしたり減らしたり
- 使用した分だけ使われる


## Cloud Modelの歴史
第一波: コロケーション
第二波: 仮想データセンター
第三波: コンテナベースのアーキテクチャ。自動化, 弾力化

## Network
Location(北米, 南米, アジア, ヨーロッパ, オーストラリア)
↓
Regions(asia-northeast1)
↓
Zones(asia-northeast1-a, asia-northeast1-b)

Compute Engineはゾーンの中で冗長性が担保される
一部のサービスはマルチリージョンに配置可能


## GoogleがどれだけSecurity対策がんばってるか
- 物理
    - ハードは自前設計
    - Bootstack がんばってる
    - 物理アクセスも制限している
- サービスレイヤ
    - サービス間通信の暗号化
- ユーザーIDレイヤ
    - ID/Pass 以外にも、過去同じ端末からログインされたか、その場所からログインしたか などを見てる
- ストレージ
    - 暗号化されておりストレージサービスからしかアクセスできない
- Google Front End
    - TLS
    - DoS 対策
- 運用セキュリティ
    - 侵入検知
    - インサイダー対策
    - U2F互換のセキュリティー必須
    - 開発手法
        - 二者レビュー必須
        - ライブラリ提供
        - 脆弱性報奨金


## OpenSrouce Ecosyystem
主要テクノロジーをOSS公開しているので、GCP以外も選べるよ。
- TeensorFlow, Kubernetes

## 料金
- オンライン料金計算ツールが費用の見積もりに使える

- 予算の調整できる
   - 請求先アカウントかプロジェクトレベルで定義できる
- 予算は上限固定したり、前月との割合などできる
- 予算アラートできる
    - 50, 90, 100 に設定するのがよい

- 割当機能
    - リソースの過剰使用を防止できる

