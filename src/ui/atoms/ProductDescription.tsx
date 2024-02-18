import { type Product } from "@/types/product";
import { formatMoney } from "@/utils/intl";

type ProductDescriptionProps = {
	product: Product;
};

export const ProductDescription = ({
	product: { title, category, price },
}: ProductDescriptionProps): JSX.Element => (
	<div className="mt-2 flex flex-col">
		<div>
			<h1 className="font-semibold text-gray-700">{title}</h1>
			<p className="text-sm text-gray-500">
				<span className="sr-only">Kategoria:</span>
				{category}
			</p>
		</div>
		<p className="text-sm font-medium text-gray-700">
			<span className="sr-only">Cena:</span> {formatMoney(price / 100)}$
		</p>
	</div>
);
