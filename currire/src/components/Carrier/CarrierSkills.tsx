import Timeline from "daisyui";

interface CarrierTimelineProps {
	Carriers: CarrierSkillsProps;
}

const icons: { [key: string]: { iconPath: string; id: string } } = {
	php: { iconPath: "devicon-php-plain", id: "php" },
	react: { iconPath: "devicon-react-original", id: "react" },
	nextjs: { iconPath: "devicon-nextjs-plain", id: "nextjs" },
	javascript: { iconPath: "devicon-javascript-plain", id: "javascript" },
	sql: { iconPath: "devicon-mysql-plain", id: "sql" },
	python: { iconPath: "devicon-python-plain", id: "python" },
	csharp: { iconPath: "devicon-csharp-plain", id: "c#" },
};

function getIconPath(iconId: string): string {
	const iconInfo = Object.values(icons).find((icon) => icon.id === iconId);

	return iconInfo ? iconInfo.iconPath : "devicon-unknown";
}

export function CarrierSkills({ Carriers }: CarrierTimelineProps) {
	return (
		<div className="space-y-4">
			{Carriers.technologies.map((Carrier, index) => (
				<div key={index} className="collapse collapse-arrow">
					<input type="radio" name="work" />
					<div className="collapse-title bg-base-100 text-black">
						{Carrier.whatSkill}
						<i
							className={getIconPath(
								Carrier.whatSkill.toLowerCase()
							)}
						></i>
					</div>
					<div className="collapse-content">
						<p>{Carrier.howLong}</p>
						<p>プロダクトの表示</p>
					</div>
				</div>
			))}
		</div>
	);
}
