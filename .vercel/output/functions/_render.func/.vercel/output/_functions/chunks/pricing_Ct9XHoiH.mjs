/* empty css                                   */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DbSP0ska.mjs';
import 'kleur/colors';
import { $ as $$LayoutStacked } from './LayoutStacked_Dlis5a4E.mjs';
import { $ as $$PricingPlan } from './PricingPlan_CAbIP9A_.mjs';

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PricingPlan", $$PricingPlan, {})} ` })}`;
}, "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/pages/pages/pricing.astro", void 0);

const $$file = "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/pages/pages/pricing.astro";
const $$url = "/pages/pricing";

export { $$Pricing as default, $$file as file, $$url as url };
