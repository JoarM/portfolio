import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const css = {
  code: `@import url('https://fonts.googleapis.com/css2?family=Truculenta:opsz,wght@12..72,100..900&display=swap');*{margin:0;padding:0;box-sizing:border-box}:root{--background:210 5.6% 9%;--foreground:210 0% 93%;--border:210 7.4% 34%;--muted:210 7.4% 22%;--muted-foreground:210 7.4% 56%;--side-padding:2rem;--header-height:5rem}html{background-color:hsl(var(--background));color:hsl(var(--foreground));font-family:"Truculenta", sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;font-variation-settings:"wdth" 100}img{max-width:100%}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}header.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf{position:sticky;top:0;width:100%;padding-block:1.25rem;background-color:hsl(var(--background));border-bottom:1px solid hsl(var(--border)/0);transition:border-bottom 250ms;z-index:50;scrollbar-gutter:stable;height:var(--header-height)}header.svelte-18pctqf>div.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf{max-width:1240px;width:100%;margin-inline:auto;display:flex;align-items:center;justify-content:space-between;padding-inline:var(--side-padding);height:40px}nav.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf{position:absolute;top:100%;height:0;overflow:hidden;background-color:hsl(var(--background));width:calc(100vw + 2rem);left:-2rem;padding-inline:4rem 2rem;transition:height 250ms cubic-bezier(0.3, 0.2, 0.2, 1.4)}.open.svelte-18pctqf>nav.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf{height:calc(100vh - var(--header-height) + 5px);height:calc(100dvh - var(--header-height) + 5px)}a.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf{color:inherit;text-underline-offset:4px}div.svelte-18pctqf>a.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf{font-size:1.5rem;font-weight:bold;text-decoration:none}nav.svelte-18pctqf>a.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf{font-weight:bold;display:block;font-size:1.75rem;text-decoration:none;padding-block:.75rem;border-bottom:1px solid hsl(var(--border));transition:color 200ms ease}nav.svelte-18pctqf>a.svelte-18pctqf>span.svelte-18pctqf.svelte-18pctqf{transform:translateY(-100px);opacity:0%;transition:transform 0ms cubic-bezier(0.3, 0.2, 0.2, 1.4) 250ms,\r
        opacity 0ms ease 250ms}.open.svelte-18pctqf>nav.svelte-18pctqf>a.svelte-18pctqf>span.svelte-18pctqf{display:block;opacity:100%;transform:translateY(0px);transition:transform 250ms cubic-bezier(0.3, 0.2, 0.2, 1.4) var(--delay, 0ms),\r
        opacity 250ms ease var(--delay, 0ms)}.open.svelte-18pctqf nav.svelte-18pctqf>a.svelte-18pctqf.svelte-18pctqf:nth-child(2){--delay:100ms}.open.svelte-18pctqf nav.svelte-18pctqf>a.svelte-18pctqf.svelte-18pctqf:nth-child(3){--delay:200ms}.open.svelte-18pctqf nav.svelte-18pctqf>a.svelte-18pctqf.svelte-18pctqf:nth-child(4){--delay:300ms}nav.svelte-18pctqf>a.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf:hover{color:hsl(var(--muted-foreground))}.not-top.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf{border-bottom:1px solid hsl(var(--border))}.menu-toggle.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf{border:none;outline:0;height:40px;width:40px;position:relative;border-radius:6px;background-color:hsl(var(--background))}.menu-toggle.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf::after,.menu-toggle.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf::before{content:"";position:absolute;left:10%;right:10%;height:2px;background-color:hsl(var(--foreground));transition:background-color 250ms ease,\r
        transform 250ms ease,\r
        rotate 250ms cubic-bezier(0.3, 0.2, 0.2, 1.4),\r
        top 250ms ease,\r
        bottom 250ms ease;transform-origin:50%}.menu-toggle.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf::before{top:33%}.menu-toggle.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf::after{bottom:33%}.menu-toggle.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf:hover::before,.menu-toggle.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf:hover::after{background-color:hsl(var(--muted-foreground))}.open.svelte-18pctqf .menu-toggle.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf::before{top:50%;rotate:33.75deg;transform:translateY(-1px)}.open.svelte-18pctqf .menu-toggle.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf::after{bottom:50%;rotate:-33.75deg;transform:translateY(1px)}@media(min-width: 520px){header.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf{background-color:hsl(var(--background)/50%);backdrop-filter:blur(3px)}nav.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf{position:static;display:flex;align-items:center;gap:.75rem;margin-left:3rem;width:auto;padding-inline:0;height:auto;background-color:initial}nav.svelte-18pctqf>a.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf{display:inline-block;font-weight:500;text-decoration:underline;font-size:1rem;border:initial;padding:initial}nav.svelte-18pctqf>a.svelte-18pctqf>span.svelte-18pctqf.svelte-18pctqf{transform:initial;opacity:initial}.menu-toggle.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf{display:none}.open.svelte-18pctqf>nav.svelte-18pctqf.svelte-18pctqf.svelte-18pctqf{height:auto}nav.svelte-18pctqf>a.svelte-18pctqf>span.svelte-18pctqf.svelte-18pctqf{transform:initial;opacity:initial;transition:initial}}`,
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${["svelte-18pctqf", ""].join(" ").trim()}"><div class="${["svelte-18pctqf", ""].join(" ").trim()}"><a href="/" class="svelte-18pctqf" data-svelte-h="svelte-toza21">Joar Maltesson</a> <nav class="svelte-18pctqf" data-svelte-h="svelte-1xxbpuv"><a href="/" class="svelte-18pctqf"><span class="svelte-18pctqf">Home</span></a> <a href="/projects" class="svelte-18pctqf"><span class="svelte-18pctqf">Projects</span></a> <a href="/about" class="svelte-18pctqf"><span class="svelte-18pctqf">About me</span></a> <a href="/contact" class="svelte-18pctqf"><span class="svelte-18pctqf">Contact me</span></a></nav> <button class="menu-toggle svelte-18pctqf" data-svelte-h="svelte-17ez3bc"><span class="sr-only">Menu toggle</span></button></div></header> ${slots.default ? slots.default({}) : ``} `;
});
export {
  Layout as default
};
