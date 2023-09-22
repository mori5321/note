# Resource
- Multi Region
  - 南北アメリカ、ヨーロッパ、アジア太平洋
- Region
  - region内は高速
    - ラウンドトリップ 95% 1msec 以内
- Zone
  - Region内のデータセンター(厳密にはそうとは限らない)
  - Multi zoneは高可用性


### Zonal Resource
Persistant Disk,
GKE node
Compute Engine instance

### Regional
GKE Cluster
Data Store

### Global
VPC
HTTP(S) Load balancer


## Project
Base Level Entity

物理的な整理 => Region, Zone
論理的な整理 => Project, Folder


### 信頼境界の定義
たとえば人事チームのメンバーに実行中のDBサーバーの削除を許可すべきか
エンジニアに従業員の給与DB削除を許可すべきか



# 請求先アカウント
プロジェクトにリンクできる

## コストをコントロールする方法
### 予算とアラート
予算に近づいたらアラートが来る
Webhookが提供されてるのでこれをつかって通知したり、チケット切ったりリソースをshutdownしたりもできる。

### Export
BiqQueryにexportできる
*ファイルexportは非推奨

### Report
可視化する


## 割当
悪意ある攻撃による過剰利用を防ぐために提供されている
異常検知

### Rate quota
一定期間でリセットされる

### Allocation Quota
ex: プロジェクト数制限, VPC数制限

一部の割当は個別で増やすことができる
