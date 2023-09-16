// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import { existsSync } from 'fs';

export default defineConfig(({ command, mode }) => {
	
	let envPath = existsSync('.env') ? '.env' : 'example.env';
	const env = Object.assign({
		// env for react to work
		RMWC_VERSION: undefined

	}, loadEnv(mode, process.cwd(), envPath));
	let finalEnv = {};
	for (const key in env) {
		const value = env[key];
		finalEnv['process.env.' + key] = value;
	}

	return {
		esbuild: {
			jsx: 'automatic',
		},
		define: finalEnv,
	};
})