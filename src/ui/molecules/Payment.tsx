import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createCheckoutSession, initStripe } from "@/utils/stripe";

export const Payment = () => {
	async function handlePaymentAction() {
		"use server";
		const stripe = initStripe();
		const checkoutSession = await createCheckoutSession(stripe);

		if (!checkoutSession.url) {
			throw new Error("Something went wrong with the payment session creation.");
		}

		cookies().set("cartId", "");
		redirect(checkoutSession.url);
	}

	return (
		<form action={handlePaymentAction}>
			<button
				type="submit"
				className="mt-4 w-full rounded-md bg-gradient-to-r from-gray-700 to-black py-2 text-center font-semibold text-white opacity-90 transition-all hover:bg-gray-800 hover:opacity-100"
			>
				Pay
			</button>
		</form>
	);
};
