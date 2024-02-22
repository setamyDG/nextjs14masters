import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils/intl";

type CardDescriptionProps = {
	name: string;
	price?: number;
	categories?: ProductsListItemFragment["categories"];
};

export const CardDescription = ({ name, price, categories }: CardDescriptionProps): JSX.Element => (
	<div className="mt-2 flex flex-col">
		<h1 className="font-semibold text-gray-700">{name}</h1>
		{categories && (
			<p className="text-sm text-gray-500">
				{categories.map((category) => category.name).join(", ")}
			</p>
		)}
		{price && <p className="text-sm font-medium text-gray-700">{formatMoney(price / 100)}</p>}
	</div>
);
