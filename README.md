# カテゴリ別投稿アプリ

- 本アプリは主な内容としてはブログアプリです。ユーザー登録をした人は記事やカテゴリの追加、編集、削除を行なうことができ、ユーザー登録をしていない人は投稿された記事を見ることだけできます。
- 最初、カテゴリがいくつか表示されており、見たいカテゴリをクリックするとそのカテゴリを含んだ投稿記事一覧が表示されるようになっています。
- **公開URL**: [https://next-blog-app-khf1.vercel.app/](https://next-blog-app-khf1.vercel.app/)

## 特徴と機能

- **メニューバー** ヘッダーにある「メーニュー」を押すことでメニューバーを開いたり閉じたりできます。メニューバーには「AMGMs Blog」と「編集機能へ」と「ユーザー登録」があります。![alt text](<READ.md/スクリーンショット 2025-02-21 125850.png>)それぞれの機能は以下の通りです。
- **AMGMs BLOG** 下の写真にあるトップページ以外のページにいる時、「AMGMs BLOG」を押すことでトップ画面に戻ります。![alt text](<READ.md/スクリーンショット 2025-02-21 201725.png>)
- **ユーザー登録** ユーザー登録を行なえるようにしました。ユーザー登録をすることによってできることは、カテゴリの追加、記事の編集・追加・削除です。 まず、以下の画面でメールアドレスと任意のパスワードを入れるとユーザー登録打ち込んだメールアドレスにスパベースからメールが届きます。届いたら「Confirm your mail」を押すと登録したメールアドレスとパスワードで入れるようになります。![alt text](<READ.md/スクリーンショット 2025-02-21 125841.png>)
  ![alt text](<READ.md/スクリーンショット 2025-02-21 202112.png>)
- **編集機能へ** 「編集機能へ」を押すと、まずメールアドレスとパスワードの入力を求められます。そこで作ったユーザー情報を打ち込むと、以下の画面に進みます。![alt text](<READ.md/スクリーンショット 2025-02-21 204113.png>)
  ここで行ないたい作業のリンクをクリックして、新規投稿や削除を行ないます。
- **ログイン状態の時** ログインしている時はヘッダーの「ユーザー登録」の部分は「LOGOUT」、「編集機能へ」の部分は管理者用機能の4つの機能へ繋がるボタンに切り替わります。![alt text](<READ.md/スクリーンショット 2025-02-21 204525.png>)
- **写真の複数選択について** 記事の新規投稿を行う際、写真も投稿するが、この時複数選択することができる。複数選択した写真は、横に2枚ずつ接続されて1枚の写真として投稿される。下の写真の場合、4枚の写真が選択されている。（作者がツイッターとかでたまに複数の画像を1枚にまとめて一気に見たい、保存したいと思うことがあるから接続形式に改造された。）![alt text](<READ.md/スクリーンショット 2025-02-21 205842.png>)
  また記事を閲覧する際、写真の画像の下にある「画像を表示」ボタンを押すと画像が大きく表示され、ダウンロードすることができます。![alt text](<READ.md/スクリーンショット 2025-02-21 210012.png>)
- **関連する投稿の表示** 記事の画面には、その記事と同じカテゴリをもつ記事名が表示され、クリックするとその記事に飛ぶようになっています。![alt text](<READ.md/スクリーンショット 2025-02-21 211808.png>)

## 使用言語、フレームワーク

- Next.js
- TypeScript
- Prisma
- Tailwind CSS

## 使用ツール、使用ウェブサービス

- VSCode
- Supabase
- Vercel

## 開発体制・期間

- 開発体制: 個人開発
- 開発期間: 2025.1 ~ 2025.2(約20時間)

## 工夫・苦労した点

- ユーザー登録機能
- 写真の接続機能

## 今後の目標

- 良いね機能の実装
- 今はユーザ登録した人は全員全ての投稿を編集、削除できるようになっているので、編集や削除はその記事を作った人しか手出しできないようにしたいです。

## 連絡先

- ポートフォリオ:[My(mai's)PORTFOLIO](https://nago4.github.io/My-Portfolio/)
- 所属:高専3年
