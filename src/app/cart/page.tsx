import { getCartById } from "@/api/cart";
import { CartProductList } from "@/ui/organisms/CartProductList";
import { Payment } from "@/ui/molecules/Payment";
import { formatMoney } from "@/utils/intl";

export default async function CartPage() {
	const cart = await getCartById();

	if (!cart || !cart.items.length) {
		return <p>add some products</p>;
	}

	const total = cart.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
	return (
		<section className="flex h-full flex-col items-center justify-between gap-8">
			<h1 className="mb-4 w-fit rounded-xl bg-black p-1.5 text-2xl font-bold text-white">
				Order #{cart.id}
			</h1>
			<div className="flex flex-col gap-8 lg:flex-row ">
				<article className="flex w-full flex-col">
					<CartProductList cart={cart} isDescription />
				</article>
				<aside className="flex h-[150px] w-full flex-col rounded-md bg-gray-100 p-8 shadow-md lg:w-2/5">
					<div className="flex items-center justify-between font-semibold">
						<p>Total:</p>
						<span>{formatMoney(total / 100)}</span>
					</div>
					<Payment />
				</aside>
			</div>
		</section>
	);
}
