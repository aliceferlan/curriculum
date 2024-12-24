"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
	// ----------------------------------------------
	// クライアントがマウントされたかどうかを判定するフラグ
	// （SSR 時にテーマ値が確定しないため、マウント前はプレースホルダを返す）
	// ----------------------------------------------
	const [mounted, setMounted] = useState(false);

	// ----------------------------------------------
	// theme: 現在のテーマ ("light", "dark", "system" など)
	// systemTheme: "system" を指定した場合の実際の OS テーマ状態
	// setTheme: テーマを変更する関数
	// ----------------------------------------------
	const { theme, systemTheme, setTheme } = useTheme();

	// ----------------------------------------------
	// コンポーネントがクライアント側でマウントされたらフラグを更新
	// ----------------------------------------------
	useEffect(() => {
		setMounted(true);
	}, []);

	// ----------------------------------------------
	// マウント前は SSR 時とクライアント時で表示に不一致が出ないように
	// プレースホルダを返す（suppressHydrationWarning で警告を抑制）
	// ----------------------------------------------
	if (!mounted) {
		return <div suppressHydrationWarning className="w-[88px] h-[40px]" />;
	}

	// ----------------------------------------------
	// システムテーマが選択されている場合は OS 設定を参照
	// ----------------------------------------------
	const currentTheme = theme === "system" ? systemTheme : theme;

	// ----------------------------------------------
	// トグルが押されたときの処理
	// ----------------------------------------------
	const handleToggle = () => {
		// ダークならライトへ、ライトならダークへ切り替える
		if (currentTheme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	// ----------------------------------------------
	// ここから実際の描画
	// （マウント後、theme が確定してから表示される）
	// ----------------------------------------------
	return (
		<div>
			<label className="flex cursor-pointer gap-2 items-center">
				{/* 太陽アイコン */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="12" cy="12" r="5" />
					<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
				</svg>

				{/* checked は currentTheme が "dark" かどうかで決定 */}
				<input
					type="checkbox"
					className="toggle theme-controller"
					checked={currentTheme === "dark"}
					onChange={handleToggle}
					aria-label="テーマ切り替え"
				/>

				{/* 月アイコン */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
				</svg>
			</label>
		</div>
	);
};
