# Concept of K8s
- Object Model
    - Object spec (望ましい状態)
    - Object status (現在の状態、コントロールプレーンが管理している)
- 宣言型
    - watch loop で 実現されている


## Pod 
デプロイ可能な最小のk8sオブジェクト
最小のk8sオブジェクトはコンテナではない

Pod の中に Containerがある
Pod は複数のContainerをもつことができる
Pod はリソース(network, volume)や名前空間を共有する
密結合なコンテナは同じPod内に入れるのあり

## コントロールプレーン
コントロールプレーンが 望ましい状態に修復する


# Control Plane



## 
Deployment
- Long running 

StatefulSet
DeamonSet
Job


## Deployment
-> For Stateless Application


kubectl get deployment [DEPLOYMENT_NAME] -o yaml > deployment.yaml 

でOutputできる。
これは便利。最初手動でつくって そのあと結果をコードとしてrepoに永続化できる


## Service と Scaling

Auto Scale => Horizontal Pod Object (kubectl autoscale deployment)


## Blue Green Deployment

