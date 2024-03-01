import Image from "next/image";
import Link from "next/link";
import { type CartFragment } from "@/gql/graphql";
import { RemoveButton } from "@/ui/atoms/RemoveButton";
import { Rating } from "@/ui/atoms/Rating";
import { formatMoney } from "@/utils/intl";
import { ChangeProductQuantity } from "@/ui/atoms/ChangeProductQuantityButton";

type Props = {
	product: CartFragment["items"][number]["product"];
	isDescription?: boolean;
	cartId: string;
	quantity: number;
};

export const CartProduct = ({ cartId, quantity, product, isDescription }: Props) => {
	return (
		<div className="relative w-full rounded-xl bg-gray-100 p-4 shadow-md">
			<div className="flex gap-4">
				<div className="max-h-full max-w-full">
					<Image
						src="/summer-vibes.avif"
						alt={product.name}
						width={300}
						height={300}
						className="h-full w-full rounded-md object-cover"
					/>
				</div>
				<div className="flex h-auto w-full flex-col justify-between">
					<div className="flex justify-between">
						<div className="flex flex-col">
							<Link href={`/product/${product.id}`} className="font-semibold hover:text-gray-600">
								{product.name}
							</Link>
							<Rating rating={product.rating || 0} />
						</div>
						<div className="flex-start">
							<RemoveButton cartId={cartId} productId={product.id} />
						</div>
					</div>
					{isDescription && (
						<div className="mt-2 flex flex-col">
							<p>{product.description}</p>
						</div>
					)}
					<div className="mt-2 flex justify-end">
						<p className="text-lg font-bold">{formatMoney((product.price / 100) * quantity)}</p>
					</div>
					<div className="mt-auto">
						<ChangeProductQuantity quantity={quantity} cartId={cartId} productId={product.id} />
					</div>
				</div>
			</div>
		</div>
	);
};
