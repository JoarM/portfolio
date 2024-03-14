import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.pHX8zZpp.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DWVtZ4lb.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/2.DBnTBX9v.css"];
export const fonts = [];
