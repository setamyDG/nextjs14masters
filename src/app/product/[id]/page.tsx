import { type Metadata } from "next";
import { getProductById } from "@/api/product";

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
			<h1>{product.title}</h1>
		</section>
	);
}
