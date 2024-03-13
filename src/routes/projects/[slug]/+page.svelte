<script lang="ts">
    import type { PageData } from './$types';
	
	export let data: PageData;
</script>

<main>
    <article>
        <h1>{data.project.title}</h1>
        <div>
            <img src={data.project.coverImage} alt={`Cover image for ${data.project.title}`} class="cover-image">
        </div>
        <div class="markdown">
            {@html data.project.content}
        </div>
    </article>
    <div class="foot">
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
            Back to projects
        </a>
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

    .cover-image {
        margin-top: 1rem;
        border-radius: 6px;
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
    }

    .back > svg {
        height: 1rem;
        width: 1rem;
        margin-right: .5rem;
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

    :keep(.markdown p),
    :keep(.markdown ul),
    :keep(.markdown ol),
    :keep(.markdown blockquote) {
        margin-block: 1.5rem;
    }

    :keep(.markdown h2) {
        margin-top: 3rem;
        margin-bottom: 1rem;
        font-size: 1.675rem;
    }

    :keep(.markdown h3) {
        margin-top: 3rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
</style>