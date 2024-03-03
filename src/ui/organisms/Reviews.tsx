"use client";

import React, { Suspense, useOptimistic } from "react";
import { type ProductReviewFragment, type ProductsListItemFragment } from "@/gql/graphql";
import { Rating } from "@/ui/atoms/Rating";
import { ReviewProductList } from "@/ui/organisms/ReviewProductList";
import { Spinner } from "@/ui/atoms/Spinner";
import { handleAddReviewAction } from "@/actions/product";
import { ReviewForm } from "@/ui/molecules/ReviewForm";

type ReviewProps = {
	product: ProductsListItemFragment;
	reviews: ProductReviewFragment[];
};
export const Reviews = ({ product, reviews }: ReviewProps) => {
	// if we will get rid of that, we could do everything on server side. Task says to use useOptimistic.
	const [optimisticReviews, setOptimisticReviews] = useOptimistic(reviews);

	const sortedProductReviews = reviews.sort((a, b) => {
		return new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime();
	});

	const clearForm = (formData: FormData) => {
		formData.set("headline", "");
		formData.set("content", "");
		formData.set("name", "");
		formData.set("email", "");
		formData.set("rating", "");
	};

	return (
		<div className="max-w-2xl lg:grid lg:max-w-full lg:grid-cols-12 lg:gap-x-8 lg:py-16">
			<div className="lg:col-span-4">
				<h2 className="my-4 w-fit rounded-xl bg-black p-1.5 text-2xl font-bold text-white">
					Customer Reviews
				</h2>
				<div className="mt-3 flex items-center">
					<Rating rating={product.rating || 0} />
					<p className="ml-2 text-xs text-gray-900">Based on {reviews.length} reviews</p>
				</div>
				<div className="mt-10">
					<h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
					<p className="my-1 text-sm text-gray-600">
						If you’ve used this product, share your thoughts with other customers
					</p>
					<ReviewForm
						formAction={async (formData) => {
							await handleAddReviewAction(formData, product.id);
							setOptimisticReviews((prev) => [
								...prev,
								{
									id: Math.random().toString(),
									author: String(formData.get("name")),
									title: String(formData.get("headline")),
									email: String(formData.get("email")),
									rating: Number(formData.get("rating")),
									description: String(formData.get("content")),
									createdAt: new Date().toISOString(),
								},
							]);
							clearForm(formData);
						}}
					/>
				</div>
			</div>
			<Suspense key="reviews" fallback={<Spinner />}>
				{!sortedProductReviews || sortedProductReviews.length === 0 ? (
					<p>No Reviews.</p>
				) : (
					<div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
						<div className="flow-root">
							<ReviewProductList reviews={optimisticReviews} />
						</div>
					</div>
				)}
			</Suspense>
		</div>
	);
};
