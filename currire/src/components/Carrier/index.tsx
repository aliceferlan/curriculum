import { CarrierTimeline } from "./CarrierTimeline";
import { CarrierSkills } from "./CarrierSkills";

// サンプルデータ（実際のデータに置き換えてください）
const CarrierData: CarrierEntry[] = [
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
		company: "グループホーム",
		period: "2020年1月 - 2021年1月",
		position: "一般スタッフ",
		description: ["介護対応", "家事作業", "事務作業"],
		technologies: [],
	},
	// 他の職歴データ...
];
const skillData: CarrierSkillsProps = {
	technologies: [
		{
			whatSkill: "JavaScript",
			howLong: "5年",
		},
		{
			whatSkill: "TypeScript",
			howLong: "3年",
		},
		// 他のスキルデータ...
	],
};
const summary =
	"前職では情報システムとして、社内アプリ開発に従事してきました。\n社員のスキルレベルを考慮し、'誰でもマニュアルを読まなくても使い方が分かる'をモットーに開発を進めてきました。";

export default function Carrier() {
	return (
		<div className="space-y-12">
			{/* 概要セクション */}
			<section className="card bg-base-200 shadow-xl p-6">
				<h2 className="text-2xl font-semibold mb-4">
					プロフィール概要
				</h2>
				<p className="text-lg">{summary}</p>
			</section>

			{/* タイムライン */}
			<section>
				<h2 className="text-2xl font-semibold mb-6">職務経歴</h2>
				<CarrierTimeline Carriers={CarrierData} />
			</section>

			{/* スキルセット */}
			<section>
				<h2 className="text-2xl font-semibold mb-6">技術スタック</h2>
				<CarrierSkills Carriers={CarrierData} />
			</section>
		</div>
	);
}
