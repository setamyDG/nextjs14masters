import { type MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://nextjs14masters.vercel.app/",
			lastModified: new Date(),
		},
		{
			url: "https://nextjs14masters.vercel.app/products",
			lastModified: new Date(),
		},
		// ...
	];
}
