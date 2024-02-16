"use client";

import { type ReactNode, useState, useEffect } from "react";

type HamburgerProps = {
	children?: ReactNode;
	onClick?: () => void;
};

export const Hamburger = ({ children }: HamburgerProps) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const onClickOutside = () => {
		setIsNavOpen(false);
	};

	useEffect(() => {
		if (isNavOpen) {
			document.addEventListener("click", onClickOutside);
		} else {
			document.removeEventListener("click", onClickOutside);
		}
		return () => {
			document.removeEventListener("click", onClickOutside);
		};
	}, [isNavOpen]);

	return (
		<>
			<div className="cursor-pointer sm:hidden" onClick={() => setIsNavOpen(true)}>
				<img src="../../menu.svg" />
			</div>
			{isNavOpen && (
				<div className="fixed inset-0 z-50 bg-black bg-opacity-50">
					<div className="absolute bottom-0 left-0 h-[300px] w-full translate-y-full transform bg-white p-4 transition-transform">
						<div
							className="absolute right-4 top-4 cursor-pointer"
							onClick={() => setIsNavOpen(false)}
						>
							<img src="../../close.svg" />
						</div>
						{children}
					</div>
				</div>
			)}
		</>
	);
};
