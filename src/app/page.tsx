import { Suspense } from "react";
import { getCollectionsList } from "@/api/collections";
import { getPaginatedListOfProducts } from "@/api/products";
import { CollectionList } from "@/ui/organisms/CollectionList";
import { ProductList } from "@/ui/organisms/ProductList";
import { Spinner } from "@/ui/atoms/Spinner";

export default async function HomePage() {
	const products = await getPaginatedListOfProducts(8, 0);
	const collections = await getCollectionsList();

	if (!products || products.data.length === 0) return <p>No products found.</p>;
	if (!collections || collections.data.length === 0) return <p>No collections found.</p>;

	return (
		<section>
			<h1 className="mb-4 text-3xl font-bold">New collections</h1>
			<Suspense key="collections" fallback={<Spinner />}>
				<CollectionList collections={collections.data} />
			</Suspense>
			<Suspense key="products" fallback={<Spinner />}>
				<ProductList products={products.data} />
			</Suspense>
		</section>
	);
}
