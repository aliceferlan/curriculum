// 使用する型のみをインポート
import { CarrierSkillsProps } from "@/types/carrier";

// アイコン定義のオブジェクト
const icons: { [key: string]: { iconPath: string; id: string } } = {
	php: { iconPath: "devicon-php-plain", id: "php" },
	react: { iconPath: "devicon-react-original", id: "react" },
	nextjs: { iconPath: "devicon-nextjs-plain", id: "nextjs" },
	javascript: { iconPath: "devicon-javascript-plain", id: "javascript" },
	sql: { iconPath: "devicon-mysql-plain", id: "sql" },
	python: { iconPath: "devicon-python-plain", id: "python" },
	csharp: { iconPath: "devicon-csharp-plain", id: "c#" }, // idをキー名と一致させる
};

// アイコンパスを取得する関数
function getIconPath(skill: string): string {
	// スキル名を小文字に変換し、特殊文字を処理
	const normalizedSkill = skill.toLowerCase().replace("#", "sharp");
	// アイコン情報を直接キーで取得
	return icons[normalizedSkill]?.iconPath || "devicon-unknown";
}

// キャリアスキルコンポーネント
export function CarrierSkills({ technologies }: CarrierSkillsProps) {
	return (
		<div className="space-y-4">
			{technologies.map((skill, index) => (
				<div key={`skill-${index}`} className="collapse collapse-arrow">
					<input
						type="radio"
						name="work"
						id={`skill-radio-${index}`}
					/>
					<div className="collapse-title bg-base-100 text-black">
						{skill.whatSkill}
						<i className={getIconPath(skill.whatSkill)}></i>
					</div>
					<div className="collapse-content">
						<p>{skill.howLong}</p>
						<p>プロダクトの表示</p>
					</div>
				</div>
			))}
		</div>
	);
}
