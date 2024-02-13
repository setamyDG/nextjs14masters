import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationProps = {
	pageNumber: number;
};
export const Pagination = ({ pageNumber = 1 }: PaginationProps) => {
	return (
		<article
			aria-label="pagination"
			className="mt-12 flex w-full items-center justify-center gap-8"
		>
			<ActiveLink
				activeClassName=""
				href={pageNumber === 1 ? (`/products` as Route) : `/products/${pageNumber - 1}`}
			>
				prev page
			</ActiveLink>
			<span className="rounded-lg bg-black px-4 text-white">{pageNumber}</span>
			<ActiveLink activeClassName="" href={`/products/${pageNumber + 1}`}>
				next page
			</ActiveLink>
		</article>
	);
};
