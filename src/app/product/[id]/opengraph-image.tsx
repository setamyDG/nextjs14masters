import Image from "next/image";
import { ImageResponse } from "next/og";
import { formatMoney } from "@/utils/intl";
import { getProductById } from "@/api/product";

export const runtime = "edge";
export const contentType = "image/png";

export const size = {
	width: 1200,
	height: 630,
};

export default async function og({ params }: { params: { id: string } }) {
	const data = await getProductById(params.id);

	if (!data.product) return new ImageResponse(<div>Product not found.</div>);

	return new ImageResponse(
		(
			<div tw="relative w-full overflow-hidden rounded-lg flex">
				<div tw="flex items-center justify-center">
					<Image
						tw="h-full w-full object-cover object-center"
						width={200}
						height={200}
						src={data.product.images[0]?.url || "/placeholder.png"}
						alt={data.product.name}
					/>
				</div>
				<div tw="flex flex-col text-zinc-50 px-4 gap-4">
					<h1 tw="text-zinc-50 text-2xl">{data.product?.name}</h1>
					<span>{data.product.categories[0]?.name}</span>
					<p>{data.product.description}</p>
					<span>{formatMoney(data.product.price / 100)}</span>
				</div>
			</div>
		),
	);
}
