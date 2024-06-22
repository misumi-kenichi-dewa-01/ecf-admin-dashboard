/* empty css                                   */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DbSP0ska.mjs';
import 'kleur/colors';
import { $ as $$LayoutSidebar } from './LayoutSidebar_DrWzgBOu.mjs';
import { $ as $$DashBoard } from './DashBoard_BhDZmbud.mjs';

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DashBoard", $$DashBoard, {})} ` })}`;
}, "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/pages/dashboard.astro", void 0);

const $$file = "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/pages/dashboard.astro";
const $$url = "/dashboard";

export { $$Dashboard as default, $$file as file, $$url as url };
