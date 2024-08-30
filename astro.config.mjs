import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'binks.py docs',
			social: {
				github: 'https://github.com/jmhayes3/binks.py',
				discord: 'https://github.com/jmhayes3/binks.py',
			},
			sidebar: [
				{ label: 'Intro', link: '/intro' },
				{
					label: 'Commands',
					items: [
						{ label: 'version', link: '/commands/version' },
						{ label: 'chat', link: '/commands/chat' },
					],
				},
				// A group linking to all pages in the reference directory.
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
