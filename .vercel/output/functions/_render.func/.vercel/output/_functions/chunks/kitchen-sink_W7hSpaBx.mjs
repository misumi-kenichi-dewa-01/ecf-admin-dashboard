/* empty css                                   */
import { l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead, o as addAttribute } from './astro/server_DbSP0ska.mjs';
import 'kleur/colors';
import { $ as $$LayoutSidebar } from './LayoutSidebar_DrWzgBOu.mjs';
import { $ as $$CrudProducts } from './CrudProducts_DP7LFR6B.mjs';
import { $ as $$FormSignIn } from './FormSignIn_CbDBOC9A.mjs';
import { $ as $$FormSignUp } from './FormSignUp_Dmddj8RO.mjs';
import { $ as $$FormForgotPassword } from './FormForgotPassword_CKkZi-Uw.mjs';
import { $ as $$FormResetPassword } from './FormResetPassword_BXbhSlyD.mjs';
import { $ as $$FormProfileLock } from './FormProfileLock_B-HvFsJv.mjs';
import { $ as $$ErrorMaintenance } from './ErrorMaintenance_CBI6zVo5.mjs';
import { $ as $$ErrorNotFound } from './ErrorNotFound_CcU908Sq.mjs';
import { $ as $$ErrorServer } from './ErrorServer_BUFdLQSP.mjs';
import { $ as $$PricingPlan } from './PricingPlan_CAbIP9A_.mjs';

const actions = [
  { text: "Soft re-fetch (API)", action: "refetchCrudData" },
  { text: "Hard reload (SSR)", action: "hardReloadPage" }
];

const $$KitchenSink = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, { "class": "bg-slate-800 text-slate-100 mb-20 py-16 px-8" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl ml-8 lg:text-4xl xl:text-7xl font-bold">
🕹&nbsp;Playground
</h1> ${renderComponent($$result2, "dummy-spacer", "dummy-spacer", { "class": "block mb-36" })} <nav${addAttribute([
    "flex align-middle justify-center z-50",
    "top-2 p-4 bg-gray-800/30 w-full sticky border-slate-800",
    "border-x-red-200 backdrop-blur-md text-white bg-gradient-to-r",
    "from-slate-700/30 via-slate-700 to-slate-700/30",
    "hover:from-slate-500/30 hover:to-slate-500/30",
    "focus:ring-4 focus:outline-none focus:ring-blue-300",
    "dark:focus:ring-blue-800 shadow-lg shadow-slate-800/50",
    "dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg",
    "text-sm px-5 py-2.5 text-center mr-2 mb-2"
  ], "class:list")}> ${actions.map((button) => renderTemplate`<button type="button"${addAttribute(button.action, "data-action")}${addAttribute([
    "mx-8",
    button.action === "hardReloadPage" && "bg-gray-800",
    "text-white bg-blue-700 hover:bg-blue-800",
    "focus:outline-none focus:ring-4 focus:ring-blue-300",
    "font-medium rounded-full text-sm px-5 py-2.5",
    "text-center mr-2 my-2 dark:bg-blue-600",
    "dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  ], "class:list")}> ${button.text} </button>`)} </nav> <section> <h2 class="text-5xl font-bold m-8 mt-24">CRUD — Products</h2> ${renderComponent($$result2, "CrudProducts", $$CrudProducts, { "class": "p-4 lg:p-16" })} </section>  <section> <h2 class="text-5xl font-bold m-8 mt-24">Forms — User</h2> <div class="flex justify-between flex-wrap"> ${renderComponent($$result2, "FormSignIn", $$FormSignIn, { "class": "p-4 lg:p-16" })} ${renderComponent($$result2, "FormResetPassword", $$FormResetPassword, { "class": "p-4 lg:p-16" })} ${renderComponent($$result2, "FormProfileLock", $$FormProfileLock, { "class": "p-4 lg:p-16" })} </div> <div class="mt-12 flex justify-between flex-wrap"> ${renderComponent($$result2, "FormSignUp", $$FormSignUp, { "class": "p-4 lg:p-16" })} ${renderComponent($$result2, "FormForgotPassword", $$FormForgotPassword, { "class": "p-4 lg:p-16" })} </div> </section> <section> <h2 class="text-5xl font-bold m-8 mt-24">Pricing plan</h2> <div class="bg-slate-50 mb-8 lg:p-16"> ${renderComponent($$result2, "PricingPlan", $$PricingPlan, { "class": "p-4 lg:p-16" })} </div> </section> <section> <h2 class="text-5xl font-bold m-8 mt-24">Pages — Errors</h2> <div class="flex flex-wrap justify-around gap-8"> <div class="bg-slate-50 mb-8 lg:p-16"> ${renderComponent($$result2, "ErrorMaintenance", $$ErrorMaintenance, { "class": "p-4" })} </div> <div class="bg-slate-50 mb-8 lg:p-16"> ${renderComponent($$result2, "ErrorNotFound", $$ErrorNotFound, { "class": "p-4" })} </div> <div class="bg-slate-50 mb-8 lg:p-16"> ${renderComponent($$result2, "ErrorServer", $$ErrorServer, { "class": "p-4" })} </div> </div> </section> ` })} `;
}, "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/pages/playground/kitchen-sink.astro", void 0);

const $$file = "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/pages/playground/kitchen-sink.astro";
const $$url = "/playground/kitchen-sink";

export { $$KitchenSink as default, $$file as file, $$url as url };
