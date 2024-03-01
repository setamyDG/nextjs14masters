import { type CartFragment } from "@/gql/graphql";
import { CartProductList } from "@/ui/organisms/CartProductList";

type SidebarProps = {
	cart: CartFragment;
};

export const Drawer = ({ cart }: SidebarProps) => {
	return (
		<aside className="fixed inset-y-0 right-0 z-50 w-[450px] bg-white p-4 shadow-lg transition-transform ">
			<div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
				<h3 className="text-lg font-semibold">Products</h3>
			</div>
			<div className="py-4">
				<CartProductList cart={cart} />
			</div>
			<div className="flex w-full justify-end border-t border-gray-200 py-4">
				<a
					href="/cart"
					className="w-full rounded-md bg-gradient-to-r from-gray-700 to-black py-2 text-center font-semibold text-white opacity-90 transition-all hover:bg-gray-800 hover:opacity-100"
				>
					Checkout
				</a>
			</div>
		</aside>
	);
};
