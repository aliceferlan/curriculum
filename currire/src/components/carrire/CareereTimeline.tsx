// components/CareerTimeline.tsx
// import { Timeline } from "react-daisyui";

interface CareerTimelineProps {
	careers: CareerEntry[];
}

export function CareerTimeline({ careers }: CareerTimelineProps) {
	return (
		<ul className="timeline timeline-vertical">
			{careers.map((career, index) => (
				<li key={index} className="timeline-item">
					<div className="timeline-start">{career.period}</div>
					<div className="timeline-end timeline-box">
						<h3 className="font-bold text-lg">{career.company}</h3>
						<p className="text-sm opacity-80">{career.position}</p>
						<ul className="list-disc list-inside mt-2">
							{career.description.map((desc, i) => (
								<li key={i} className="text-sm">
									{desc}
								</li>
							))}
						</ul>
						<div className="flex flex-wrap gap-2 mt-3">
							{career.technologies.map((tech, i) => (
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
