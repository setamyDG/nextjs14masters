import {
	ProductAddReviewDocument,
	ProductGetItemByIdDocument,
	ProductGetReviewsDocument,
} from "@/gql/graphql";
import { executeGraphQL } from "@/utils/graphql";

export const getProductById = async (id: string) => {
	const response = await executeGraphQL({ query: ProductGetItemByIdDocument, variables: { id } });

	if (!response) {
		throw new Error("Failed to fetch product");
	}

	return response;
};

export const getProductReviewsById = async (id: string) => {
	const response = await executeGraphQL({
		query: ProductGetReviewsDocument,
		variables: { productId: id },
	});

	if (!response) {
		throw new Error("Failed to fetch product");
	}

	return response;
};

export const submitProductReview = async (
	author: string,
	description: string,
	email: string,
	productId: string,
	rating: number,
	title: string,
) => {
	const response = await executeGraphQL({
		query: ProductAddReviewDocument,
		variables: {
			author,
			description,
			email,
			productId,
			rating,
			title,
		},
		next: {
			tags: ["productReview"],
		},
	});

	if (!response) {
		throw new Error("Failed to submit review");
	}

	return response;
};
