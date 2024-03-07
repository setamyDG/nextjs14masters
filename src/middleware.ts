import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: [
		"/",
		"/search",
		"/cart",
		"/categories",
		"/categories/(.*)",
		"/collections/(.*)",
		"/product/(.*)",
		"/products/(.*)",
		"/terms-of-use",
		"/privacy",
	],
	ignoredRoutes: ["/api/(.*)"],
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
