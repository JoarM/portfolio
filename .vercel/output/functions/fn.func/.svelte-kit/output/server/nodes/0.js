

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.xiTkjrKN.js","_app/immutable/chunks/scheduler.Bqdg6ctA.js","_app/immutable/chunks/index.XmQP8okr.js","_app/immutable/chunks/entry.BzZO3RPv.js"];
export const stylesheets = ["_app/immutable/assets/0.BkTl263W.css"];
export const fonts = [];