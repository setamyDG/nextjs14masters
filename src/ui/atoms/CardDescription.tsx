import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils/intl";

type CardDescriptionProps = {
	name: string;
	price?: number;
	categories?: ProductsListItemFragment["categories"];
	isSuggestedProduct?: boolean;
};

export const CardDescription = ({
	name,
	price,
	categories,
	isSuggestedProduct,
}: CardDescriptionProps): JSX.Element => (
	<div className="mt-2 flex flex-col">
		{isSuggestedProduct ? (
			<h2 className="font-semibold text-gray-700">{name}</h2>
		) : (
			<h1 className="font-semibold text-gray-700">{name}</h1>
		)}
		{categories && (
			<p className="text-sm text-gray-500">
				{categories.map((category) => category.name).join(", ")}
			</p>
		)}
		{price && <p className="text-sm font-medium text-gray-700">{formatMoney(price / 100)}</p>}
	</div>
);
