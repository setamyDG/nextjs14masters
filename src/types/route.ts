import { type Route } from "next";
import { type ReactNode } from "react";

type RouteLabel = "Home" | "All" | "T-shirts" | "Hoodies" | "Accessories";

export type AppRoute = {
	href: Route;
	label?: RouteLabel;
	icon?: ReactNode;
	alt?: string;
};
