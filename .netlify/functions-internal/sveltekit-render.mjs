import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.12d79a6c.js","app":"_app/immutable/entry/app.4e210f83.js","imports":["_app/immutable/entry/start.12d79a6c.js","_app/immutable/chunks/index.97091390.js","_app/immutable/chunks/singletons.4b84b915.js","_app/immutable/entry/app.4e210f83.js","_app/immutable/chunks/index.97091390.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
