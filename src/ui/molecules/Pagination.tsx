import { type Route } from "next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationProps = {
	pageNumber: number;
	totalPages: number;
};
export const Pagination = ({ pageNumber = 1, totalPages }: PaginationProps) => {
	return (
		<article
			aria-label="pagination"
			className="mt-12 flex w-full items-center justify-center gap-8"
		>
			<ActiveLink
				className=""
				activeClassName=""
				href={pageNumber === 1 ? ("/products" as Route) : `/products/${pageNumber - 1}`}
			>
				<ChevronLeft size={24} color="black" />
			</ActiveLink>
			<div className="flex gap-4 rounded-lg px-4 text-white">
				{Array.from({ length: totalPages }, (_, i) => (
					<ActiveLink
						activeClassName={i === pageNumber - 1 ? "bg-black text-white" : ""}
						key={i}
						href={i === 0 ? ("/products" as Route) : `/products/${i + 1}`}
					>
						{i + 1}
					</ActiveLink>
				))}
			</div>
			<ActiveLink
				className=""
				activeClassName=""
				href={pageNumber === totalPages ? `/products/${totalPages}` : `/products/${pageNumber + 1}`}
			>
				<ChevronRight size={24} color="black" />
			</ActiveLink>
		</article>
	);
};
