import {
	ProductsGetListBySearchDocument,
	ProductsGetListDocument,
	type ProductsListItemFragment,
	SuggestedProductsGetLitDocument,
} from "@/gql/graphql";
import { executeGraphQL } from "@/utils/graphql";

export const getPaginatedListOfProducts = async (take: number, skip: number) => {
	const graphqlResponse = await executeGraphQL({
		query: ProductsGetListDocument,
		variables: {
			take,
			skip,
		},
		next: {
			revalidate: 15,
		},
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	return graphqlResponse.products;
};

export const getPaginatedListOfProductsBySearch = async (search?: string) => {
	if (!search?.length) return;

	const graphqlResponse = await executeGraphQL({
		query: ProductsGetListBySearchDocument,
		variables: {
			search,
		},
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	return graphqlResponse.products;
};

export const getSuggestedProducts = async (currentProduct: ProductsListItemFragment) => {
	if (!currentProduct) return;

	const graphqlResponse = await executeGraphQL({ query: SuggestedProductsGetLitDocument });

	if (!graphqlResponse) {
		throw new Error("Failed to fetch suggested products");
	}

	console.dir(graphqlResponse.products.data, { depth: 90 });

	const suggestedProducts = graphqlResponse.products.data
		.filter(
			(p) =>
				p.categories.some((category) =>
					currentProduct.categories.some((prodCategory) => prodCategory.name === category.name),
				) && p.id !== currentProduct.id,
		)
		.slice(0, 4);

	return suggestedProducts;
};
