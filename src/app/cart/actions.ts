"use server";

import { revalidateTag } from "next/cache";
import { CartChangeProductQuantityDocument, CartRemoveProductDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/graphql";

export const changeItemQuantity = async (cartId: string, productId: string, quantity: number) => {
	await executeGraphQL({
		query: CartChangeProductQuantityDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
		cache: "no-store",
	});
	revalidateTag("cart");
};

export const removeItemFromCart = async (cartId: string, productId: string) => {
	await executeGraphQL({
		query: CartRemoveProductDocument,
		variables: {
			cartId,
			productId,
		},
		cache: "no-store",
	});
	revalidateTag("cart");
};
