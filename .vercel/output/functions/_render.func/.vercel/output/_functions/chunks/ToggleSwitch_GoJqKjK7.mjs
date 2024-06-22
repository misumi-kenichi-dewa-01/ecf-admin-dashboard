import { k as createAstro, l as createComponent, m as renderTemplate, n as maybeRenderHead, o as addAttribute, s as spreadAttributes } from './astro/server_DbSP0ska.mjs';
import 'clsx';

const $$Astro = createAstro("http://localhost:2121");
const $$ToggleSwitch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ToggleSwitch;
  const { id, checked = false, class: clazz, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(id, "for")}${addAttribute(["relative flex items-center cursor-pointer", clazz], "class:list")}${spreadAttributes(attrs)}> <input type="checkbox"${addAttribute(id, "id")} class="sr-only"${addAttribute(checked, "checked")}> <span${addAttribute([
    "bg-gray-200 dark:bg-gray-700 ",
    "border-gray-200 dark:border-gray-600",
    "h-6 rounded-full w-11 toggle-bg border"
  ], "class:list")}></span> </label>`;
}, "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/src/components/ToggleSwitch.astro", void 0);

export { $$ToggleSwitch as $ };
