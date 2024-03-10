"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/utils/useDebounce";

export const Search = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const urlQueryParamValue = searchParams.get("query")?.toString();
	const [searchValue, setSearchValue] = useState<string>(urlQueryParamValue ?? "");
	const debouncedSearch = useDebounce(searchValue);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
		if (event.target.value.length === 0) {
			router.push("/products");
		}
	};

	useEffect(() => {
		if (debouncedSearch) {
			router.push(`/search?query=${debouncedSearch}`);
		}
	}, [debouncedSearch, router]);

	return (
		<div className="flex items-center justify-center gap-2 rounded-md border bg-white">
			<input
				className="w-42 rounded-md p-1 text-sm outline-none"
				type="search"
				placeholder="Search..."
				value={searchValue}
				onChange={handleInputChange}
			/>
		</div>
	);
};
