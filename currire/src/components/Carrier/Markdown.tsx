import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownEntryProps {
	markdownContent: string;
}

const MarkdownEntry = ({ markdownContent }: MarkdownEntryProps) => {
	return (
		<section>
			<h2 className="text-2xl font-semibold mb-6">詳細なスキル説明</h2>
			<div className="card bg-base-200 shadow-xl p-6">
				<div className="prose max-w-none">
					<ReactMarkdown>{markdownContent}</ReactMarkdown>
				</div>
			</div>
		</section>
	);
};

export default MarkdownEntry;
