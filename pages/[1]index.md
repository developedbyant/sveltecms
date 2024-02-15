---
layout: Introduction
title: Introduction
description: Welcome to kitDocs learn how to install,update,handle layout,add alias and more.
---
# Introduction
Everything to learn about svelteCMS.

## What is svelteCMS ?
SvelteCMS presents a comprehensive solution for your SvelteKit projects, offering an integrated CMS experience. With the convenience of running your CMS and project within the same directory, you can seamlessly navigate between the two without the need to exit the directory.

## How to add to your project
To add svelteCMS to your project it's super simple, just run `npx kitcms@latest` and it will install or update svelteCMS.
```bash
# Add svelte
npx kitcms@latest
```
Once added to your project, you will need to follow the following steps: add alias and Handle layout.

### Add svelteCMS alias
In your `svelte.config.js` add the svelteCMS alias.
```ts
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias:{
			svelteCMS:"src/svelteCMS/*"//[H]
		}
	}
};
export default config;
```

## How to update ?
The same way you install svelteCMS, it can be updated by running the same command `npx kitcms@latest`.