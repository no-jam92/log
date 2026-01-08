// @ts-check
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://no-jam92.github.io",
	base: "/log",
	integrations: [
		svelte({
			extensions: [".svelte"],
		}),
		sitemap(),
	],
});
