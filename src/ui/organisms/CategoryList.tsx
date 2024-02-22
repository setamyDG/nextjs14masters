import { type Route } from "next";
import { type CategoriesListItemFragment } from "@/gql/graphql";
import { CardLink } from "@/ui/atoms/CardLink";

type ProductListProps = {
	categories: CategoriesListItemFragment[];
};

export const CategoryList = ({ categories }: ProductListProps): JSX.Element => (
	<ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
		{categories.map((category) => (
			<CardLink
				name={category.name}
				key={category.id}
				href={`/categories/${category.slug}/1` as Route}
			/>
		))}
	</ul>
);
