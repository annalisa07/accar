import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { config } from "@/website.config";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center w-full mx-10">
			<Logo />
			<ul className="flex gap-8 py-4">
				{config.navbar.routes.map((m, i) => (
					<li key={m.url + i}>
						<Link href={m.url}>{m.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
