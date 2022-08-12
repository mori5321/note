# 05 Compile Pipeline
- Preprocess(前処理)
- Compile(変換処理)
- Link(結合)


- Processor
  - プログラムのソースを入力とし、同じ言語だが異なるソースを出力する
  - 基本的にある文字列を別の文字列にする処理になる
- Compiler
  - ソースファイルをマシン語の命令に変換し、エンコードされたオブジェクトファイルを出力する
  - 実行の準備はまだ整っていない。別にコンパイルされたファイルと連結されていないためだ。
- Linker
  - それらのファイル間にリンクを確率して実行可能なファイルをつくる。
  - ELF(Executable and Linkable Format) や COFF(COmmon Object File Format)などの形式がある
- Loader
  - 実行ファイルを受け取る。


## 5.1. プリプロセッサ

