import Link from "next/link";
import { CardImage } from "@/ui/atoms/CardImage";
import { CardDescription } from "@/ui/atoms/CardDescription";
import { type ProductsListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductsListItemFragment;
	isSuggestedProduct?: boolean;
};

export const ProductListItem = ({
	product,
	isSuggestedProduct,
}: ProductListItemProps): JSX.Element => (
	<li>
		<Link href={`/product/${product.id}`}>
			<article>
				<CardImage alt={product?.name} src={product?.images[0]?.url || ""} />
				<CardDescription
					name={product?.name}
					price={product?.price}
					categories={product?.categories}
					isSuggestedProduct={isSuggestedProduct}
				/>
			</article>
		</Link>
	</li>
);
