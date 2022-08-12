# TIP1 ドットコマンド
直前の操作を繰り返す
ドットコマンドはマイクロマクロである

> {motion} はインデントを1つ下げる(> %, > G)
>> はインデントを1つ下げる


Line One
Line Two
Line Three
Line Four


# TIP2 DRY
a -> 現在位置の後ろにに追加を行なう
A -> 現在の行の末尾に追加を行なう

Line One aaaaaaaaaaaaaaa
Line Two bbb
Line Three ccccccccccccccccccccccccc
Line Four 

Aコマンドは$aを1つのキーストロークに合成したといえよう。

c <motion> -> motionの位置の文字を削除して挿入モードに入る
- e.g. cl, ch, ck, cj, c$, c^

C = c$
s = cl
S = ^C = cc

その他
Esc = Ctrl+[
