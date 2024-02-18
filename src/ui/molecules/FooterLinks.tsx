import Link from "next/link";
import { ShoppingCart, HeartHandshake, Cookie, ReceiptText } from "lucide-react";
import { routes } from "@/const/routes";
import { type AppRoute } from "@/types/route";

const LegalLinks: AppRoute[] = [
	{ href: "#", label: "Privacy", icon: <Cookie size={24} color="gray" /> },
	{ href: "#", label: "Terms of use", icon: <ReceiptText size={24} color="gray" /> },
];

export const FooterLinks = () => (
	<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
		<div className="md:grid md:grid-cols-2 md:gap-8">
			<div>
				<div className="flex gap-4">
					<ShoppingCart size={24} color="black" />
					<h3 className="text-sm font-semibold leading-6 text-gray-900">Shop</h3>
				</div>
				<ul role="list" className="mt-6 space-y-4">
					{routes.map((route) => (
						<li key={route.href}>
							<Link
								className="flex items-center gap-4 text-sm leading-6 text-gray-600 hover:text-gray-900"
								href={route.href}
							>
								{route.icon}
								{route.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="mt-10 md:mt-0">
				<div className="flex gap-4">
					<HeartHandshake size={24} color="black" />
					<h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
				</div>
				<ul role="list" className="mt-6 space-y-4">
					{LegalLinks.map((route) => (
						<li key={route.href}>
							<Link
								className="flex items-center gap-4 text-sm leading-6 text-gray-600 hover:text-gray-900"
								href={route.href}
							>
								{route.icon}
								{route.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	</div>
);
