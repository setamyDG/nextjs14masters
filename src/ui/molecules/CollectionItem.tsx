import NextImage from "next/image";
import Link from "next/link";
import { type Route } from "next";
import { type CollectionListItemFragment } from "@/gql/graphql";

type CollectionItemProps = {
	collection: CollectionListItemFragment;
};
export const CollectionItem = ({ collection }: CollectionItemProps) => (
	<Link href={`/collections/${collection.slug}` as Route}>
		<NextImage
			width={300}
			height={200}
			alt={collection.name}
			src={`/${collection.slug}.avif`}
			className="h-[340px] w-full rounded-xl object-cover"
		/>
		<h2 className="text-md  font-bold italic">{collection.name}</h2>
		<p className="text-sm">{collection.description}</p>
	</Link>
);
