// app/Carrier/page.tsx
import { Metadata } from "next";
import Carrier from "@/components/Carrier";

// メタデータの設定
export const metadata: Metadata = {
	title: "職務経歴 | Portfolio",
	description: "私のこれまでの職務経歴をご紹介します。",
};

// 職務経歴ページのメインコンポーネント
export default function CarrierPage() {
	return (
		<main className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-8 text-center">職務経歴</h1>
			<Carrier />
		</main>
	);
}
