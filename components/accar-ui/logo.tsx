import Link from "next/link";
import React from "react";
import Image from "next/image";

const Logo = () => {
	return (
		<div className="flex items-center gap-4">
			<Image
				src={
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYp9U4tN8GBXUp7AQeiMf1mPfdJkwSWn1Oaw&s"
				}
				alt="logo"
				width={50}
				height={50}
			></Image>
			<span className="uppercase text-lg font-semibold">accar</span>
		</div>
	);
};

export default Logo;
