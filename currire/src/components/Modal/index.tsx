import Markdown from "react-markdown";
interface MarkdownEntryProps {
	markdownContent: string[];
}

export default function MordalAcordion(markdownContent: MarkdownEntryProps) {
	return (
		<dialog id="my_modal_1" className="modal">
			<div className="modal-box">
				{markdownContent.markdownContent.map((content, index) => (
					<div className="collapse bg-base-200" key={index}>
						<input
							type="radio"
							name="my-accordion-1"
							defaultChecked
						/>
						<div className="collapse-title text-xl font-medium">
							{`スキル詳細 ${index + 1}`}
						</div>
						<div className="collapse-content">
							<Markdown>{content}</Markdown>
						</div>
					</div>
				))}

				<div className="modal-action">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn">Close</button>
					</form>
				</div>
			</div>
		</dialog>
	);
}
