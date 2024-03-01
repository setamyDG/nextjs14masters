import { type Metadata } from "next";
import { Suspense } from "react";
import { getCollectionsList } from "@/api/collections";
import { getPaginatedListOfProducts } from "@/api/products";
import { CollectionList } from "@/ui/organisms/CollectionList";
import { ProductList } from "@/ui/organisms/ProductList";
import { Spinner } from "@/ui/atoms/Spinner";

export const metadata: Metadata = {
	title: "Next.js 14 Masters - Home",
	description: "Welcome to the Next.js 14 Masters course!",
	openGraph: {
		title: "Next.js 14 Masters - Home",
		description: "Welcome to the Next.js 14 Masters course!",
	},
};

export const generateStaticParams = () => {
	return {
		routes: ["/"],
	};
};
export default async function HomePage() {
	const products = await getPaginatedListOfProducts(8, 0);
	const collections = await getCollectionsList();

	if (!products || products.data.length === 0) return <p>No products found.</p>;
	if (!collections || collections.data.length === 0) return <p>No collections found.</p>;

	return (
		<section>
			<h1 className="mb-4 w-fit rounded-xl bg-black p-1.5 text-2xl font-bold text-white">
				New collections
			</h1>
			<CollectionList collections={collections.data} />
			<Suspense key="productsListHome" fallback={<Spinner />}>
				<ProductList products={products.data} />
			</Suspense>
		</section>
	);
}
