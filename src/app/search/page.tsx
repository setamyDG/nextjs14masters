import { Suspense } from "react";
import { getPaginatedListOfProductsBySearch } from "@/api/products";
import { Spinner } from "@/ui/atoms/Spinner";
import { ProductList } from "@/ui/organisms/ProductList";

type SearchPageProps = {
	searchParams: {
		query: string;
	};
};

export async function generateMetadata({ searchParams }: SearchPageProps) {
	return {
		title: `Search results for: ${searchParams.query}`,
		description: `Search results for: ${searchParams.query}`,
	};
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
	const products = await getPaginatedListOfProductsBySearch(searchParams.query);

	if (!products || products.data.length === 0) return <p>No products found.</p>;

	return (
		<section>
			<h1 className="mb-4 w-fit rounded-xl bg-black p-1.5 text-2xl font-bold text-white">
				Search results for: &quot;{searchParams.query}&quot;
			</h1>
			<Suspense key="searchPage" fallback={<Spinner />}>
				<ProductList products={products.data} />
			</Suspense>
		</section>
	);
}
