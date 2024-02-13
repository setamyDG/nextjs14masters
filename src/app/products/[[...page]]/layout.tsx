import { Pagination } from "@/ui/molecules/Pagination";

type ProductsLayoutProps = {
	children: React.ReactNode;
	params: {
		page: string[];
	};
};
export default function ProductsLayout({ children, params }: ProductsLayoutProps) {
	const pageNumber = params.page ? Number(params.page[0]) : 1;
	return (
		<>
			<section>{children}</section>
			<Pagination pageNumber={pageNumber} />
		</>
	);
}
