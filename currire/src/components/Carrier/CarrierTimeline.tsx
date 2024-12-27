// components/CarrierTimeline.tsx
import { CarrierEntry } from "@/types/carrier";

interface CarrierTimelineProps {
	carriers: CarrierEntry[];
}

export function CarrierTimeline({ carriers }: CarrierTimelineProps) {
	return (
		<ul className="timeline timeline-vertical">
			{carriers.map((carrier, index) => (
				<li key={index} className="timeline-item">
					<div className="timeline-start">{carrier.period}</div>
					<div className="timeline-end timeline-box">
						<h3 className="font-bold text-lg">{carrier.company}</h3>
						<p className="text-sm opacity-80">{carrier.position}</p>
						<ul className="list-disc list-inside mt-2">
							{carrier.description.map((desc, i) => (
								<li key={i} className="text-sm">
									{desc}
								</li>
							))}
						</ul>
						<div className="flex flex-wrap gap-2 mt-3">
							{carrier.technologies.map((tech, i) => (
								<span key={i} className="badge badge-primary">
									{tech}
								</span>
							))}
						</div>
					</div>
				</li>
			))}
			<li></li>
		</ul>
	);
}
