# 都道府県別総人口推移グラフ

都道府県別の総人口推移グラフを表示する SPA

## セットアップ

[RESAS API](https://opendata.resas-portal.go.jp/)で API キーの取得が必要です。  
取得後、ルートディレクトに `.env.local` ファイルを作成し、ファイル内に下記を追加。

```
NEXT_PUBLIC_RESAS_API_KEY="取得したAPIキー"
```

### ローカル起動手順

```
# パッケージのインストール
$ yarn

# 開発サーバー起動
$ yarn dev
```
