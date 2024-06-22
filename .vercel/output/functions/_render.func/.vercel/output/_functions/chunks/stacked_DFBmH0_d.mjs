/* empty css                                   */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DbSP0ska.mjs';
import 'kleur/colors';
import { $ as $$LayoutStacked } from './LayoutStacked_Dlis5a4E.mjs';
import { $ as $$DashBoard } from './DashBoard_BhDZmbud.mjs';

const $$Stacked = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DashBoard", $$DashBoard, {})} ` })}`;
}, "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/pages/layouts/stacked.astro", void 0);

const $$file = "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/pages/layouts/stacked.astro";
const $$url = "/layouts/stacked";

export { $$Stacked as default, $$file as file, $$url as url };
