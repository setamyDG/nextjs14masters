import { type Product } from "../../types";
import { ProductList } from "@/ui/organisms/ProductList";

const products: Product[] = [
	{
		id: "1",
		name: "Product 1",
		category: "Category 1",
		price: 100,
		coverImage: {
			src: "/vercel.svg",
			alt: "Product 1",
		},
	},
	{
		id: "2",
		name: "Product 2",
		category: "Category 2",
		price: 200,
		coverImage: {
			src: "/next.svg",
			alt: "Product 2",
		},
	},
	{
		id: "3",
		name: "Product 3",
		category: "Category 3",
		price: 300,
		coverImage: {
			src: "/vercel.svg",
			alt: "Product 3",
		},
	},
	{
		id: "4",
		name: "Product 4",
		category: "Category 4",
		price: 400,
		coverImage: {
			src: "/next.svg",
			alt: "Product 4",
		},
	},
	{
		id: "5",
		name: "Product 5",
		category: "Category 1",
		price: 4200,
		coverImage: {
			src: "/next.svg",
			alt: "Product 5",
		},
	},
];
export default function Home() {
	return (
		<section className="mx-auto">
			<h1 className="mb-4 text-2xl font-bold">Products</h1>
			<ProductList products={products} />
		</section>
	);
}
