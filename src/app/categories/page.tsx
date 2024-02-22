import { Suspense } from "react";
import { getListOfCategories } from "@/api/categories";
import { Spinner } from "@/ui/atoms/Spinner";
import { CategoryList } from "@/ui/organisms/CategoryList";

export default async function CategoriesPage() {
	const categoriesList = await getListOfCategories();
	if (!categoriesList || categoriesList.data.length === 0) return <p>No categories found.</p>;

	return (
		<section>
			<Suspense key="categories" fallback={<Spinner />}>
				<CategoryList categories={categoriesList.data} />
			</Suspense>
		</section>
	);
}
