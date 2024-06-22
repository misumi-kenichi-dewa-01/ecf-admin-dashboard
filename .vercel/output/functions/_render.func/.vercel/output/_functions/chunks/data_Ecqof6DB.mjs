/* empty css                                   */
import { l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_DbSP0ska.mjs';
import 'kleur/colors';
import { $ as $$Code } from './Code_CSAUlbtO.mjs';
import { $ as $$LayoutSidebar } from './LayoutSidebar_DrWzgBOu.mjs';
import { g as getProducts, a as getUsers } from './users_DxU4OUv3.mjs';
/* empty css                        */

const $$Data = createComponent(($$result, $$props, $$slots) => {
  const products = JSON.stringify(getProducts(), null, 2);
  const users = JSON.stringify(getUsers(), null, 2);
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, { "class": "bg-slate-800 text-slate-100" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="playground p-16"> <h1 class="text-3xl ml-8 lg:text-4xl xl:text-6xl font-bold dark:text-slate-100">
🕹&nbsp;Playground — API data
</h1> <div class="mt-24 mb-8"> <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onclick="location.reload()">Refresh</button> </div> <div class="mb-16"> <a href="/api/products" target="_blank"> <h1 class="text-6xl font-bold mb-8 dark:text-slate-100">Products</h1> </a> ${renderComponent($$result2, "Code", $$Code, { "code": products, "lang": "json" })} </div> <div class="mb-16"> <a href="/api/users" target="_blank"> <h1 class="text-6xl font-bold mb-8 dark:text-slate-100">Users</h1> </a> ${renderComponent($$result2, "Code", $$Code, { "code": users, "lang": "json" })} </div> </div> ` })} `;
}, "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/pages/playground/data.astro", void 0);

const $$file = "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/pages/playground/data.astro";
const $$url = "/playground/data";

export { $$Data as default, $$file as file, $$url as url };
