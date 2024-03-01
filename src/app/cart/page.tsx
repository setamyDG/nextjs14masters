import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getCartById } from "@/api/cart";
import { createCheckoutSession, initStripe } from "@/utils/stripe";
import { CartProductList } from "@/ui/organisms/CartProductList";

export default async function CartPage() {
	const cart = await getCartById();

	if (!cart || !cart.items.length) {
		return <p>add some products</p>;
	}

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
		<section className="flex h-full flex-col items-center justify-between gap-8">
			<h1 className="mb-4 w-fit rounded-xl bg-black p-1.5 text-2xl font-bold text-white">
				Order #{cart.id}
			</h1>
			<div className="flex gap-8">
				<article className="flex w-full flex-col">
					<CartProductList cart={cart} isDescription />
				</article>
				<aside className="flex h-auto w-full flex-col rounded-md bg-gray-100 p-8 shadow-md lg:w-2/5">
					<div className="flex items-center justify-between">
						<p>Total:</p>
						<p>XXX</p>
					</div>
					<form action={handlePaymentAction}>
						<button
							type="submit"
							className="mt-4 w-full rounded-md bg-gradient-to-r from-gray-700 to-black py-2 text-center font-semibold text-white opacity-90 transition-all hover:bg-gray-800 hover:opacity-100"
						>
							Pay
						</button>
					</form>
				</aside>
			</div>
		</section>
	);
}
