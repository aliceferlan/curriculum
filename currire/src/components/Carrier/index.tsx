import { CarrierTimeline } from "./CarrierTimeline";
import { CarrierSkills } from "./CarrierSkills";
import { CarrierEntry, CarrierSkillsProps } from "@/types/carrier";
import getWorksByCompanyId from "@/lib/getWorks";

const CarrierData: CarrierEntry[] = [
	{
		company: "株式会社成玉舎",
		companyID: "seigyoku",
		period: "2021年2月 - 現在",
		position: "情報システム課",
		description: [
			"PHP, JavaScript, CSSを使用した社内ポータルサイトの開発・運用",
			"Pythonによる一部業務の自動化",
			"C#を使用した社内アプリケーションの開発",
			"社内ヘルプデスク業務",
		],
		technologies: ["PHP", "JavaScript", "CSS", "Python", "C#"],
		works: [],
	},
	{
		company: "グループホーム",
		companyID: "group-home",
		period: "2020年1月 - 2021年1月",
		position: "一般スタッフ",
		description: ["介護対応", "家事作業", "事務作業"],
		technologies: [],
		works: [],
	},
];
const skillData: CarrierSkillsProps = {
	technologies: [
		{
			whatSkill: "PHP",
			howLong: "2年",
		},
		{
			whatSkill: "Javascript",
			howLong: "2年",
		},
		{
			whatSkill: "SQL",
			howLong: "2年",
		},
		{
			whatSkill: "Python",
			howLong: "1年",
		},
		{
			whatSkill: "C#",
			howLong: "1年",
		},
		{
			whatSkill: "React",
			howLong: "Hobby",
		},

		{
			whatSkill: "NextJS",
			howLong: "Hobby",
		},
		{ whatSkill: "Go", howLong: "Hobby" },
	],
};

const summary =
	"現職では情報システムとして、社内アプリ開発に従事しております。\n社員のスキルレベルを考慮し、'誰でもマニュアルを読まなくても使い方が分かる'をモットーに開発を進めてきました。";

export default function Carrier() {
	CarrierData.forEach((carrier) => {
		if (carrier.companyID !== "") {
			carrier.works = getWorksByCompanyId(carrier.companyID);
		}
	});

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
				<CarrierTimeline carriers={CarrierData} />
			</section>

			{/* スキルセット */}
			<section>
				<h2 className="text-2xl font-semibold mb-6">技術スタック</h2>
				<CarrierSkills technologies={skillData.technologies} />
			</section>
		</div>
	);
}
