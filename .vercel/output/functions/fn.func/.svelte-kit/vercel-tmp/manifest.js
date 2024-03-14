export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["about-me-2.jpg","about-me.jpg","assets/cityklippet-cover.png","assets/nauta-cover.png","assets/rizzbotai-cover.png","contact-image.jpg","favicon.png","hero-image.webp"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.De0vGTPM.js","app":"_app/immutable/entry/app.Jl20mH1n.js","imports":["_app/immutable/entry/start.De0vGTPM.js","_app/immutable/chunks/entry.ofLfzz_q.js","_app/immutable/chunks/scheduler.Bqdg6ctA.js","_app/immutable/entry/app.Jl20mH1n.js","_app/immutable/chunks/scheduler.Bqdg6ctA.js","_app/immutable/chunks/index.XmQP8okr.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
		],
		routes: [
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
