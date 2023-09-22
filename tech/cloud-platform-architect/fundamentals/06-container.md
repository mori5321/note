## Container

コンテナの目的は、
独立したworkload スケーラビリティ (PaaS)
OSやハードウェアの抽象化レイヤを提供する (IaaS)

VMだと起動が遅い

AppEngine は PaaS 
スケーリングが高速、費用の微調整はできない

コンテナ
プロセスと同じぐらい早く起動する
IaaS 同様の柔軟性がある
開発 -> stg -> prod 時に再ビルドの必要性がない。

単一ホストで数十数百にscalingできる
機能が異なる複数のContainerをつかって


## Kubernetes
コンテナ化されたワークロードとサービス管理

複数ホストで動く複数コンテナのオーケストレーション
マイクロサービスとしてのscaling
deploy rollout & rollbacks

全体像としてk8sは、クラスタと呼ばれるNodeのセットにContainerをdeployするためのAPIセットである

コントロールプレーンとして実行されるprinaryなやつら
コンテナを実行するノードのセット

1つ以上のコンテナをラッパーを使ってノードにデプロイしたものがPodです
Podはk8sで作成、デプロイできる最小の単位です

通常1Podは1containerだが強い依存家計があるなら1つのpodにパッケージ化してもよい(network, storageのリソースを共有できる)


kubectl run 
Deploymentを開始しPod内でコンテナを実行する

kubectl get pods

kubectl expose

Podに割り当てるIPアドレスは安定していないので

kubectl scale 

cliは学習と検証に使える。
しかし宣言的に書くのが真価

kubectl get pods で見れる

kubectl get deployments
kubectl describe deployments
kubctl apply


アップデート
kubectl rollout あるいは kustomizationのrollingUpdate


## GKE
ノードのサブセット

## Hybrid & Multi Cloud Architecture

## Anthos
Hybrid, Multi Cloud Solution
