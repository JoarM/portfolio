

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3._wZgTZuM.js","_app/immutable/chunks/scheduler.Bqdg6ctA.js","_app/immutable/chunks/index.XmQP8okr.js"];
export const stylesheets = ["_app/immutable/assets/3.AS4sxSA1.css"];
export const fonts = [];
