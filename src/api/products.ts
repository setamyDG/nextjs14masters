import {
	ProductsGetListBySearchDocument,
	ProductsGetListDocument,
	type ProductsListItemFragment,
	SuggestedProductsGetLitDocument,
} from "@/gql/graphql";
import { executeGraphQL } from "@/utils/graphql";

export const getPaginatedListOfProducts = async (take: number, skip: number) => {
	const graphqlResponse = await executeGraphQL(ProductsGetListDocument, {
		take,
		skip,
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	return graphqlResponse.products;
};

export const getPaginatedListOfProductsBySearch = async (search: string) => {
	const graphqlResponse = await executeGraphQL(ProductsGetListBySearchDocument, {
		search,
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	return graphqlResponse.products;
};

export const getSuggestedProducts = async (product: ProductsListItemFragment) => {
	if (!product) return;

	const graphqlResponse = await executeGraphQL(SuggestedProductsGetLitDocument);

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	const suggestedProducts = graphqlResponse.products.data.filter((p: ProductsListItemFragment) =>
		p.categories.some((category) => category.name === product.categories[0]?.name),
	);

	return suggestedProducts.slice(0, 4);
};
