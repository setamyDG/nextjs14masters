import { type Product } from "@/types/product";

type ProductCoverImageProps = {
	product: Product;
};

export const ProductCoverImage = ({ product }: ProductCoverImageProps): JSX.Element => (
	<div className="aspect-square cursor-pointer overflow-hidden  border bg-gray-100">
		<img
			width={300}
			height={300}
			alt={product.title}
			src={product.image}
			className="h-full w-full object-cover object-center p-4 mix-blend-multiply transition-transform"
		/>
	</div>
);
