<script lang="ts">
    import type { PageData } from './$types';
	
	export let data: PageData;
</script>

<svelte:head>
    <title>{data.title} | Joar</title>
    <meta name="description" content={`Read about me project ${data.title}`}>
    <meta property="og:image" content={data.coverImage} />
</svelte:head>

<main>
    <article>
        <h1>{data.title}</h1>
        <div class="cover-image-wrapper">
            <img src={data.coverImage} alt={`Cover image for ${data.title}`} class="cover-image">
        </div>
        <div class="markdown">
            {@html data.content}
        </div>
    </article>
    <div class="foot">
        <button on:click={() => history.back()} class="back" role="link">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            >
                <path d="m15 18-6-6 6-6"/>
            </svg>
            Back
        </button>
        <noscript>
            <a href="/projects" class="back">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                >
                    <path d="m15 18-6-6 6-6"/>
                </svg>
                Your javascript is disabled use this link instead to got to projects
            </a>
        </noscript>
    </div>
</main>

<style>
    main {
        margin-bottom: 8rem;
        max-width: 960px;
        margin-inline: auto;
        padding-inline: 2rem;
    }

    article > h1 {
        font-size: 2.5rem;
    }

    .cover-image-wrapper {
        display: flex;
        margin-top: 1rem;
    }

    .cover-image {
        border-radius: 6px;
        margin-inline: auto;
    }

    .markdown {
        margin-top: 1.5rem;
        font-size: 1.125rem;
    }

    .foot {
        margin-top: 3rem;
        border-top: 1px solid hsl(var(--muted));
        padding-top: 1.5rem;
        display: flex;
        gap: .5rem;
    }

    .back > svg {
        height: 1rem;
        width: 1rem;
        margin-right: .5rem;
        flex-shrink: 0;
    }

    .back {
        display: inline-flex;
        align-items: center;
        justify-items: center;
        color: hsl(var(--foreground));
        text-decoration: none;
        padding-block: .325rem;
        padding-inline: .5rem;
        border: 1px solid hsl(var(--foreground));
        transition: background-color 250ms;
        margin-left: auto;
        background-color: hsl(var(--background));
        font-size: 0.875rem;
    }

    .back:hover {
        background-color: hsl(var(--muted)/30%);
    }

    .back:focus-visible {
        --ring-offset: 2px;
        outline: none;
        box-shadow: 0px 0px 0px var(--ring-offset) hsl(var(--background)), 0px 0px 0px calc(1px + var(--ring-offset)) hsl(var(--muted-foreground));
        border-radius: 2px;
    }

    :global(.markdown p),
    :global(.markdown ul),
    :global(.markdown ol),
    :global(.markdown blockquote) {
        margin-block: 1.5rem;
    }

    :global(.markdown h2) {
        margin-top: 3rem;
        margin-bottom: 1rem;
        font-size: 1.675rem;
    }

    :global(.markdown h3) {
        margin-top: 3rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    :global(.markdown a) {
        color: hsl(239, 64%, 64%);
    }
</style>