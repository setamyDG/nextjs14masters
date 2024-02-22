import { Suspense } from "react";
import { getCollectionBySlug } from "@/api/collections";
import { Spinner } from "@/ui/atoms/Spinner";
import { ProductList } from "@/ui/organisms/ProductList";

type CollectionsPageProps = {
	params: {
		slug: string;
	};
};

export const generateMetadata = async ({ params }: CollectionsPageProps) => {
	const collection = await getCollectionBySlug(params.slug);
	if (!collection) return { title: "Collection" };
	return {
		title: collection.name,
		description: collection.description,
		openGraph: {
			title: collection.name,
		},
	};
};

export default async function CollectionPage({ params }: CollectionsPageProps) {
	const collection = await getCollectionBySlug(params.slug);
	if (!collection) return <p>No collections found.</p>;

	return (
		<section>
			<div className="mb-8">
				<h1 className="text-3xl font-bold">{collection.name}</h1>
				<p className="italic">{collection.description}</p>
			</div>
			<Suspense key="collectionProducts" fallback={<Spinner />}>
				<ProductList products={collection.products} />
			</Suspense>
		</section>
	);
}
