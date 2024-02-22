import { type CollectionListItemFragment } from "@/gql/graphql";
import { CollectionItem } from "@/ui/molecules/CollectionItem";

type CollectionListProps = {
	collections: CollectionListItemFragment[];
};

export const CollectionList = ({ collections }: CollectionListProps): JSX.Element => (
	<ul className="mb-12 grid grid-cols-1 gap-8 border-b pb-4 sm:grid-cols-2 md:grid-cols-3">
		{collections.map((collection) => (
			<CollectionItem key={collection.id} collection={collection} />
		))}
	</ul>
);
