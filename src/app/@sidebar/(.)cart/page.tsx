import { getCartById } from "@/api/cart";
import { Overlay } from "@/ui/atoms/Overlay";
import { Drawer } from "@/ui/organisms/Sidebar";

export default async function Sidebar() {
	const cart = await getCartById();

	return (
		<>
			<Overlay />
			<Drawer cart={cart!} />
		</>
	);
}
