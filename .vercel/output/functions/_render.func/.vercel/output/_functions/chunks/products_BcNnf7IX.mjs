/* empty css                                   */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DbSP0ska.mjs';
import 'kleur/colors';
import { $ as $$LayoutSidebar } from './LayoutSidebar_DrWzgBOu.mjs';
import { $ as $$CrudProducts } from './CrudProducts_DP7LFR6B.mjs';

const $$Products = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CrudProducts", $$CrudProducts, {})} ` })}`;
}, "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/pages/crud/products.astro", void 0);

const $$file = "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/pages/crud/products.astro";
const $$url = "/crud/products";

export { $$Products as default, $$file as file, $$url as url };
