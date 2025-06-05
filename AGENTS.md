# エージェント利用ガイド

このリポジトリは OpenAI Codex を利用しています。詳細は [Codex公式ドキュメント](https://platform.openai.com/docs/codex/overview) を参照してください。

## 開発フロー
- 依存パッケージのインストール: `bun install`
- 開発サーバー起動: `bun run dev`
- 本番ビルド: `bun run build`
- コード整形: `bun run format`
- リント: `bun run lint`
- 変更をコミットする前に、必ず format と lint を実行してください。

## コードスタイル
- TypeScript、Prettier、ESLint を使用しています。
- コミットメッセージは簡潔に、**英語**で記述してください。
- 新しいパッケージを追加する場合は、事前に必ず相談してください。

## テストについて
- 現在、自動テストはありません。コミット前に `bun run build` でビルドが通ることを確認してください。
