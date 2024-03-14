import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: "@keyframes svelte-qnt5h5-grow-in{from{scale:0.9;opacity:0}to{scale:1;opacity:1}}.my-work-wrapper.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5{max-width:960px;margin-inline:auto;padding-inline:2rem;padding-bottom:8rem}.my-work-wrapper.svelte-qnt5h5>h1.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5{text-align:center;font-size:2.5rem}.my-work-wrapper.svelte-qnt5h5>p.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5{max-width:512px;margin-inline:auto;font-size:1.125rem;font-weight:500;color:hsl(var(--muted-foreground));text-align:center}.project-wrapper.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5{margin-top:2.5rem}.project-wrapper.svelte-qnt5h5>.svelte-qnt5h5+.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5{margin-top:2.5rem}.project-wrapper.svelte-qnt5h5>a.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5{display:block;text-decoration:none;color:inherit;max-width:896px;margin-inline:auto;border-radius:8px}div.svelte-qnt5h5>a.svelte-qnt5h5>article.svelte-qnt5h5>div.svelte-qnt5h5.svelte-qnt5h5{display:flex;gap:.5rem;align-items:baseline;flex-wrap:wrap-reverse}.project-wrapper.svelte-qnt5h5>a.svelte-qnt5h5>article.svelte-qnt5h5>div.svelte-qnt5h5>h3.svelte-qnt5h5{font-size:1.25rem}.project-wrapper.svelte-qnt5h5>a.svelte-qnt5h5>article.svelte-qnt5h5>div.svelte-qnt5h5>span.svelte-qnt5h5{color:hsl(var(--muted-foreground));font-weight:500;font-size:.875rem}.project-wrapper.svelte-qnt5h5>a>article img.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5{border-radius:6px;animation:svelte-qnt5h5-grow-in linear forwards;animation-timeline:view();animation-range-start:cover;animation-range-end:cover 500px}.project-wrapper.svelte-qnt5h5>a:hover h3.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5{text-decoration:underline;text-underline-offset:4px}.project-wrapper.svelte-qnt5h5>a.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5.svelte-qnt5h5:focus-visible{--ring-offset:4px;outline:none;box-shadow:0px 0px 0px var(--ring-offset) hsl(var(--background)), 0px 0px 0px calc(2px + var(--ring-offset)) hsl(var(--foreground))}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="my-work-wrapper svelte-qnt5h5"><h1 class="svelte-qnt5h5" data-svelte-h="svelte-a569vr">My work</h1> <p class="svelte-qnt5h5" data-svelte-h="svelte-95psyh">Here you can find a collection of some of my work, 
        u can follow my journey learning software develpoment from my first web develpoment project to my most recent projects.</p> <div class="project-wrapper svelte-qnt5h5">${each(data.projects, (project) => {
    return `<a${add_attribute("href", `/projects/${project.slug}`, 0)} class="svelte-qnt5h5"><article class="svelte-qnt5h5"><img${add_attribute("src", project.coverImage, 0)}${add_attribute("alt", `${project.title} cover image`, 0)} class="svelte-qnt5h5"> <div class="svelte-qnt5h5"><h3 class="svelte-qnt5h5">${escape(project.title)}</h3> <span class="svelte-qnt5h5">${escape(project.tags.reduce((prev, tag, idx) => prev + tag + `${idx != project.tags.length - 1 ? " / " : ""}`, ""))}</span> </div></article> </a>`;
  })}</div> </div>`;
});
export {
  Page as default
};
