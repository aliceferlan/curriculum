import React from "react";
import { WorkData } from "@/types/carrier";
import WorkTemplate from "@/lib/worker";


const MarkdownEntry = (data : WorkData) => {
	return (
		<section>
			<h2 className="text-2xl font-semibold mb-6">詳細なスキル説明</h2>
			<div className="card bg-base-200 shadow-xl p-6">
				<div className="prose max-w-none">
          <WorkTemplate data={data} />
				</div>
			</div>
		</section>
	);
};

export default MarkdownEntry;
