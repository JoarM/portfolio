import * as server from '../entries/pages/projects/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.D2I3OK0D.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DWVtZ4lb.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/5.Do66tEDd.css"];
export const fonts = [];
