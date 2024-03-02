import { type Metadata } from "next";
import { Suspense } from "react";
import { getProductById, getProductReviewsById } from "@/api/product";
import { ProductItem } from "@/ui/molecules/ProductItem";
import { Spinner } from "@/ui/atoms/Spinner";
import { getSuggestedProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Rating } from "@/ui/atoms/Rating";
import { ReviewForm } from "@/ui/molecules/ReviewForm";
import { ReviewProductList } from "@/ui/organisms/ReviewProductList";

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
	const productReviews = await getProductReviewsById(data.product.id);

	const sortedProductReviews = productReviews.product?.reviews.sort((a, b) => {
		return new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime();
	});

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
			<div className="max-w-2xl lg:grid lg:max-w-full lg:grid-cols-12 lg:gap-x-8 lg:py-16">
				<div className="lg:col-span-4">
					<h2 className="my-4 w-fit rounded-xl bg-black p-1.5 text-2xl font-bold text-white">
						Customer Reviews
					</h2>
					<div className="mt-3 flex items-center">
						<Rating rating={data.product.rating || 0} />
						<p className="ml-2 text-sm text-gray-900">
							Based on {productReviews.product?.reviews.length} reviews
						</p>
					</div>
					<div className="mt-10">
						<h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
						<p className="my-1 text-sm text-gray-600">
							If you’ve used this product, share your thoughts with other customers
						</p>
						<ReviewForm productId={data.product.id} />
					</div>
				</div>
				{!sortedProductReviews || sortedProductReviews.length === 0 ? (
					<p>No Reviews.</p>
				) : (
					<Suspense key="productReviews" fallback={<Spinner />}>
						<div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
							<div className="flow-root">
								<ReviewProductList reviews={sortedProductReviews} />
							</div>
						</div>
					</Suspense>
				)}
			</div>
		</section>
	);
}
