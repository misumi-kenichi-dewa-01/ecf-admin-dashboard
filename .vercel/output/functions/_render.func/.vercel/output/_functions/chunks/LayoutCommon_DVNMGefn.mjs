import { l as createComponent, m as renderTemplate, n as maybeRenderHead, k as createAstro, q as renderSlot, o as addAttribute, t as renderHead } from './astro/server_DbSP0ska.mjs';
import 'kleur/colors';
import 'clsx';
import { A as API_URL, R as REMOTE_ASSETS_BASE_URL, S as SITE_TITLE } from './constants_DW0FCONL.mjs';
/* empty css                            */

const $$CopyrightNotice = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p class="my-10 text-sm text-center text-gray-500">
&copy; 2019 - ${(/* @__PURE__ */ new Date()).getFullYear()} —
<a href="https://flowbite.com/" class="hover:underline" target="_blank">Flowbite.com</a>. All rights reserved.
</p>`;
}, "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/components/CopyrightNotice.astro", void 0);

const name = "flowbite-astro-admin-dashboard";
const version = "1.0.2";
const description = "A free and open-source admin dashboard template built with Tailwind CSS, Flowbite and Astro";
const keywords = [
	"tailwind",
	"tailwind css",
	"flowbite",
	"admin dashboard",
	"dashboard ui",
	"admin dashboard template",
	"html",
	"css",
	"astro",
	"astro-theme",
	"astro-template",
	"javascript"
];
const homepage = "https://flowbite.com";
const bugs = "https://github.com/themesberg/flowbite-astro-admin-dashboard/issues";
const repository = "https://github.com/themesberg/flowbite-astro-admin-dashboard.git";
const license = "MIT";
const author = "Bergside Inc.";
const contributors = [
	"Zoltán Szőgyényi <https://twitter.com/zoltanszogyenyi>",
	"Robert Tanislav <https://twitter.com/roberttanislav>",
	"Julian Cataldo <https://twitter.com/Julian_Cataldo>"
];
const type = "module";
const scripts = {
	astro: "astro",
	build: "astro build",
	dev: "astro dev",
	preview: "astro preview",
	start: "astro dev"
};
const dependencies = {
	"@astrojs/sitemap": "^1.1.0",
	"@astrojs/tailwind": "^5.1.0",
	"@astrojs/vercel": "^7.7.1",
	"@faker-js/faker": "^7.6.0",
	apexcharts: "^3.37.2",
	astro: "^4.11.0",
	flowbite: "^2.1.1",
	"flowbite-typography": "^1.0.3",
	shiki: "^0.14.1",
	"tailwind-scrollbar": "^3.0.0",
	tailwindcss: "^3.0.24"
};
const devDependencies = {
	"@types/eslint": "^8.21.1",
	"@typescript-eslint/eslint-plugin": "^5.54.1",
	"@typescript-eslint/parser": "^5.54.1",
	"astro-eslint-parser": "^0.11.0",
	eslint: "^8.35.0",
	"eslint-config-airbnb-base": "^15.0.0",
	"eslint-config-airbnb-typescript": "^17.0.0",
	"eslint-config-prettier": "^8.7.0",
	"eslint-import-resolver-typescript": "^3.5.3",
	"eslint-plugin-astro": "^0.23.0",
	"eslint-plugin-import": "^2.27.5",
	"eslint-plugin-prettier": "^4.2.1",
	"eslint-plugin-tsdoc": "^0.2.17"
};
const pkg = {
	name: name,
	version: version,
	"private": "true",
	description: description,
	keywords: keywords,
	homepage: homepage,
	bugs: bugs,
	repository: repository,
	license: license,
	author: author,
	contributors: contributors,
	type: type,
	scripts: scripts,
	dependencies: dependencies,
	devDependencies: devDependencies
};

async function fetchData(endpoint) {
  const apiEndpoint = `${API_URL}${endpoint}`;
  console.info(`Fetching ${apiEndpoint}…`);
  return fetch(apiEndpoint).then(
    (r) => r.json()
  ).catch((e) => {
    console.error(e);
    throw Error("Invalid API data!");
  });
}
function url(path = "") {
  return `${"http://localhost:2121"}${"/"}${path}`;
}
function asset(path) {
  return `${REMOTE_ASSETS_BASE_URL}/${path}`;
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:2121");
const $$LayoutCommon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutCommon;
  const { class: clazz } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', " \u2014 v", '</title><meta name="generator"', '><meta name="description"', '><meta name=""', '><link rel="icon" type="image/svg+xml"', '><link rel="sitemap" type="application/xml"', `><meta name="author" content="Julian Cataldo, Zolt\xE1n Sz\u0151gy\xE9nyi, Robert Tanislav"><meta name="copyright" content="MIT"><script>
			if (
				localStorage.getItem('color-theme') === 'dark' ||
				(!('color-theme' in localStorage) &&
					window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		<\/script>`, "</head> <body", "> ", "  </body></html>"])), SITE_TITLE, pkg.version, addAttribute(Astro2.generator, "content"), addAttribute(pkg.description, "content"), addAttribute(pkg.description, "content"), addAttribute(url("favicon.svg"), "href"), addAttribute(url("sitemap-index.xml"), "href"), renderHead(), addAttribute([
    //
    clazz,
    "bg-gray-50 dark:bg-gray-800",
    "scrollbar scrollbar-w-3 scrollbar-thumb-rounded-[0.25rem]",
    "scrollbar-track-slate-200  scrollbar-thumb-gray-400",
    "dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-700"
  ], "class:list"), renderSlot($$result, $$slots["default"]));
}, "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/app/LayoutCommon.astro", void 0);

export { $$CopyrightNotice as $, asset as a, $$LayoutCommon as b, fetchData as f, url as u };
