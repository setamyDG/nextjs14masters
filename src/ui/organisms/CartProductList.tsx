import { type CartFragment } from "@/gql/graphql";
import { CartProduct } from "@/ui/molecules/CartProduct";

type CartProductListProps = {
	cart: CartFragment;
	isDescription?: boolean;
};

export const CartProductList = ({ cart, isDescription }: CartProductListProps): JSX.Element => (
	<ul className="flex flex-col gap-4">
		{cart?.items.map((product) => (
			<CartProduct
				cartId={cart.id}
				quantity={product.quantity}
				isDescription={isDescription}
				product={product.product}
				key={product.product.id}
			/>
		))}
	</ul>
);
