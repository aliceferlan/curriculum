// WorkTemplate.tsx
import { WorkData } from "@/types/carrier";
import ReactMarkdown from "react-markdown";

// プロパティの型定義
interface Props {
  data: WorkData; // データをpropsとして受け取るように修正
}

export default function WorkTemplate({ data }: Props) {
  // データの存在チェック
  if (!data) {
    return <div>データが見つかりません</div>;
  }

  // テンプレート文字列を見やすく整形
  const template = `
## ${data.title}

### プロジェクト概要
- サービス形態：${data.serviceType}
- 開発期間：${data.priod}
- チーム構成：${data.teamContent}
- 自分の役割：${data.role}

### 技術スタック
${data.techStack.map((tech) => `- ${tech}`).join("\n")}

### 取り組んだ課題
${data.challenges
  .map((challenge, index) => `${index + 1}. ${challenge}`)
  .join("\n")}

### 解決のためのアプローチ
${data.solvedApproach}

## 本プロジェクトの成果
${data.results.map((result, index) => `${index + 1}. ${result}`).join("\n")}

${data.overall}
`.trim(); // 余分な空白を削除

  // ReactMarkdownにスタイリングを追加
  return (
    <ReactMarkdown
      className="prose prose-blue max-w-none" // Tailwindの設定を追加
      components={{
        // 見出しのスタイリング
        h2: ({  ...props }) => (
          <h2 className="text-2xl font-bold mt-6 mb-4" {...props} />
        ),
        h3: ({  ...props }) => (
          <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />
        ),
        // リストのスタイリング
        ul: ({ ...props }) => (
          <ul className="list-disc ml-6 my-2" {...props} />
        ),
        ol: ({ ...props }) => (
          <ol className="list-decimal ml-6 my-2" {...props} />
        ),
      }}
    >
      {template}
    </ReactMarkdown>
  );
}
