import { BadgeDollarSign, ShoppingBag } from "lucide-react";
import NextImage from "next/image";
import { formatMoney } from "@/utils/intl";
import { type ProductsListItemFragment } from "@/gql/graphql";

type ProductItemProps = {
	product: ProductsListItemFragment;
};
export const ProductItem = ({ product }: ProductItemProps) => {
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
						<p className="rounded-lg bg-gray-500 px-2 text-xl text-white">
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
				<div className="mt-8 flex justify-end gap-4">
					<button className="flex items-center gap-4 rounded-lg border p-4 shadow-md transition-all hover:scale-105">
						Add to cart
						<ShoppingBag size={24} color="black" />
					</button>
					<button className="flex items-center gap-4 rounded-lg border p-4 shadow-md transition-all hover:scale-105">
						Buy it now
						<BadgeDollarSign size={24} color="black" />
					</button>
				</div>
			</div>
		</article>
	);
};
