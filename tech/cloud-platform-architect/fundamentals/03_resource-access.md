## Resource Hieralcy
Organization Node
|
Folder
|
Project
|
Resource

Project
- ProjectID (Google Assigns it, unique, immutable)
- Project name (User chose it, not unique)
- Project number(Globbaly unique, assigned by Google Cloud, immutable )

Resource Manager

## IAM(Identity and Access Management)
誰が何にアクセスできるかを管理する必要がある。

IAMポリシーでいう誰とは
- Googleアカウント
- Googleグループ
- サービスアカウント
- CloudIdentity ドメイン

何をできるかはロール
IAMロールは権限の集合
- VM Editor: VMの作成, 削除, 開始, 停止

IAMの種類
Basic, Predefined, Custom

Basic
- 範囲の広いロール
    - Owner
    - Editor
    - Viewer
    - Billing Admin

機密データがあるプロジェクトの場合Basicは広すぎる

Predefined Role
- ex
  - Compute Engine
    - Instance Admin Role

Custom Role
- 最小権限モデル
- Instance Operator role みたいのを自作

Custom Role 作成時の注意
- Custom Role を作成する権限の管理が必要。
- フォルダレベルでは定義できない (プロジェクトか組織のみ)

## サービスアカウント
ユーザーではなくCompute Engineに権限を付与したい。
Cloud Storage にアクセスできるのはVMだけみたいなことをしたい

Service Account は Email だが、パスワードではなく暗号鍵を使う。

アカウントは管理する必要はある。

サービスアカウントはIDであると同時にリソースでもあるため、固有のIAMポリシーを関連づけられる。

## Cloud Identity


## Google Cloud の操作
- Console
- SDK, Cloud Shell
- API
- Cloud Console Mobile App

