import Link from "next/link";
import { Logo } from "@/ui/atoms/Logo";
import { Navigation } from "@/ui/molecules/Navigation";
import { Hamburger } from "@/ui/atoms/Hamburger";
import { Cart } from "@/ui/molecules/Cart";
export const Header = () => (
	<header className="sticky top-0 z-10 hidden w-full items-center justify-between border border-gray-200 bg-gray-50 px-8 py-6 sm:flex">
		<Link href="/">
			<Logo />
		</Link>
		<Navigation />
		<article className="flex items-center gap-4">
			<Cart productsCount={3} />
			<Hamburger />
		</article>
	</header>
);
