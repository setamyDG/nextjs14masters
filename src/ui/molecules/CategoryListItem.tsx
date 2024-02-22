import Link from "next/link";
import { CardImage } from "@/ui/atoms/CardImage";
import { CardDescription } from "@/ui/atoms/CardDescription";
import { type CategoriesListItemFragment } from "@/gql/graphql";

type CategoryListItemProps = {
	category: CategoriesListItemFragment;
};

export const CategoryListItem = ({ category }: CategoryListItemProps): JSX.Element => (
	<li>
		<Link href={`/categories/${category.slug}/1`}>
			<article>
				<CardImage alt={category?.name} src={""} />
				<CardDescription name={category?.name} />
			</article>
		</Link>
	</li>
);
