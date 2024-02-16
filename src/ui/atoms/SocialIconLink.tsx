import Link from "next/link";
import { type AppRoute } from "@/types/route";

export const SocialIconLink = ({ href, icon }: AppRoute) => {
	return (
		<Link
			href={href}
			target="_blank"
			className="rounded-lg border border-black p-1 transition-all hover:scale-95"
		>
			{icon}
		</Link>
	);
};
