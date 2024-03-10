import { type CartFragment } from "@/gql/graphql";
import { Payment } from "@/ui/molecules/Payment";
import { CartProductList } from "@/ui/organisms/CartProductList";
import { formatMoney } from "@/utils/intl";

type SidebarProps = {
	cart: CartFragment;
};

export const Drawer = ({ cart }: SidebarProps) => {
	const total =
		cart && cart.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

	return (
		<aside className="fixed inset-y-0 right-0 z-50 flex w-[450px] flex-col bg-white p-4 shadow-lg transition-transform ">
			<div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
				<h3 className="text-lg font-semibold">Products</h3>
				<a
					href="/cart"
					className="text-sm font-semibold text-gray-500 transition-colors hover:text-gray-900"
				>
					View Cart
				</a>
			</div>
			<div className="flex-1 overflow-auto py-4">
				{!cart ? <p>your cart is empty</p> : <CartProductList cart={cart} />}
			</div>
			{cart && (
				<div className="flex w-full flex-col justify-end border-t border-gray-200 py-4">
					<div className="flex w-full items-center justify-between font-semibold">
						<p>Total:</p>
						<p>{formatMoney(total / 100)}</p>
					</div>
					<Payment />
				</div>
			)}
		</aside>
	);
};
