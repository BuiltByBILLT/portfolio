import type { Config } from "tailwindcss"

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		screens: {
			sm: "425px",
			// => @media (min-width: 576px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1440px",
			// => @media (min-width: 1280px) { ... }
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			padding: {
				calc: "calc(8px + 1.5625vw)",
			},
			fontFamily: {
				inter: ["var(--font-inter)"],
				anton: ["var(--font-anton)"],
			},
		},
	},
	plugins: [],
}
export default config
