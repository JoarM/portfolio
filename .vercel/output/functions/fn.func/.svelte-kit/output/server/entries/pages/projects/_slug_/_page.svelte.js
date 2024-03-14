import { c as create_ssr_component, e as escape, f as add_attribute } from "../../../../chunks/ssr.js";
const css = {
  code: "main.svelte-1xo3z6t.svelte-1xo3z6t{margin-bottom:8rem;max-width:960px;margin-inline:auto;padding-inline:2rem}article.svelte-1xo3z6t>h1.svelte-1xo3z6t{font-size:2.5rem}.cover-image.svelte-1xo3z6t.svelte-1xo3z6t{margin-top:1rem;border-radius:6px}.markdown.svelte-1xo3z6t.svelte-1xo3z6t{margin-top:1.5rem;font-size:1.125rem}.foot.svelte-1xo3z6t.svelte-1xo3z6t{margin-top:3rem;border-top:1px solid hsl(var(--muted));padding-top:1.5rem;display:flex}.back.svelte-1xo3z6t>svg.svelte-1xo3z6t{height:1rem;width:1rem;margin-right:.5rem}.back.svelte-1xo3z6t.svelte-1xo3z6t{display:inline-flex;align-items:center;justify-items:center;color:hsl(var(--foreground));text-decoration:none;padding-block:.325rem;padding-inline:.5rem;border:1px solid hsl(var(--foreground));transition:background-color 250ms;margin-left:auto}.back.svelte-1xo3z6t.svelte-1xo3z6t:hover{background-color:hsl(var(--muted)/30%)}.back.svelte-1xo3z6t.svelte-1xo3z6t:focus-visible{--ring-offset:2px;outline:none;box-shadow:0px 0px 0px var(--ring-offset) hsl(var(--background)), 0px 0px 0px calc(1px + var(--ring-offset)) hsl(var(--muted-foreground));border-radius:2px}.svelte-1xo3z6t.svelte-1xo3z6t:keep(.markdown p),.svelte-1xo3z6t.svelte-1xo3z6t:keep(.markdown ul),.svelte-1xo3z6t.svelte-1xo3z6t:keep(.markdown ol),.svelte-1xo3z6t.svelte-1xo3z6t:keep(.markdown blockquote){margin-block:1.5rem}.svelte-1xo3z6t.svelte-1xo3z6t:keep(.markdown h2){margin-top:3rem;margin-bottom:1rem;font-size:1.675rem}.svelte-1xo3z6t.svelte-1xo3z6t:keep(.markdown h3){margin-top:3rem;margin-bottom:1rem;font-size:1.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="svelte-1xo3z6t"><article class="svelte-1xo3z6t"><h1 class="svelte-1xo3z6t">${escape(data.project.title)}</h1> <div class="svelte-1xo3z6t"><img${add_attribute("src", data.project.coverImage, 0)}${add_attribute("alt", `Cover image for ${data.project.title}`, 0)} class="cover-image svelte-1xo3z6t"></div> <div class="markdown svelte-1xo3z6t"><!-- HTML_TAG_START -->${data.project.content}<!-- HTML_TAG_END --></div></article> <div class="foot svelte-1xo3z6t" data-svelte-h="svelte-vtt9h7"><a href="/projects" class="back svelte-1xo3z6t"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1xo3z6t"><path d="m15 18-6-6 6-6" class="svelte-1xo3z6t"></path></svg>
            Back to projects</a></div> </main>`;
});
export {
  Page as default
};
