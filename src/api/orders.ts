import { OrdersGetByUserEmailDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/graphql";

export const getOrdersByUserEmail = async (email: string) => {
	const graphqlResponse = await executeGraphQL({
		query: OrdersGetByUserEmailDocument,
		variables: { email },
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch orders");
	}

	return graphqlResponse;
};
