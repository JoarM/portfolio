import * as server from '../entries/pages/projects/_slug_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.PXHNi1eE.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DWVtZ4lb.js"];
export const stylesheets = ["_app/immutable/assets/6.3Ljxp8Kh.css"];
export const fonts = [];
