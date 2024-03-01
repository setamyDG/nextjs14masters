import Link from "next/link";
import { CardImage } from "@/ui/atoms/CardImage";
import { type CategoriesListItemFragment } from "@/gql/graphql";

type CategoryListItemProps = {
	category: CategoriesListItemFragment;
};

const categoryImage: Record<string, string> = {
	accessories:
		"https://images.unsplash.com/photo-1624823183493-ed5832f48f18?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	hoodies:
		"https://images.unsplash.com/photo-1525199078165-69ce4f553361?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"t-shirts":
		"https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const CategoryListItem = ({ category }: CategoryListItemProps): JSX.Element => (
	<li>
		<Link href={`/categories/${category.slug}/1`}>
			<article>
				<CardImage
					alt={category?.name}
					src={(category.name && categoryImage[category.name]) || "./vercel.svg"}
				/>
			</article>
		</Link>
	</li>
);
