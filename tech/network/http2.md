
# Refs
https://blog.redbox.ne.jp/http2-cdn.html

# HTTP/1.1 の欠点
1つのリクエストが完了するまで、原則次のリクエストを送ることができない。
この制約を回避するためにほとんどのモダンブラウザは1ドメインに大して複数同時接続を行うことで
ある程度通信の多重化を測っている。*Chromeは同一ドメインに同時に送信できるリクエストは6つまで。

このような制約のあるHTTP1.1ではHTTPパイプラインという仕組みで、前回のリクエスト完了を待たずに次のリクエストを送信することが可能。しかし実装上の制約が大きく殆どのモダンブラウザではデフォルトでOFFになっている。

したがってHTTP/1.1における高速化では、リクエストする数を減らす、リクエストできる数を増やすことが重要であった。

- リクエストを減らす方法
  - CSSスプライト
    - 複数画像を1枚の画像にまとめ CSSでpositionを変えるなどして調整する(ホバー時の画像変更など)
  - 画像のインライン化
    - 画像を文字列に変換してしまいHTMLやCSSに埋め込む
  - Webフォントの利用
- リクエストできる数を増やす
  - ドメインシャーディング


# HTTP/2の主な機能
## ストリームの多重化
1つの接続上にストリームと呼ばれる仮想的な双方向シーケンスをつくることで問題解決をする


## ストリームの優先度
クライアントがPRIORITYフレームを用いてストリームに優先度をつけることを可能にした。
「重み付け」と「依存関係」の2つがある

*CSSを先に、あとからJavaScriptみたいな。
*あくまでサーバーへの優先度提案であり、サーバー側の対処が必要

## ヘッダー圧縮
HTTP1.1でのあっしゅくはGCIP化してCSSやJS, JSONなどのテキスト形式ファイルを小さくしていた。
HTTP/2ではこれに加えてヘッダ部分のあっしゅくも可能になった。

## フロー制御
ひとつのストリームがリソースを占有してしまうことを防ぐ。
例: 大容量ファイルのダウンロードが帯域を食いつぶしてしまうことを防ぐ

## 