import { type Metadata } from "next";
import { getProductById } from "@/api/product";
import { ProductItem } from "@/ui/molecules/ProductItem";

type Params = {
	params: {
		id: string;
	};
};

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
	const product = await getProductById(params.id);
	return {
		title: product.title,
		description: product.description,
		openGraph: {
			title: product.title,
			description: product.description,
			images: [
				{
					url: product.image,
					alt: product.title,
				},
			],
		},
	};
};

export default async function ProductPage({ params }: Params) {
	const product = await getProductById(params.id);
	return (
		<section className="md:mx-24">
			<ProductItem product={product} />
		</section>
	);
}
