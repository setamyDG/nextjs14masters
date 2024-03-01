import { type Route } from "next";
import { type CollectionListItemFragment } from "@/gql/graphql";
import { CardLink } from "@/ui/atoms/CardLink";

type CollectionListProps = {
	collections: CollectionListItemFragment[];
};

export const CollectionList = ({ collections }: CollectionListProps): JSX.Element => (
	<ul className="mb-8 grid grid-cols-1 gap-8 border-b pb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
		{collections.map((collection) => (
			<CardLink
				name={collection.name}
				src={`/${collection.slug}.avif`}
				key={collection.id}
				href={`/collections/${collection.slug}` as Route}
			/>
		))}
	</ul>
);
