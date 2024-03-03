"use client";
import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const { pending } = useFormStatus();
	return (
		<button
			data-testid="add-to-cart-button"
			disabled={pending}
			className="mt-4 w-full rounded-md bg-gradient-to-r from-gray-700 to-black py-2 text-center font-semibold text-white opacity-90 transition-all hover:bg-gray-800 hover:opacity-100 disabled:cursor-wait"
		>
			Add to cart
		</button>
	);
};
