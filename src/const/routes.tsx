import { type Route } from "next";
import { Boxes, Facebook, Github, Glasses, Home, Linkedin, Shirt, Zap } from "lucide-react";
import { type AppRoute } from "@/types/route";

export const routes: AppRoute[] = [
	{
		href: "/",
		label: "Home",
		icon: <Home size={24} color="gray" />,
	},
	{
		href: "/products" as Route,
		label: "All",
		icon: <Boxes size={24} color="gray" />,
	},
	{
		href: "/tshirts",
		label: "T-shirts",
		icon: <Shirt size={24} color="gray" />,
	},
	{
		href: "/hoodies",
		label: "Hoodies",
		icon: <Zap size={24} color="gray" />,
	},
	{
		href: "/accessories",
		label: "Accessories",
		icon: <Glasses size={24} color="gray" />,
	},
];

export const externalLinks: AppRoute[] = [
	{
		href: "https://github.com/setamyDG",
		icon: <Github size={24} color="black" />,
		alt: "GitHub",
	},
	{
		href: "https://twitter.com/setamyDG",
		icon: <Linkedin size={24} color="black" />,
		alt: "LinkedIn",
	},
	{
		href: "https://www.linkedin.com/in/setamyDG/",
		icon: <Facebook size={24} color="black" />,
		alt: "Facebook",
	},
];
