import { notFound } from "next/navigation";
import { getPaginatedListOfProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

type ProductsPageProps = {
	params: {
		page: string[];
	};
};

export default async function ProductsPage({ params }: ProductsPageProps) {
	const offset = params.page ? Number(params.page[0]) * 20 - 20 : 0;
	const products = await getPaginatedListOfProducts(20, offset);
	const paramsPageLength = params?.page?.length;

	if (paramsPageLength >= 2) {
		return notFound();
	}

	return <ProductList products={products || []} />;
}
