import MDX from "@next/mdx";

const withMDX = MDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: 'standalone' = dobra dla docker,
	// dlaczego nie ma styli ? recznie trzeba skopiowac zawartosc/folder public do ./next/standalone/.next/static
	// output: 'export' = generuje wszystko statycznie, nie mozna uzywac akcji serverowych - dobre dla blogów, stron typu portfolio itp
	output: "standalone",
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	images: {
		remotePatterns: [
			{
				hostname: "static-ourstore.hyperfunctor.com",
			},
			{
				hostname: "images.unsplash.com",
			},
		],
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/categories/:name",
				destination: "/categories/:name/1",
				permanent: true,
			},
		];
	},
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
};

export default withMDX(nextConfig);
