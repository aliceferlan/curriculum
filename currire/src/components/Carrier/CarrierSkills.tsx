// 使用する型のみをインポート
import { CarrierSkillsProps } from "@/types/carrier";

// アイコン定義のオブジェクト
const icons: { [key: string]: { iconPath: string; id: string } } = {
	php: { iconPath: "php-plain", id: "php" },
	react: { iconPath: "react-original", id: "react" },
	nextjs: { iconPath: "nextjs-plain", id: "nextjs" },
	javascript: { iconPath: "javascript-plain", id: "javascript" },
	sql: { iconPath: "mysql-plain", id: "sql" },
	python: { iconPath: "python-plain", id: "python" },
	csharp: { iconPath: "csharp-plain", id: "c#" },
	git: { iconPath: "git-plain", id: "git" },
	github: { iconPath: "github-original", id: "github" },
	html: { iconPath: "html5-plain", id: "html" },
	go: { iconPath: "go-original-wordmark", id: "go" },
};

// アイコンパスを取得する関数
function getIconPath(skill: string): string {
	// スキル名を小文字に変換し、特殊文字を処理
	const normalizedSkill = skill.toLowerCase().replace("#", "sharp");
	// アイコン情報を直接キーで取得

	const iconPath = icons[normalizedSkill]?.iconPath || "unknown";
	return "devicon-" + iconPath + " colored";
}

// キャリアスキルコンポーネント
export function CarrierSkills({ technologies }: CarrierSkillsProps) {
	return (
		<div className="space-y-4">
			<table className="table w-full">
				<thead>
					<tr>
						<th>言語・技術</th>
						<th>経験年数</th>
					</tr>
				</thead>
				<tbody>
					{technologies.map((skill, index) => (
						<tr className="hover" key={index}>
							<td>
								{skill.whatSkill}
								<i className={getIconPath(skill.whatSkill)}></i>
							</td>
							<td>
								<p>{skill.howLong}</p>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
