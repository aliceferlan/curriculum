import { CarrierEntry } from "@/types/carrier";
import fs from "fs";
import path from "path";

interface CarrierTimelineProps {
	carriers: CarrierEntry[];
}

// 作品情報の型を定義
interface Work {
	title: string;
	content: string;
}

interface CarrierWorkEntry extends CarrierEntry {
	works?: Work[];
}

interface CarrierWorkMap {
	[company: string]: CarrierWorkEntry;
}

export function CarrierTimeline({ carriers }: CarrierTimelineProps) {
	const carrierWork: CarrierWorkMap = {};

	carriers.forEach((carrier) => {
		const worksDir = path.join(
			process.cwd(),
			"public",
			"works",
			carrier.companyID
		);

		if (fs.existsSync(worksDir)) {
			const mdFiles = fs
				.readdirSync(worksDir)
				.filter((file) => file.endsWith(".md"));

			if (mdFiles.length > 0) {
				// MDファイルの内容を読み込む
				const works = mdFiles.map((file) => {
					const filePath = path.join(worksDir, file);
					const content = fs.readFileSync(filePath, "utf-8");
					return {
						title: file.replace(".md", ""),
						content: content,
					};
				});

				carrierWork[carrier.company] = {
					...carrier,
					works: works,
				};
			} else {
				carrierWork[carrier.company] = carrier;
			}
		} else {
			carrierWork[carrier.company] = carrier;
		}
	});

	return (
		<ul className="timeline timeline-vertical">
			{Object.entries(carrierWork).map(([company, work]) => (
				<li key={company}>
					<div className="timeline-start">{work.period}</div>
					<div className="timeline-end timeline-box">
						<h3 className="font-bold text-lg">{work.company}</h3>
						<p className="text-sm opacity-80">{work.position}</p>
						<ul className="list-disc list-inside mt-2">
							{work.description.map((desc: string, i: number) => (
								<li key={i} className="text-sm">
									{desc}
								</li>
							))}
						</ul>
						<div className="flex flex-wrap gap-2 mt-3">
							{work.works &&
								work.works.map((work: Work, i: number) => (
									<span
										key={i}
										className="badge badge-primary"
									>
										{work.title}
									</span>
								))}
						</div>
					</div>
				</li>
			))}
		</ul>
	);
}
