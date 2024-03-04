import Link from "next/link";
import { CardImage } from "@/ui/atoms/CardImage";
import { type CategoriesListItemFragment } from "@/gql/graphql";

type CategoryListItemProps = {
	category: CategoriesListItemFragment;
};

export const CategoryListItem = ({ category }: CategoryListItemProps): JSX.Element => {
	const categoryImage: Record<CategoriesListItemFragment["name"], string> = {
		Accessories: "./accessories.avif",
		Hoodies: "./hoodies.avif",
		"T-shirts": "./t-shirts.avif",
	};

	return (
		<li>
			<Link href={`/categories/${category.slug}/1`}>
				<article>
					<CardImage alt={category?.name} src={categoryImage[category.name] || ""} />
				</article>
			</Link>
		</li>
	);
};
