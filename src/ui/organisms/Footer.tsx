import { CodeSquare } from "lucide-react";
import { Logo } from "@/ui/atoms/Logo";
import { FooterLinks } from "@/ui/molecules/FooterLinks";
import { SocialIcons } from "@/ui/molecules/SocialIcons";

export const Footer = () => (
	<footer className="bg-gray-50">
		<div className="mx-16 max-w-7xl px-6 pb-8 pt-12">
			<div className="xl:grid xl:grid-cols-3 xl:gap-8">
				<div className="space-y-8">
					<Logo />
					<p className="text-sm leading-6 text-gray-600">
						Footer created for <strong className="text-black">NEXT.JS Masters</strong> course.
						Learn, explore and build best webites with Next.js
					</p>
					<SocialIcons />
				</div>
				<FooterLinks />
			</div>
			<div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
				<CodeSquare color="gray" />
				<p className="mt-2 text-xs leading-5 text-gray-500">
					&copy; 2024 DG DEVELOPMENT, Inc. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
);
