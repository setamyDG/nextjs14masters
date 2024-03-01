import { CategoriesGetListDocument, CategoryGetItemDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/graphql";

export const getListOfCategories = async () => {
	const graphqlResponse = await executeGraphQL({ query: CategoriesGetListDocument });

	if (!graphqlResponse) {
		throw new Error("Failed to fetch categories");
	}

	return graphqlResponse.categories;
};

export const getCategoryProductsBySlug = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphQL({
		query: CategoryGetItemDocument,
		variables: { slug: categorySlug },
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch category");
	}

	return graphqlResponse.category;
};
