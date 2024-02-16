import { ShoppingBag } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Badge } from "@/ui/atoms/Badge";

type CartProps = {
	productsCount: number;
};

export const Cart = ({ productsCount }: CartProps) => {
	return (
		<div>
			<ActiveLink className="relative" activeClassName="" href="/">
				<ShoppingBag size={24} color="black" />
				<div className="absolute right-4 top-[-12px]">
					<Badge value={productsCount} />
				</div>
			</ActiveLink>
		</div>
	);
};
