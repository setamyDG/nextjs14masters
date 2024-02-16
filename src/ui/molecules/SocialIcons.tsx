import { externalLinks } from "@/const/routes";
import { SocialIconLink } from "@/ui/atoms/SocialIconLink";

export const SocialIcons = () => (
	<div className="flex gap-4">
		{externalLinks.map((link) => (
			<SocialIconLink key={link.alt} {...link} />
		))}
	</div>
);
