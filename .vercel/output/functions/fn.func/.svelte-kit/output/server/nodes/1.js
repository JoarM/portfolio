

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D455lCo3.js","_app/immutable/chunks/scheduler.Bqdg6ctA.js","_app/immutable/chunks/index.XmQP8okr.js","_app/immutable/chunks/entry.ofLfzz_q.js"];
export const stylesheets = [];
export const fonts = [];
