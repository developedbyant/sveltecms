<script lang="ts">

    /** Copy text to clipboard (Added by kitdocs) */
    async function copyText(e:MouseEvent){
        const copyButton = e.target as HTMLButtonElement
        const code = copyButton.parentElement?.querySelector("code")?.innerText as string
        await navigator.clipboard.writeText(code)
        copyButton.innerText = "Copied"
        // Set button text back to copy after 5 milliseconds
        setTimeout(()=>copyButton.innerText = "Copy",1000)
    }
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>Introduction | svelteCMS</title>
    <meta name="title" content="Introduction | svelteCMS" />
    <meta name="description" content="Welcome to kitDocs learn how to install,update,handle layout,add alias and more." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://sveltecms.dev/docs/" />
    <meta property="og:title" content="Introduction | svelteCMS" />
    <meta property="og:description" content="Welcome to kitDocs learn how to install,update,handle layout,add alias and more." />
    <meta property="og:image" content="https://sveltecms.dev/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://sveltecms.dev/docs/" />
    <meta property="twitter:title" content="Introduction | svelteCMS" />
    <meta property="twitter:description" content="Welcome to kitDocs learn how to install,update,handle layout,add alias and more." />
    <meta property="twitter:image" content="https://sveltecms.dev/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="introduction">
    Introduction
</h1>
<p data-md="p">Everything to learn about svelteCMS.</p>
<div data-md="space"></div>
<h2 data-section data-md="header" id="what-is-sveltecms">
    What is svelteCMS ?
</h2>
<p data-md="p">SvelteCMS presents a comprehensive solution for your SvelteKit projects, offering an integrated CMS experience. With the convenience of running your CMS and project within the same directory, you can seamlessly navigate between the two without the need to exit the directory.</p>
<div data-md="space"></div>
<h2 data-section data-md="header" id="how-to-add-to-your-project">
    How to add to your project
</h2>
<p data-md="p">To add svelteCMS to your project it's super simple, just run <code data-md="inline-code">npx kitcms@latest</code> and it will install or update svelteCMS.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-comment)"># Add svelte</span></span>
<span class="line"><span style="color:var(--shiki-token-function)">npx</span><span style="color:var(--shiki-token-string)"> kitcms@latest</span></span></code></pre></div>
<p data-md="p">Once added to your project, you will need to follow the following steps: add alias and Handle layout.</p>
<div data-md="space"></div>
<h3 data-section data-md="header" id="add-sveltecms-alias">
    Add svelteCMS alias
</h3>
<p data-md="p">In your <code data-md="inline-code">svelte.config.js</code> add the svelteCMS alias.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">import</span><span style="color:var(--shiki-foreground)"> adapter </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> '@sveltejs/adapter-node'</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">import</span><span style="color:var(--shiki-foreground)"> &#123; vitePreprocess } </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> '@sveltejs/kit/vite'</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-comment)">/** </span><span style="color:var(--shiki-token-keyword)">@type</span><span style="color:var(--shiki-token-function)"> &#123;import('@sveltejs/kit').Config}</span><span style="color:var(--shiki-token-comment)"> */</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">const</span><span style="color:var(--shiki-token-constant)"> config</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    preprocess</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-function)"> vitePreprocess</span><span style="color:var(--shiki-foreground)">()</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    kit</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        adapter</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-function)"> adapter</span><span style="color:var(--shiki-foreground)">()</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        alias</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-foreground)">&#123;</span></span>
<span class="line added"><span style="color:var(--shiki-foreground)">            svelteCMS</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-string-expression)">"src/svelteCMS/*"</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        }</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    }</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">};</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">export</span><span style="color:var(--shiki-token-keyword)"> default</span><span style="color:var(--shiki-foreground)"> config;</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="how-to-update">
    How to update ?
</h2>
<p data-md="p">The same way you install svelteCMS, it can be updated by running the same command <code data-md="inline-code">npx kitcms@latest</code>.</p>
