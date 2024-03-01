import { getCartById } from "@/api/cart";
import { Overlay } from "@/ui/atoms/Overlay";
import { Drawer } from "@/ui/organisms/Sidebar";

export default async function Sidebar() {
	const cart = await getCartById();

	if (!cart || !cart.items.length || !cart.items[0]?.product) {
		return <p>add some products!</p>;
	}
	return (
		<>
			<Overlay />
			<Drawer cart={cart} />
		</>
	);
}
