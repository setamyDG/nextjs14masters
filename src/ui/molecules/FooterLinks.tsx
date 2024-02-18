import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { routes } from "@/const/routes";

export const FooterLinks = () => {
	return (
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
					<h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
					<ul role="list" className="mt-6 space-y-4">
						<li>
							<Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
								Privacy
							</Link>
						</li>
						<li>
							<Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
								Terms
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
