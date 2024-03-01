import { BadgeDollarSign } from "lucide-react";
import NextImage from "next/image";
import { revalidateTag } from "next/cache";
import { formatMoney } from "@/utils/intl";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { addProductToCart, getOrCreateCart } from "@/api/cart";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";

type ProductItemProps = {
	product: ProductsListItemFragment;
};
export const ProductItem = ({ product }: ProductItemProps) => {
	async function addProductToCartAction(_formData: FormData) {
		"use server";
		const cart = await getOrCreateCart();
		const quantity = 1;
		const isProductInCart = cart.items.filter((item) => item.product.id === product.id);
		await addProductToCart(cart.id, product.id, isProductInCart ? quantity + 1 : quantity);
		revalidateTag("cart");
	}

	return (
		<article className="flex w-full flex-col gap-12 md:flex-row md:gap-24">
			<div className="flex flex-shrink-0 justify-center rounded-xl bg-gray-100 px-24 py-12">
				<NextImage
					className="object-cover mix-blend-multiply"
					src={product.images[0]?.url || ""}
					alt={product.name}
					width={500}
					height={300}
				/>
			</div>
			<div className="flex flex-1 flex-col justify-between pb-8 sm:pb-0">
				<div className="flex flex-col">
					<p>{product.categories[0]?.name}</p>
					<div className="flex items-center gap-4 md:gap-24">
						<h1 className="mt-2 text-4xl font-bold">{product.name}</h1>
						<p className="rounded-lg bg-gray-600 px-2 text-xl text-white">
							{formatMoney(product.price / 100)}
						</p>
					</div>
					{product?.rating && (
						<p className="mt-4 text-sm text-gray-500">
							rating: {product?.rating} / {product.rating} reviews
						</p>
					)}
					<p className="text-md mt-4 italic text-gray-500">{product.description}</p>
					<p className="text-md mt-4">{product.description}</p>
				</div>
				<form className="mt-8 flex justify-end gap-4" action={addProductToCartAction}>
					<input type="hidden" name="productId" value={product.id} />
					<AddToCartButton />
					<button className="flex items-center gap-4 rounded-lg border p-4 shadow-md transition-all hover:scale-105">
						Buy it now
						<BadgeDollarSign size={24} color="black" />
					</button>
				</form>
			</div>
		</article>
	);
};
