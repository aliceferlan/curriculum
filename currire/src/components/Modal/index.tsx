import { useState } from "react";
import ReactMarkdown from "react-markdown";

// propsの型定義
interface ModalAccordionProps {
	markdownContent: string[];
	title: string;
}

export default function ModalAccordion({
	markdownContent,
	title,
}: ModalAccordionProps) {
	return (
		// モーダルの開閉状態を制御
		<dialog id={title}>
			<div className="modal-box w-11/12 max-w-7xl  ">
				<div className="space-y-4">
					{/* markdownContentの配列をマップ */}
					{markdownContent.map((content, index) => (
						<div
							className="collapse collapse-arrow bg-base-200 rounded-lg"
							key={`${title}-${index}`}
						>
							<input
								type="checkbox"
								name={`accordion-${title}`}
								id={`accordion-${title}-${index}`}
								className="collapse-input"
							/>
							<div className="collapse-title text-xl font-medium p-4">
								{`${content.split("\n")[0].replace(/#/g, "")}`}
							</div>
							<div className="collapse-content prose dark:prose-invert max-w-none">
								{/* マークダウンのレンダリング */}
								<ReactMarkdown
									components={{
										// インライン要素のスタイリング
										p: ({ node, ...props }) => (
											<p className="my-2" {...props} />
										),
										// 見出しのスタイリング
										h1: ({ node, ...props }) => (
											<h1
												className="text-2xl font-bold my-4"
												{...props}
											/>
										),
										// リストのスタイリング
										ul: ({ node, ...props }) => (
											<ul
												className="list-disc ml-4 my-2"
												{...props}
											/>
										),
									}}
								>
									{content.split("\n").slice(1).join("\n")}
								</ReactMarkdown>
							</div>
						</div>
					))}
				</div>

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
