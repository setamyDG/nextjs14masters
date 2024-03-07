import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import { type Route } from "next";
import { getOrdersByUserEmail } from "@/api/orders";
import { formatMoney } from "@/utils/intl";

type PastProduct = {
	productId: string;
	productName: string;
	productQuantity: number;
	productPrice: number;
};

export default async function OrdersPage() {
	const user = await currentUser();
	const email = user?.emailAddresses[0]?.emailAddress || "";
	const { orders } = await getOrdersByUserEmail(email);

	if (!user || !orders) {
		return redirect("/");
	}

	const orderedProducts = orders.data.map((order) => order.lines);

	return (
		<section>
			<h1 className="mb-4 w-fit rounded-xl bg-black p-1.5 text-2xl font-bold text-white">Orders</h1>
			<div className="flex flex-col gap-8 lg:flex-row ">
				<article className="flex w-full flex-col">
					<table>
						<thead className="border">
							<tr>
								<th className="border-r">Product ID</th>
								<th className="border-r">Product Name</th>
								<th className="border-r">Quantity</th>
								<th className="border-r">Price</th>
							</tr>
						</thead>
						<tbody className="border text-center">
							{(orderedProducts[0] as PastProduct[]).map((product: PastProduct, index) => (
								<tr key={index}>
									<td className="border-r">{product.productId}</td>
									<td className="border-r">
										<Link className="text-blue-700" href={`/product/${product.productId}` as Route}>
											{product.productName}
										</Link>
									</td>
									<td className="border-r">{product.productQuantity}</td>
									<td className="border-r">{formatMoney(product.productPrice / 100)}</td>
								</tr>
							))}
						</tbody>
					</table>
				</article>
			</div>
		</section>
	);
}
