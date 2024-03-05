import { currentUser } from "@clerk/nextjs";
// import { getOrdersByUserEmail } from "@/api/orders";
export default async function OrdersPage() {
	const user = await currentUser();
	const email = user?.emailAddresses[0]?.emailAddress;

	// const data = await getOrdersByUserEmail(email ?? "");

	if (!email) {
		return {
			redirect: {
				destination: "/sign-in",
				permanent: false,
			},
		};
	}

	return (
		<div>
			<h1>Orders</h1>
		</div>
	);
}
