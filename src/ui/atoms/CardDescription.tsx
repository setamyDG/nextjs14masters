import Link from "next/link";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils/intl";
import { Rating } from "@/ui/atoms/Rating";

type CardDescriptionProps = {
	product: ProductsListItemFragment;
};

export const CardDescription = ({ product }: CardDescriptionProps): JSX.Element => (
	<div className="mt-2 flex flex-col">
		<Link href={`/product/${product.id}`}>
			<h3 role="heading" className="font-semibold">
				{product.name}
			</h3>
		</Link>
		{product.categories && (
			<p className="text-sm text-gray-500">
				{product.categories.map((category) => category.name).join(", ")}
			</p>
		)}
		{product.price && (
			<p data-testid="product-price" className="text-lg font-bold">
				{formatMoney(product.price / 100)}
			</p>
		)}
		<Rating rating={product.rating || 0} />
	</div>
);
