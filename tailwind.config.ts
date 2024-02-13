import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				"fade-in-left-to-right": "fadeInLeftToRight 1s ease-in-out",
				"fade-in-right-to-left": "fadeInRightToLeft 1s ease-in-out",
			},
			keyframes: {
				fadeInLeftToRight: {
					"0%": {
						opacity: "0",
						transform: "translateX(-20px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				fadeInRightToLeft: {
					"0%": {
						opacity: "0",
						transform: "translateX(20px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
			},

			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
