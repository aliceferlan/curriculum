// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="container mx-auto px-4 py-8">
			{/* ヒーローセクション */}
			<div className="flex justify-center">
				<Image
					src="/img/kid_icon.png"
					alt="icon"
					width={300}
					height={300}
					className="flex rounded-full "
				></Image>
			</div>
			<section className="text-center py-20">
				<h1 className="text-4xl font-bold mb-4">Welcome!!</h1>
				{/* <p className="text-xl text-gray-600">
					Webエンジニアとしての経験と実績をご紹介します
				</p> */}
			</section>

			{/* ナビゲーションカード */}
			<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
				<Link href="/career" className="card">
					<div className="p-6 bg-white hover:bg-gray-300 rounded-lg shadow-lg">
						<h2 className="text-2xl font-bold mb-2">職務経歴</h2>
						<p className="text-gray-600">
							これまでの職務経験と実績について
						</p>
					</div>
				</Link>
				<Link href="/history" className="card">
					<div className="p-6 bg-white hover:bg-gray-300 rounded-lg shadow-lg">
						<h2 className="text-2xl font-bold mb-2">履歴</h2>
						<p className="text-gray-600">
							学歴や資格、スキルについて
						</p>
					</div>
				</Link>
				<Link href="/contact" className="card w-full">
					<div className="p-6 bg-white hover:bg-gray-300 rounded-lg shadow-lg">
						<h2 className="text-2xl font-bold mb-2">連絡先</h2>
						<p className="text-gray-600">お気軽にどうぞ ψ(｀∇´)ψ</p>
					</div>
				</Link>
			</div>
		</div>
	);
}
