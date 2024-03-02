"use client";
import { useRouter } from "next/navigation";

export const Overlay = () => {
	const router = useRouter();

	const handleClick = () => {
		router.back();
	};

	return (
		<div
			onClick={handleClick}
			className="fixed inset-0 z-10 bg-slate-700 bg-opacity-75 transition-all duration-300"
		/>
	);
};
