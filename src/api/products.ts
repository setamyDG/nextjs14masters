import { type Product } from "@/types/product";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getPaginatedListOfProducts = async (take: number, offset: number) => {
	const response = await fetch(`${apiUrl}/products?take=${take}&offset=${offset}`);

	if (!response.ok) {
		throw new Error("Failed to fetch products");
	}

	const products = (await response.json()) as Product[];
	return products;
};
