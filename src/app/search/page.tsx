import { Suspense } from "react";
import { getPaginatedListOfProductsBySearch } from "@/api/products";
import { Spinner } from "@/ui/atoms/Spinner";
import { ProductList } from "@/ui/organisms/ProductList";

type SearchPageProps = {
	searchParams: {
		query: string;
	};
};
export default async function SearchPage({ searchParams }: SearchPageProps) {
	const products = await getPaginatedListOfProductsBySearch(searchParams.query);

	if (!products || products.data.length === 0) return <p>No products found.</p>;

	return (
		<section>
			<Suspense key="searchPage" fallback={<Spinner />}>
				<ProductList products={products.data} />
			</Suspense>
		</section>
	);
}
