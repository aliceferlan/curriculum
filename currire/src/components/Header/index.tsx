import Link from "next/link";

const Header = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<Link className="btn btn-ghost text-xl" href={"/"}>
					職務経歴書
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href={"/carrier"}>職務経歴</Link>
					</li>
					<li>
						<Link href={"/history"}>履歴</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
