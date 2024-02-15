import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import viteMdToSvelte from "./src/kitDocs/lib/plugin"
const kitDocsOptions = {
    appName:"svelteCMS",domainUrl:"https://sveltecms.dev",
    defaultImage:"https://sveltecms.dev/images/backdrop.png", devMode:true
}
export default defineConfig({
    plugins: [
        viteMdToSvelte("src/routes/(docs)/docs",kitDocsOptions),
        sveltekit()
    ]
});