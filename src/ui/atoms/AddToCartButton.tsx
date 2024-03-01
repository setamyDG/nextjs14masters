"use client";

import { ShoppingBag } from "lucide-react";
import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const { pending } = useFormStatus();
	return (
		<button
			disabled={pending}
			className="flex items-center gap-4 rounded-lg border p-4 shadow-md transition-all hover:scale-105 disabled:cursor-wait disabled:bg-gray-200"
		>
			Add to cart
			<ShoppingBag size={24} color="black" />
		</button>
	);
};
