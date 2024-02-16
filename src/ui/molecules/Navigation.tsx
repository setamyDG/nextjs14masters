import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { routes } from "@/const/routes";

export const Navigation = () => {
	return (
		<nav>
			<article className="hidden gap-2 sm:flex">
				{routes.map((route) => (
					<ActiveLink exact={route.label === "Home"} key={route.label} href={route.href}>
						{route.label}
					</ActiveLink>
				))}
			</article>
		</nav>
	);
};
