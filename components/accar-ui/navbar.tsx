import Link from "next/link";
import React from "react";
import Logo from "./logo";

const Navbar = () => {
	const routes = [
		{
			name: "home",
			url: "/",
		},
		{
			name: "about us",
			url: "/about-us",
		},
		{
			name: "auto",
			url: "/cars",
		},
		{
			name: "contacts",
			url: "/contacts",
		},
	];
	return (
		<div className="flex justify-between items-center w-full mx-10">
			<Logo />
			<ul className="flex gap-8 py-4">
				{routes.map((m, i) => (
					<Link href={m.url}>
						<li key={m.url + i}>{m.name}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
