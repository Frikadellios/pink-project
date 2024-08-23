
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import MillionLint from "@million/lint";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
		build: {
			cssMinify: 'lightningcss'
		}
	},
	site: 'https://pink-project.vercel.app',
	prefetch: {
		defaultStrategy: 'viewport',
		prefetchAll: true
	},
  integrations: [MillionLint.astro(), react()]
});
