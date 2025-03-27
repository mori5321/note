## Alloy 
メンテナンスダウンタイムが最小

## Cloud Spanner
フルマネージド
自動シャーディング
ダウンタイムゼロ

ただし完全互換ではない。

## Firestore
モバイル及びWebアプリを高速に開発するためのDB

- ネイティブモード
- DataStoreモード


## BigTable
ワイドカラム型

ある行を特定するための行キーで行を取得する
Value側に構造を持つことができる
Sparseなデータを扱うことができる (ある列に値が入っていない 等)


IoTセンサーの処理基盤
機械学習の処理基盤として適している

レイテンシが速く、非常にレイテンシ要件が厳しいものに向いている

## MemoryStore
キャッシュ用途に


## Database Migration Service
CloudSQLへの移行をより簡単により安全に

AWS Database Migration Service: 汎用的なDBからDBへの移行をサポートする
GCP Database Migration Service: 同種のデータベース(posgres -> postgres)をサポートする変わりに簡単に
