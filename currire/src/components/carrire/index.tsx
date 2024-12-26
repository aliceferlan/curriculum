// components/Career.tsx
import { CareerTimeline } from "./CareereTimeline";
import { CareerSkills } from "./CareereSkills";

// サンプルデータ（実際のデータに置き換えてください）
const careerData: CareerEntry[] = [
	{
		company: "株式会社成玉舎",
		period: "2021年2月 - 現在",
		position: "情報システム課",
		description: [
			"Next.jsを用いたWebアプリケーションの開発",
			"チームリーダーとして5名のエンジニアのマネジメント",
			"パフォーマンス最適化によるLCPの50%改善",
		],
		technologies: ["Next.js", "TypeScript", "TailwindCSS"],
	},
	{
		company: "よこはま夢くらぶ",
		period: "2020年1月 - 2021年1月",
		position: "一般スタッフ",
		description: ["介護対応", "家事作業", "事務作業"],
		technologies: [],
	},
	// 他の職歴データ...
];

export default function Career() {
	return (
		<div className="space-y-12">
			{/* 概要セクション */}
			<section className="card bg-base-200 shadow-xl p-6">
				<h2 className="text-2xl font-semibold mb-4">
					プロフィール概要
				</h2>
				<p className="text-lg">
					フロントエンド開発を専門とするエンジニアとして、モダンなWeb技術を活用したアプリケーション開発に従事してきました。
					ユーザー体験の向上とパフォーマンスの最適化に特に注力しています。
				</p>
			</section>

			{/* タイムライン */}
			<section>
				<h2 className="text-2xl font-semibold mb-6">職務経歴</h2>
				<CareerTimeline careers={careerData} />
			</section>

			{/* スキルセット */}
			<section>
				<h2 className="text-2xl font-semibold mb-6">技術スタック</h2>
				<CareerSkills careers={careerData} />
			</section>
		</div>
	);
}
