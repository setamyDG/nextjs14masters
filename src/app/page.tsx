import { getPaginatedListOfProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function HomePage() {
	const products = await getPaginatedListOfProducts(4, 0);

	if (!products || products.length === 0) return <p>No products found.</p>;

	return <ProductList products={products} />;
}
