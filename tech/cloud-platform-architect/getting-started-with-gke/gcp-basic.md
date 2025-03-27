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



# Container
## コンテナの概要

### 物理マシン時代
セットアップするときは
- 設置場所
- 電源熱対策
- ネットワーク接続
- OS, ソフトウェアをinstall
- アプリケーションをinstall
- スケールのためにcomputerを追加

DB, Application, Web Server ごとにComputerを分けていた
デプロイ大変、リソースの無駄がある

### 仮想化
同じ物理コンピューターで複数のソフトを動かす
ポータビリティがます

しかしアプリケーションと依存関係、OSはバンドルしている
起動にも時間がかかる
依存関係の監理も大変

この問題を解決しようとするとアプリ毎のVMが必要(カーネルレベルで分離)。
しかし、アプリが1000などにスケールすると
OSの起動時間が長すぎる
Kernelの更新も大変

### コンテナ時代
マシンやOS全体を仮想化するのではなく、ユーザー空間(Kernelより上)
Applicationと依存関係のみを仮想化する

OSを含めないので軽量である。

Linuxカーネルが基盤になっている。

## コンテナとイメージ
コンテナとはイメージの実行中のインスタンス

Docker
- コンテナイメージを構築し
- 実効する

大規模オーケストレーションはできない


コンテナの基盤となる技術
- Linux Process
- Linux namespace
- cgroups
- Union file systems


# Kubernetes
deploy, scaling, loadbalancing, logging, monitoring


- 多用なworkloadに対応 (nginx, apatch, batch, daemon task, stateful)
- AutoScale


# GKE
- Fully managed
- Container Optimised OS
- Auto upgrade
- Auto repair (異常なnodeが自動修復される = 自動drain & 再生成)


# Computing Option
Compute Engine - GKE - App Engine - Cloud Run - Cloud FUnction

## Compute Engine
- Fully customizable
- Disk or Local SSD
- Global loadbalancing and auto scaling
- Per-second billing
- You can use preemptible machine

Usecase
- Complete Control over the OS

## App Engine
- Fully managed, code-first
    - no care about deploy
- Integrated tools (monitoring, logging, diagnostics)
- Version Control, Trafic Control

Usecase
- Focus on Code
    - Web site
    - mobile app and gaming backend
    - RESTful API

## GKE
- Fully managed k8s platform
    
Usecase
- Containeized application
- cloud native distributed app
- Hybrid application


## Cloud Run
- stateless container
- abstract away infra management
- automatically scales up and down.

Knativeで実現されている

Usecase
- Deplo stateless containers
- build applications in any language using frameworks and tools

## Cloud Functions
- Event-driven, serveless compute service
    - JavaScript, Go, Python
- Trigger
    - HTTP, Storage Upload, Pub Sub Messaging

Usecases
- part of micro service architecture

## So what? 



