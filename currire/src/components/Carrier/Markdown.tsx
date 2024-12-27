import React from "react";
import ReactMarkdown from "react-markdown";

const markdownContent = `
## 詳細なスキルセット

### フロントエンド
- **HTML/CSS**
  - レスポンシブデザインの実装
  - Bootstrapを使用したUI開発
  - Tailwind CSSによるスタイリング

- **JavaScript/TypeScript**
  - Reactを使用したSPA開発
  - Next.jsによるSSR/SSG実装
  - TypeScriptを用いた型安全な開発

### バックエンド
- **PHP**
  - 社内ポータルサイトの開発・保守
  - レガシーコードのリファクタリング
  - セキュリティ対策の実装

- **Python**
  - 業務自動化スクリプトの開発
  - データ分析・集計処理
  - APIインテグレーション

- **C#**
  - Windows Forms アプリケーション開発
  - .NET Frameworkを使用した業務システム開発

### データベース
- **SQL**
  - クエリのパフォーマンスチューニング
  - データベース設計
  - ストアドプロシージャの作成

### その他
- **開発ツール**
  - Git/GitHubによるバージョン管理
  - VSCodeを使用した開発
  - Docker環境の構築・運用

- **コミュニケーション**
  - 技術選定の提案・実装
  - チーム内コードレビュー
  - 顧客要件のヒアリング・提案
`;

const MarkdownEntry = () => {
	return (
		<section>
			<h2 className="text-2xl font-semibold mb-6">詳細なスキル説明</h2>
			<div className="card bg-base-200 shadow-xl p-6">
				<div className="prose max-w-none">
					<ReactMarkdown>{markdownContent}</ReactMarkdown>
				</div>
			</div>
		</section>
	);
};

export default MarkdownEntry;
