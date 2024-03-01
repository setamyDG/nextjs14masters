import { ShoppingBag } from "lucide-react";
import { Suspense } from "react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Badge } from "@/ui/atoms/Badge";
import { getCartById } from "@/api/cart";
import { Spinner } from "@/ui/atoms/Spinner";

export const Cart = async () => {
	const cart = await getCartById();
	const quantity = cart?.items.reduce((acc, item) => acc + item.quantity, 0) || 0;

	return (
		<ActiveLink className="relative" activeClassName="" href="/cart">
			<ShoppingBag size={24} color="black" />
			<Suspense key="headerQuantity" fallback={<Spinner />}>
				<div className="absolute right-4 top-[-12px]">
					<Badge value={quantity} />
				</div>
			</Suspense>
		</ActiveLink>
	);
};
