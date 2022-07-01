const { white, cyan, magenta, green, red, blue, yellow } = require('kolorist');
const { createDir, chDir, runCommand } = require('./utils');

const categories = [
	{
		title: cyan('Front End App'),
		description: 'A Basic Frontend Web App',
		value: 'frontend',
	},
	{
		title: blue('Back End Server'),
		description: '',
		value: 'backend',
	},
	{
		title: white('CLI Application'),
		description: 'A Basic CLI App',
		value: 'cli',
	},
	{
		title: magenta('Desktop Application'),
		description: 'A Basic Desktop App',
		value: 'desktop',
	},
];

const projects = [
	/* FRONT END */
	// Vanilla JS
	{
		title: yellow('Vanilla JS'),
		value: 'vanilla-js',
		category: 'frontend',
		description: 'Vanilla Java Script',
		variants: [
			{
				title: magenta('JS (Vite)'),
				value: 'js-vite',
				description: 'Vanilla JS using Vite',
				command: 'npx create-vite --template vanilla',
			},
		],
	},
	// Vue
	{
		title: green('Vue JS'),
		value: 'vue',
		category: 'frontend',
		description: 'Progressive Framework',
		variants: [
			{
				title: magenta('Vue (Vite)'),
				value: 'vue-vite',
				description: 'The Recommended Vue way',
				command: 'npx create-vite --template vue',
			},
			{
				title: cyan('Nuxt JS'),
				value: 'nuxt',
				description: 'Meta Framework for SSR and SSG',
				command: 'npx nuxi init',
			},

			{
				title: blue('Quasar'),
				value: 'quasar',
				description: 'For Building Cross Platform Apps',
				command: 'npm init quasar',
			},
			// TODO Vitepress, Gridsome
		],
	},
	// React
	{
		title: cyan('React'),
		value: 'react',
		category: 'frontend',
		description: 'The Facebook Framework',
		variants: [
			{
				title: magenta('Vue (Vite)'),
				value: 'react-vite',
				description: 'Use vite for React',
				command: 'npx create-vite --template react',
			},
			// TODO Next.js Remix, Gatsby, Blitz
		],
	},
	// Preact
	{
		title: blue('PReact'),
		value: 'preact',
		category: 'frontend',
		description: 'The Light version of react',
		variants: [
			{
				title: magenta('Preact (Vite)'),
				value: 'preact-vite',
				description: 'Use vite for PReact',
				command: 'npx create-vite --template preact',
			},
		],
	},
	// Svelte
	{
		title: red('Svelte'),
		value: 'svelte',
		category: 'frontend',
		description: 'The JS Compiler',
		variants: [
			{
				title: magenta('Svelte (Vite)'),
				value: 'svelte-vite',
				description: 'Use vite for Svelte',
				command: 'npx create-vite --template svelte',
			},
			{
				title: red('Sveltekit'),
				value: 'sveltekit',
				description: 'Sveltekit for FullStack App',
				command: 'npm init svelte',
			},
		],
	},
	// TODO Solid JS
	// TODO Astro
	/* BACK END */
	// Express JS
	{
		title: blue('Express.js'),
		category: 'backend',
		value: 'express',
		description: 'Minimalist Backend server',
		variants: [
			{
				title: cyan('Express Generator'),
				value: 'express-generator',
				command: 'npx express-generator',
			},
		],
	},

	// Nest JS
	{
		title: blue('Nest.js'),
		category: 'backend',
		value: 'nest',
		description: 'Opinionated Back End FrameWork',
		variants: [
			{
				title: cyan('Official CLI'),
				value: 'nest-cli',
				command: 'npx @nestjs/cli new',
			},
		],
	},
	/* CLI */
	// Create Node CLI
	{
		title: green('Node.js'),
		value: 'node-cli',
		category: 'cli',
		variants: [
			{
				title: white('Create Node CLI'),
				value: 'create-node-cli',
				description: 'scaffolding a node cli with essential libraries',
				command: 'npx create-node-cli'
			},
			{
				title: cyan('Ink'),
				value: 'ink-cli',
				description: 'build cli application with React',
				command: (projectName) => {
					createDir(projectName)
					chDir(projectName)
					runCommand(`npx create-ink-app ${projectName}`)
				}
			}
		]
	},
	/* DESKTOP */
	// Tauri
	{
		title: 'Tauri',
		value: 'tauri',
		category: 'desktop',
		description: 'Desktop Apps with Rust and Web Tech',
		variants: [
			{
				title: 'Official CLI Command',
				value: 'tauri-app',
				description: 'npm create tauri-app',
				command: 'npm create tauri-app',
			}
		]
	}
];

module.exports = {
	projects,
	categories,
};
