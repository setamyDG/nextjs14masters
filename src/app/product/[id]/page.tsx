import { type Metadata } from "next";
import { Suspense } from "react";
import { getProductById } from "@/api/product";
import { ProductItem } from "@/ui/molecules/ProductItem";
import { Spinner } from "@/ui/atoms/Spinner";
import { getSuggestedProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

type Params = {
	params: {
		id: string;
	};
};

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
	const data = await getProductById(params.id);
	if (!data.product) return { title: "Product" };

	return {
		title: data.product.name,
		description: data.product.description,
	};
};

export default async function ProductPage({ params }: Params) {
	const data = await getProductById(params.id);

	if (!data.product) return <p>Product not found.</p>;

	const suggestedProducts = await getSuggestedProducts(data.product);

	return (
		<section>
			<Suspense key="product" fallback={<Spinner />}>
				<ProductItem product={data.product} />
			</Suspense>
			<Suspense key="suggestedProducts" fallback={<Spinner />}>
				{suggestedProducts && (
					<div data-testid="related-products" className="my-8 border-t">
						<h2 className="my-4 w-fit rounded-xl bg-black p-1.5 text-2xl font-bold text-white">
							Related products
						</h2>
						<ProductList products={suggestedProducts} />
					</div>
				)}
			</Suspense>
		</section>
	);
}
