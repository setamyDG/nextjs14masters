import { Suspense } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Navigation } from "@/ui/molecules/Navigation";
import { Cart } from "@/ui/molecules/Cart";
import { Search } from "@/ui/atoms/Search";

export const Header = () => (
	<header className="sticky top-0 z-10 hidden w-full items-center justify-between border border-gray-200 bg-gray-50 px-24 py-6 sm:flex">
		<Navigation />
		<article className="flex items-center gap-8">
			<Suspense>
				<Search />
			</Suspense>
			<Cart />
			<div>
				<SignedIn>
					<UserButton />
				</SignedIn>
				<SignedOut>
					<SignInButton />
				</SignedOut>
			</div>
		</article>
	</header>
);
