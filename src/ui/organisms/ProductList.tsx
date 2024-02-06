import { type Product } from "@/types/product";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

type ProductListProps = {
  products: Product[];
};

export const ProductList = ({ products }: ProductListProps): JSX.Element => (
  <ul
    className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-8"
    data-testid="products-list"
  >
    {products.map((product) => (
      <ProductListItem key={product.id} product={product} />
    ))}
  </ul>
);