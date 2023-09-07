/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				alpha: {
					50: "rgba(0,0,0, .05",
					100: "rgba(0,0,0,.12)",
					200: "rgba(0,0,0,.2)",
					300: "rgba(0,0,0,.3)",
					400: "rgba(0,0,0,.4)",
					500: "rgba(0,0,0,.5)",
					600: "rgba(0,0,0,.6)",
					700: "rgba(0,0,0,.7)",
					800: "rgba(0,0,0,.8)",
					900: "rgba(0,0,0,.9)",
					950: "rgba(0,0,0,.95)",
				},
				beta: {
					50: "hsla(0,0%, 100%, .05",
					100: "hsla(0,0%,100%,.12)",
					200: "hsla(0,0%,100%,.2)",
					300: "hsla(0,0%,100%,.3)",
					400: "hsla(0,0%,100%,.4)",
					500: "hsla(0,0%,100%,.5)",
					600: "hsla(0,0%,100%,.6)",
					700: "hsla(0,0%,100%,.7)",
					800: "hsla(0,0%,100%,.8)",
					900: "hsla(0,0%,100%,.9)",
					950: "hsla(0,0%,100%,.95)",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require.resolve("prettier-plugin-astro")],
	darkMode: "class",
};
