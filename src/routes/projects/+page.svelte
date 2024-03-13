<script lang="ts">
    import type { PageData } from './$types';
	
	export let data: PageData;
</script>

<div class="my-work-wrapper">
    <h1>My work</h1>
    <p>
        Here you can find a collection of some of my work, 
        u can follow my journey learning software develpoment from my first web develpoment project to my most recent projects.
    </p>
    <div class="project-wrapper">
        {#each data.projects as project}
            <a href={`/projects/${project.slug}`}>
                <article>
                    <img src={project.coverImage} alt={`${project.title} cover image`}>
                    <div>
                        <h3>{project.title}</h3>
                        <span>{project.tags.reduce((prev, tag, idx) => prev + tag + `${idx != project.tags.length - 1 ? " / " : ""}`, "")}</span>
                    </div>
                </article>
            </a>
        {/each}
    </div>
</div>

<style>
    @keyframes grow-in {
        from { scale: 0.9; opacity: 0; }
        to { scale: 1; opacity: 1; }
    }

    .my-work-wrapper {
        max-width: 960px;
        margin-inline: auto;
        padding-inline: 2rem;
        padding-bottom: 8rem;
    }

    .my-work-wrapper > h1 {
        text-align: center;
        font-size: 2.5rem;
    }

    .my-work-wrapper > p {
        max-width: 512px;
        margin-inline: auto;
        font-size: 1.125rem;
        font-weight: 500;
        color: hsl(var(--muted-foreground));
        text-align: center;
    }

    .project-wrapper {
        margin-top: 2.5rem;
    }

    .project-wrapper > * + * {
        margin-top: 2.5rem;
    }

    .project-wrapper > a {
        display: block;
        text-decoration: none;
        color: inherit;
        max-width: 896px;
        margin-inline: auto;
        border-radius: 8px;
    }

    div > a > article > div {
        display: flex;
        gap: .5rem;
        align-items: baseline;
        flex-wrap: wrap-reverse;
    }

    .project-wrapper > a > article > div > h3 {
        font-size: 1.25rem;
    }

    .project-wrapper > a > article > div > span {
        color: hsl(var(--muted-foreground));
        font-weight: 500;
        font-size: .875rem;
    }

    .project-wrapper > a > article img {
        border-radius: 6px;
        animation: grow-in linear forwards;
        animation-timeline: view();
        animation-range-start: cover;
        animation-range-end: cover 500px;
    }

    .project-wrapper > a:hover h3 {
        text-decoration: underline;
        text-underline-offset: 4px;
    }

    .project-wrapper > a:focus-visible {
        --ring-offset: 4px;
        outline: none;
        box-shadow: 0px 0px 0px var(--ring-offset) hsl(var(--background)), 0px 0px 0px calc(2px + var(--ring-offset)) hsl(var(--foreground));
    }
</style>