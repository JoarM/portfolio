

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CCqMEKE0.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DWVtZ4lb.js"];
export const stylesheets = ["_app/immutable/assets/3.AS4sxSA1.css"];
export const fonts = [];
