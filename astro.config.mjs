import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'binks.py docs',
			social: {
				github: 'https://github.com/jmhayes3/binks.py',
			},
			sidebar: [
				{
					label: 'Commands',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Version', slug: 'commands/version' },
						{ label: 'Chat', slug: 'commands/chat' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Guides', slug: 'guides/commands' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
