import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { Suspense } from "react";
import { getPaginatedListOfProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";
import { Select } from "@/ui/atoms/Select";
import { type SortDirection, type ProductSortBy } from "@/gql/graphql";
import { Spinner } from "@/ui/atoms/Spinner";

type ProductsPageProps = {
	params: {
		page: string[];
	};
	searchParams: {
		sort: string;
	};
};

export async function generateStaticParams() {
	const products = await getPaginatedListOfProducts(40, 0);
	const totalPages = Math.ceil(products.data.length / 8);
	const paths = Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => ({
		params: { page: [String(page)] },
	}));
	return paths;
}

export const metadata: Metadata = {
	title: "Products",
	description: "List of all products",
	openGraph: {
		title: "Products",
		description: "List of all products",
	},
};

export default async function ProductsPage({ params, searchParams }: ProductsPageProps) {
	const offset = params.page ? Number(params.page[0]) * 8 - 8 : 0;
	const order = searchParams.sort?.includes("-") ? "DESC" : ("ASC" as SortDirection);
	const orderBy = searchParams.sort?.replace("-", "").toUpperCase() as ProductSortBy;
	console.log("searchParams", searchParams);
	const products = await getPaginatedListOfProducts(8, offset, order, orderBy);
	const paramsPageLength = params?.page?.length;

	if (paramsPageLength >= 2) {
		return notFound();
	}

	return (
		<section>
			<div className="flex items-center justify-between">
				<h1 className="mb-4 w-fit rounded-xl bg-black p-1.5 text-2xl font-bold text-white">
					All products
				</h1>
				<Select />
			</div>
			<Suspense key="all products" fallback={<Spinner />}>
				<ProductList products={products.data || []} />
			</Suspense>
			<Pagination
				url="/products"
				pageNumber={params.page ? Number(params.page[0]) : 1}
				totalPages={Math.ceil(products.meta.total / 8)}
			/>
		</section>
	);
}
