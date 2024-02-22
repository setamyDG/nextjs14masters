import NextImage from "next/image";

export const Logo = () => (
	<NextImage className="object-cover" src="/logo.svg" width={36} height={36} alt="logo" />
);
