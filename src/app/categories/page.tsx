import { getListOfCategories } from "@/api/categories";
import { CategoryList } from "@/ui/organisms/CategoryList";

export default async function CategoriesPage() {
	const categoriesList = await getListOfCategories();
	if (!categoriesList || categoriesList.data.length === 0) return <p>No categories found.</p>;
	return (
		<section>
			<CategoryList categories={categoriesList.data} />
		</section>
	);
}
