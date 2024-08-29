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
				// A single link item labelled “Home”.
				{ label: 'Home', link: '/' },
				// A group labelled “Start Here” containing four links.
				{ label: 'Intro', link: '/intro' },
				{
					label: 'Commands',
					items: [
						// Using `slug` for internal links.
						{ label: 'version', link: '/commands/version' },
						{ label: 'chat', link: '/commands/chat' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Using `slug` for internal links.
						{ label: 'commands', link: '/guides/commands' },
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
