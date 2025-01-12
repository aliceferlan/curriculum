// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";

export default function Home() {
	return (
		<div className="container mx-auto px-4 py-8">
			{/* ヒーローセクション */}
			<div className="flex justify-center">
				<Image
					src="/img/icon.JPG"
					alt="icon"
					width={300}
					height={300}
					className="flex rounded-full "
				></Image>
			</div>
			<section className="text-center py-20">
				<h1 className="text-4xl font-bold mb-4">Welcome to My Box!!</h1>
				<p className="text-xl text-gray-600">経験と実績置き場</p>
			</section>

			{/* ナビゲーションカード */}
			<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
				{/* 職務経歴カード */}
				<Link href="/carrier" className="card">
					<div className="p-6 bg-white hover:bg-gray-300 rounded-lg shadow-lg">
						<h2 className="text-2xl font-bold mb-2">職務経歴</h2>
						<p className="text-gray-600">
							これまでの職務経験と実績について
						</p>
					</div>
				</Link>

				{/* 履歴カード */}
				<Link href="/history" className="card">
					<div className="p-6 bg-white hover:bg-gray-300 rounded-lg shadow-lg">
						<h2 className="text-2xl font-bold mb-2">履歴</h2>
						<p className="text-gray-600">
							学歴や資格、スキルについて (Coming soon)
						</p>
					</div>
				</Link>
				<div className="md:col-span-2">
					<Contact />
				</div>
			</div>
		</div>
	);
}
