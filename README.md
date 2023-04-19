# simple_manage_bank_account
i love simple app.

# シンプル貯金管理

# 要件定義

### 機能

- 口座一覧・crud

　　- 口座名、色アイコン、合計額

- 貯金、引き出し履歴一覧・crud
    
    - 日付、金額、追加、引き出し
    
- バックアップ機能(v2)
    
    drive-api / firestore など
    
    [https://cloud.google.com/storage/docs/json_api?hl=ja](https://cloud.google.com/storage/docs/json_api?hl=ja)
    
- 課金機能(v3)
    
    サブスク： 広告非表示、自動バックアップ
    
    買い切り： 口座数上限撤廃or上限引き上げ、バックアップ制限撤廃、広告表示
    
    無課金：口座数上限、履歴数上限、バックアップ制限、広告表示
    
    ※履歴はサブスク課金時から全て記録される。課金前は最大100件まで。
    
- ユーザー認証機能(v2)
    
    バックアップ、課金に必要
    
    通常機能では不要
    

- テスト

　自動テストとか出来ないかな？特にバックアップや課金周りは慎重に進めたい

# 技術選定

サーバー：不要

web vs iosアプリ

webならnuxt.jsでいいかな？

アプリにする場合、優先度はandroid < iosだが、iosはdeveloper登録で年間1万円程度必要。

マネタイズの目標に対するコストが大きすぎるため、webでのリリースが良さげ。

ユーリカのdeveloperに載せて出せる？バレる？？

無理ならweb + android

webviewを使うならspaにしない方がいいよね。もしアプリ作るならネイティブかflutterで。

バックアップはgoogle drive or google storageにする
バックアップどころか基本はdriveでいい。更新タイミングとか、それらを工夫するだけ。
(毎回更新に行かない)
それも難しいかな？回数制限なさそうだし、いいかなー。


firebase hostingでdeploy

課金機能はstripe??

[https://qiita.com/nekoharuyuki/items/f1a636373a6e5c7d5b2f](https://qiita.com/nekoharuyuki/items/f1a636373a6e5c7d5b2f)

# その他

twitterなどsnsで開発用アカウント作成して周知する


# setup

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
