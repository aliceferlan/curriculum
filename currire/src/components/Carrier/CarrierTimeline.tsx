"use client";

import { CarrierEntry } from "@/types/carrier";
import MordalAcordion from "../Modal";
import { Work } from "@/types/carrier";

interface CarrierTimelineProps {
	carriers: (CarrierEntry & { works: Work[] })[];
}

export function CarrierTimeline({ carriers }: CarrierTimelineProps) {
	return (
		<ul className="timeline timeline-vertical">
			{carriers.map((work) => (
				<div key={work.company}>
					<MordalAcordion
						markdownContent={work.works.map((w) => w.content)}
						title={work.companyID}
					/>
					<li>
						<div
							onClick={() =>
								(
									document.getElementById(
										work.companyID
									) as HTMLDialogElement
								).showModal()
							}
						>
							<div className="timeline-start">{work.period}</div>
							<div className="timeline-end timeline-box">
								<h3 className="font-bold text-lg">
									{work.company}
								</h3>
								<p className="text-sm opacity-80">
									{work.position}
								</p>
								<ul className="list-disc list-inside mt-2">
									{work.description.map(
										(desc: string, i: number) => (
											<li key={i} className="text-sm">
												{desc}
											</li>
										)
									)}
								</ul>
								<div className="flex flex-wrap gap-2 mt-3">
									{work.works &&
										work.works.map(
											(work: Work, i: number) => (
												<span
													key={i}
													className="badge badge-primary"
												>
													{work.title}
												</span>
											)
										)}
								</div>
							</div>
						</div>
					</li>
				</div>
			))}
		</ul>
	);
}
