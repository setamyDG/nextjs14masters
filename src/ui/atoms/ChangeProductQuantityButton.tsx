"use client";

import { useOptimistic } from "react";
import { changeItemQuantity } from "@/actions/cart";

type ChangeProductQuantityProps = {
	quantity: number;
	cartId: string;
	productId: string;
};
export const ChangeProductQuantity = ({
	quantity,
	cartId,
	productId,
}: ChangeProductQuantityProps) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

	return (
		<form className="flex w-full items-center gap-4">
			<button
				data-testid="decrement"
				disabled={optimisticQuantity === 1}
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(cartId, productId, optimisticQuantity - 1);
				}}
				className="w-full rounded-md bg-white py-1 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:opacity-50"
			>
				-
			</button>
			<span data-testid="quantity">{optimisticQuantity}</span>
			<button
				data-testid="increment"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(cartId, productId, optimisticQuantity + 1);
				}}
				className="w-full rounded-md bg-white py-1 transition-colors hover:bg-gray-200"
			>
				+
			</button>
		</form>
	);
};
