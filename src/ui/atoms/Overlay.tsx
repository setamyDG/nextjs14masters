"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const Overlay = () => {
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = () => {
		if (pathname === "/cart") {
			router.refresh();
		} else {
			router.back();
		}
	};

	return (
		<Link
			href="#"
			onClick={handleClick}
			className="fixed inset-0 z-10 bg-slate-700 bg-opacity-75 transition-all duration-300"
		/>
	);
};
