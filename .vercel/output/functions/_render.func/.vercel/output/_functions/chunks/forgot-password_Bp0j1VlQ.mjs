/* empty css                                   */
import { l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_DbSP0ska.mjs';
import 'kleur/colors';
import { $ as $$LayoutStacked } from './LayoutStacked_Dlis5a4E.mjs';
import { $ as $$FormForgotPassword } from './FormForgotPassword_CKkZi-Uw.mjs';

const $$ForgotPassword = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen align-middle flex pb-[12vh]"> ${renderComponent($$result2, "FormForgotPassword", $$FormForgotPassword, {})} </div> ` })}`;
}, "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/pages/authentication/forgot-password.astro", void 0);

const $$file = "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/pages/authentication/forgot-password.astro";
const $$url = "/authentication/forgot-password";

export { $$ForgotPassword as default, $$file as file, $$url as url };
