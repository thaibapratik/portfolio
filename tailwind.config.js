// const { nextui } = require("@nextui-org/react");
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#E0E0E0",
				seconday: "#A0A0A0",
				accent: "#00D1FF",
				darkerGrey: "#323232",
				vividBlue: "#00A6FF",
			},
			backgroundColor: {
				darkGrey1: "#121212",
			},
		},
		fontFamily: {
			sans: "Poppins",
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
