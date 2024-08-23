import { createPreset } from 'fumadocs-ui/tailwind-plugin'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/components/**/*.{ts,tsx}',
		'./src/pages/admin/**/*.{ts,tsx}',
		'./src/content/**/*.{md,mdx}',
		'./mdx-components.{ts,tsx}',
		'./node_modules/fumadocs-ui/dist/**/*.js'
	],
	presets: [
		createPreset({
			addGlobalColors: true
		})
	]
}
export const plugins = []
