import * as server from '../entries/pages/contact/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CwfcOFnh.js","_app/immutable/chunks/scheduler.Bqdg6ctA.js","_app/immutable/chunks/index.XmQP8okr.js","_app/immutable/chunks/entry.BzZO3RPv.js"];
export const stylesheets = ["_app/immutable/assets/4.Cdt-QSen.css"];
export const fonts = [];