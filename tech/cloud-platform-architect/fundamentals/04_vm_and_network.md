## Virtual Private Cloud
- Custom VPC or Default VPC


## Virtual Private Cloud
パブリッククラウドのスケーラビリティ・利便性
プライベートクラウドのデータ隔離
これら

ネットワークのセグメント化
ファイアウォールによるクセス制限
トラフィックを転送する性的ルート
グローバル(どこにでもおける)
複数リージョンをまたぐサブネットもつくれる
リソースを同一サブネットの異なるゾーンに置くこともできる


## Compute Engine

軽遺族利用割引は自動的に適用される(Sustained-use discounts)
確約利用割引もある(Committed-used discounts)
Preemptible & SpotVM
- GCPの余剰コンピューティングリソースが提供されている。
- 終了するまで見守る必要のないJobなど
- 24時間で必ず止まる
- 止まる30秒前に通知がある
- 勝手に止まりうる
- 用途
    - 短時間で完了するJobなどに使える
    - 分散システムとかにもつかえるかも



## Auto Scaling


## VPC Compatibility
### ルーティングテーブル
物理ネットワーク同様 ルーティングテーブルがある
同じネットワーク内のインスタンス間でのトラフィック転送に使える
サブネット間でもゾーン間でもIP Addressは不要

## Fire Wall
ファイアウォールのProvisioning と 管理も不要
受信, 送信 の両方ができる
インスタンスのmetadata tag でルールを管理できる

例: サーバーにwebというタグをつける、すべてのwebというタグがついたサーバーの port80, port443を IP Addressに関係なく許可する

## VPC Peering
VPC は Projectに帰属する
Project を越えて通信したい場合は VPC Peering 

IAMをつかってがんばれば誰が何を別プロジェクトのVPCとやりとりできるかを定義できる。


## Load Balancing
Cloud Load Balancing

HTTPs
TCP 
SSL
UDP

リージョン間の負荷分散を実現する

### 負荷分散オプション
グローバルHTTP負荷分散
global SSLロproxy load baancer (only TCP)
global tcp proxy load balancer (only TCP)
regional load balancer (UDP or other port)
regional internal load balancer


## Cloud DNS
Edge Cacheも使える
Cloud CDNでコンテンツデリバリーを高速化できる

HTTPLoad Balancingを設定したらワンクリックでCDN使える。

Google Cloud CDN Interconnect に対応していれば外部CDNも使える


## 他のネットワークにつなぎたい(オンプレとか)
- インターネット経由でVPN protocolでつなぐ(IPsec VPN Protocol)
    - Cloud Router
    - ただしセキュリティリスクはあり
- Direct Peering
    - Google の PoP(point of presense)と同じ場所に置く(100箇所にある)
- キャリアピアリングパートナー
    - ?
    - SLAが担保されない
- Dedicated Interconnect
    - Googleへの直接プライベート接続
    - 接続のトポロジを満たしていれば使える
    - SLA 99.99%
    - VPNにfallback可能
- P{artner Interconnect
    - サポート対象の外部サービスプロバイダ経由で利用可能
    - 10GB/秒の保証が不要な場合, ダウンタイムを許容できる場合に使える
    - 99.99%
    - ただし外部サービス・プロバイダの問題については責任を追わない


## Quiz
ネットワークはグローバルリソースである一方で
サブネットはリージョンリソースである
