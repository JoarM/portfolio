import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: ":root{--image-width:100%}.cover-image.svelte-1asg1wb.svelte-1asg1wb.svelte-1asg1wb{padding-inline:2rem;margin-top:2rem;width:var(--image-width)}.cover-image.svelte-1asg1wb>img.svelte-1asg1wb.svelte-1asg1wb{border-radius:48px;aspect-ratio:1.5/2;object-fit:cover;filter:brightness(85%);width:100%;object-position:center top}main.svelte-1asg1wb.svelte-1asg1wb.svelte-1asg1wb{margin-inline:auto;display:grid;align-items:center;padding-bottom:5rem}main.svelte-1asg1wb>div.svelte-1asg1wb.svelte-1asg1wb{padding-inline:2rem;max-width:960px}main.svelte-1asg1wb>div.svelte-1asg1wb>h1.svelte-1asg1wb{font-size:3.5rem;padding-bottom:.5rem;border-bottom:2px solid hsl(var(--foreground))}main.svelte-1asg1wb>div.svelte-1asg1wb>p.svelte-1asg1wb{font-size:1.25rem;font-weight:500;margin-top:2rem;max-width:700px}@media(min-width: 768px){:root{--image-width:50%}.cover-image.svelte-1asg1wb.svelte-1asg1wb.svelte-1asg1wb{position:absolute;top:0;right:0;padding-inline:0;margin-top:0}.cover-image.svelte-1asg1wb>img.svelte-1asg1wb.svelte-1asg1wb{border-radius:0 0 0 48px}main.svelte-1asg1wb.svelte-1asg1wb.svelte-1asg1wb{margin-right:var(--image-width);margin-left:max(calc((100vw - 1240px) / 2), 0px);min-height:calc(100vh - var(--header-height));min-height:calc(100svh - var(--header-height))}}@media(min-width: 1200px){:root{--image-width:25%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="cover-image svelte-1asg1wb" data-svelte-h="svelte-r05loa"><img src="/about-me-2.jpg" alt="Me in by the sunset" class="svelte-1asg1wb"></div> <main class="svelte-1asg1wb" data-svelte-h="svelte-1dfmbs9"><div class="svelte-1asg1wb"><h1 class="svelte-1asg1wb">About me</h1> <p class="svelte-1asg1wb">Hey my name is Joar Maltesson I use Steep as my nick on many social media platforms. 
            I&#39;m a student at LBS kreativa gymnasiet Borås, Sweden. There I study software development, my passion 
            is creating amazing user experinces on the web and on native platforms.</p></div> </main>`;
});
export {
  Page as default
};
