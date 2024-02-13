import { type Product } from "@/types/product";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getProductById = async (id: string) => {
	const response = await fetch(`${apiUrl}/products/${id}`);

	if (!response.ok) {
		throw new Error("Failed to fetch product");
	}

	const product = (await response.json()) as Product;
	return product;
};
