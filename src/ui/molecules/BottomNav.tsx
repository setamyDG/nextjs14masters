import { routes } from "@/const/routes";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const BottomNav = () => (
	<nav className="sticky bottom-0 w-full border-b border-t border-slate-200 bg-gray-50 py-4 lg:hidden">
		<ul className="mx-12 flex items-center justify-between">
			{routes.map(({ href, icon, label }) => (
				<li className="flex" key={href}>
					<ActiveLink aria-label={label} exact={href === "/"} href={href}>
						{icon}
					</ActiveLink>
				</li>
			))}
		</ul>
	</nav>
);
