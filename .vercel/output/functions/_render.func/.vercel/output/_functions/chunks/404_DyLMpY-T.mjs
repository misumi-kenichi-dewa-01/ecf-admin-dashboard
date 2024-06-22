/* empty css                                   */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DbSP0ska.mjs';
import 'kleur/colors';
import { $ as $$LayoutStacked } from './LayoutStacked_Dlis5a4E.mjs';
import { $ as $$ErrorNotFound } from './ErrorNotFound_CcU908Sq.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ErrorNotFound", $$ErrorNotFound, {})} ` })}`;
}, "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/pages/404.astro", void 0);

const $$file = "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
