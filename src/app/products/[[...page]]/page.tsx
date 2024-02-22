import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getPaginatedListOfProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";

type ProductsPageProps = {
	params: {
		page: string[];
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

export default async function ProductsPage({ params }: ProductsPageProps) {
	const offset = params.page ? Number(params.page[0]) * 8 - 8 : 0;
	const products = await getPaginatedListOfProducts(8, offset);
	const paramsPageLength = params?.page?.length;

	if (paramsPageLength >= 2) {
		return notFound();
	}

	return (
		<section>
			<ProductList products={products.data || []} />
			<Pagination
				url="/products"
				pageNumber={params.page ? Number(params.page[0]) : 1}
				totalPages={Math.ceil(products.meta.total / 8)}
			/>
		</section>
	);
}
