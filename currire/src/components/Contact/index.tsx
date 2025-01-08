// src/app/contact/page.tsx
import { Mail, Book, Github, Twitter } from "lucide-react";

export default function Contact() {
	return (
		// コンテナに上下のパディングを追加
		<div className="container mx-auto ">
			{/* カードのスタイリング */}
			<div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:shadow-xl dark:bg-gray-800">
				<h2 className="text-2xl font-bold mb-6 text-center">
					Contact & Links
				</h2>

				{/* リンクのグリッドレイアウト */}
				<div className="space-y-4">
					{/* メールリンク - mailto:を追加 */}
					<a
						href="mailto:yu@migawarai.com"
						className="flex items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
					>
						<Mail className="w-6 h-6 mr-3 text-gray-500 group-hover:text-blue-500" />
						<span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-500">
							yu@migawarai.com
						</span>
					</a>

					{/* Qiitaリンク */}
					<a
						href="https://qiita.com/aliceundteles"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
					>
						<Book className="w-6 h-6 mr-3 text-gray-500 group-hover:text-green-500" />
						<span className="text-gray-700 dark:text-gray-300 group-hover:text-green-500">
							Qiita
						</span>
					</a>

					{/* GitHubリンク */}
					<a
						href="https://github.com/aliceferlan"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
					>
						<Github className="w-6 h-6 mr-3 text-gray-500 group-hover:text-purple-500" />
						<span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-500">
							GitHub
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}
