import Link from "next/link";
import { type CategoriesListItemFragment } from "@/gql/graphql";

type CategoryListItemProps = {
	category: CategoriesListItemFragment;
};

export const CategoryListItem = ({ category }: CategoryListItemProps): JSX.Element => {
	return (
		<li>
			<Link
				className="flex h-48 w-full items-center justify-center rounded-lg bg-gray-100 text-center font-semibold shadow-md"
				href={`/categories/${category.slug}/1`}
			>
				{category.name}
			</Link>
		</li>
	);
};
