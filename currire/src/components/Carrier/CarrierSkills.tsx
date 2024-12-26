// components/CarrierTimeline.tsx
import Timeline from "daisyui";

interface CarrierTimelineProps {
	Carriers: CarrierEntry[];
}

export function CarrierSkills({ Carriers }: CarrierTimelineProps) {
	return (
		<ul className="timeline timeline-vertical">
			{Carriers.map((Carrier, index) => (
				<li key={index} className="timeline-item">
					<div className="timeline-start">{Carrier.period}</div>
					<div className="timeline-middle"></div>
					<div className="timeline-end timeline-box">
						<h3 className="font-bold text-lg">{Carrier.company}</h3>
						<p className="text-sm opacity-80">{Carrier.position}</p>
						<ul className="list-disc list-inside mt-2">
							{Carrier.description.map((desc, i) => (
								<li key={i} className="text-sm">
									{desc}
								</li>
							))}
						</ul>
						<div className="flex flex-wrap gap-2 mt-3">
							{Carrier.technologies.map((tech, i) => (
								<span key={i} className="badge badge-primary">
									{tech}
								</span>
							))}
						</div>
					</div>
				</li>
			))}
		</ul>
	);
}
