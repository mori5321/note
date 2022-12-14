# Chapter02 Assembly
## 2.2.1 基本的な入出力
Unixは「すべてをファイルにする」という考えを実践している。ここでファイル(file)というのは大きな意味でバイトストリームとみなすことが可能なもんおならどれでも当てはまる。ファイルを通じて次のような抽象が得られる。
- HDDやSSDにあるデータのアクセス
- プログラム間のデータ交換
- 外部デバイスとの相互詐称

オペレーティングシステムの目的は(他にもあるが)、リソースを抽象化して管理することであり、文字の表示はまさにその1つである。
OSは、外部デバイス、他のプログラム、ファイルシステムなどとの通信を処理する一群のルーチンを提供する。プログラムは通常そのオペレーティングシステムをバイパスして、自分が制御するリソースと直接やりとりすることは**できない**。それができるのはシステムコールだけであり、それこそがOSがユーザーアプリケーションに提供するルーチン群である。

Unixでは、プログラムがファイルを開くとすぐにそのディスクリプタによってそのファイルを識別する。ディスクリプタというのは単なる整数に過ぎない。ファイルはopenシステムコールを呼び出すことで明示的にオープンされる。ただし以下の3つのファイルだけではプログラムを開始すると即座にオープンされるので勝手に管理できいない。その3つとはstdin, stdout, stderrである。

Hello Worldを表示するにはstdoutに書く必要がある。
そこでwriteシステムコールを呼び出す必要がある。これは指定アドレスから始まる指定バイト数のメモリを指定ディスクリプタのファイルに書き込む。


## 2.2.2 プログラムの構造
フォン・ノイマンのマシンでは1つのメモリがコードとデータの両方に使われてそのどちらかは判別不可能である。けれどもプログラマとしてはその2つを区切りたい。アセンブリプログラムは通常復数のsectionに分割される。それぞれのセクションに独自の用途がある。
例えば.text セクションには命令を入れる。.data セクションはグローバル変数のためにある。これらはそのプログラムを実行しているあいだはいつでも利用できるデータだ。復数のセクションを何度も切り替えて書くことが可能であり、コンパイルされて実行可能なプログラムでは、全てのデータがそれぞれのセクションに対応して、一箇所にまとめられている。

ラベル: 読みやすい名前でありアドレス。任意のコマンドの前におく

アセンブリ言語では変数と手続きの概念がそれほど厳密に区別されない。それよりラベルを使う。

_startpというラベルを入れたらそれがエントリポイントになる。


helloworldプログラムでは
global, section,　dbの3つがディレクティブ
dbディレクティブはバイトデータをつくるのに使う。
データは通常次の4種類のディレクティブのうち1つをつかって定義される。

- db (バイト, 1byte)
- dw (ワード, 2byte)
- dd (ダブルワード, 4byte)
- dq (クオドワード, 8byte)



