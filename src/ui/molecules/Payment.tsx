import { handlePaymentAction } from "@/actions/cart";

export const Payment = () => (
	<form action={handlePaymentAction}>
		<button
			type="submit"
			className="mt-4 w-full rounded-md bg-gradient-to-r from-gray-700 to-black py-2 text-center font-semibold text-white opacity-90 transition-all hover:bg-gray-800 hover:opacity-100"
		>
			Pay
		</button>
	</form>
);
