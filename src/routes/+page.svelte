<script lang="ts">
    import type { PageData } from './$types';
	
	export let data: PageData;
</script>

<svelte:head>
    <title>Portfolio | Joar</title>
    <meta name="description" content="Im a 18 year old junior software developer from Borås, Sweden. My primary focus is developing software that simply works "award winning or not" and learning in the process, my primary focus is fullstack web development but i also develop desktop and mobile applications.">
    <meta property="og:image" content="/hero-image.webp" />
</svelte:head>

<section class="hero">
    <div class="hero-info">
        <h1>Joar Maltesson</h1>
        <p>I develop award winning software "sometimes" that simply works.</p>
    </div>
    <div class="hero-img">
        <img src="/hero-image.webp" alt="of me" fetchpriority="high">
    </div>
</section>

<section class="about-me">
    <div class="about-me-image">
        <img 
        src="/about-me.webp" 
        alt="Me walking on a sidewalk" 
        loading="lazy"
        >
    </div>
    <div class="about-me-wrapper">
        <h2>About me</h2>
        <p>
            <span>
                Im a 18 year old junior software developer from Borås, Sweden. My primary focus is developing software that simply works "award winning or not" and learning in the process, my primary focus is fullstack web development but i also develop desktop and mobile applications.
            </span>
        </p>
        <a href="/about" class="link">About me</a>
    </div>
</section>

<section class="projects">
    <h2>My work</h2>
    <div class="project-wrapper">
        {#each data.projects as project}
            <a href={`/projects/${project.slug}`}>
                <article>
                    <div class="project-image-wrapper">
                        <img 
                        src={project.coverImage} 
                        alt={`${project.title} cover image`} 
                        loading="lazy"
                        >
                    </div>
                    <div class="project-info">
                        <h3>{project.title}</h3>
                        <span>{project.tags.reduce((prev, tag, idx) => prev + tag + `${idx != project.tags.length - 1 ? " / " : ""}`, "")}</span>
                    </div>
                </article>
            </a>
        {/each}
    </div>
    <div class="more-projects">
        <a href="/projects">
            See all projects
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            >
                <path d="m9 18 6-6-6-6"/>
            </svg>
        </a>
    </div>
</section>

<section class="contact">
    <div class="contact-wrapper">
        <h2>Contact Me</h2>
        <p>Sparked your intrest? Contact me about anything from, job offers, collaborations or commissioning.</p>
        <div>
            <a href="/contact" class="link">
                Contact me
            </a>
        </div>
    </div>
</section>

<style>
    @keyframes grow-in {
        from { scale: 0.9; opacity: 0; }
        to { scale: 1; opacity: 1; }
    }

    @keyframes scroll-text-reveal {
        to { background-size: 100% 100%; }
    }

    .hero {
        display: grid;
        max-width: 1240px;
        padding-inline: var(--side-padding);
        margin-inline: auto;
        min-height: calc(100vh - var(--header-height));
        min-height: calc(100svh - var(--header-height));
        grid-template-rows: 300px 1fr;
    }

    .hero-info {
        align-self: center;
    }

    .hero-info > h1 {
        font-size: 3.75rem;
        font-size: bold;
    }

    .hero-info > p {
        font-size: 1.625rem;
        font-size: 500;
        color: hsl(var(--muted-foreground));
    }

    .hero-img {
        align-self: end;
        display: flex;
        flex-direction: column;
        justify-content: end;
        position: relative;
        filter: grayscale(100);
        transition: filter 250ms;
        overflow: hidden;
    }

    .hero-img::after {
        content: '';
        background-image: linear-gradient(to top, hsl(var(--background)), transparent);
        position: absolute;
        height: 150px;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .about-me {
        display: grid;
        max-width: 1240px;
        padding-block: 3rem;
        padding-inline: var(--side-padding);
        margin-inline: auto;
        min-height: calc(100vh - var(--header-height));
        min-height: calc(100svh - var(--header-height));
        grid-template-rows: 1fr 300px;
        place-items: center;
    }

    .about-me-wrapper {
        max-width: 500px;
    }

    .about-me-wrapper * + * {
        margin-top: .5rem;
    }

    .about-me-wrapper > p > span {
        font-size: 1.125rem;
        font-weight: 500;
        display: inline;
        color: hsl(var(--foreground) / 0.2);
        background-clip: text;
        background-repeat: no-repeat;
        background-size: 0% 100%;
        background-image: linear-gradient(90deg, hsl(var(--foreground)), hsl(var(--foreground)));
        animation: scroll-text-reveal linear forwards;
        animation-timeline: view();
        animation-range-start: cover 200px;
        animation-range-end: cover 500px;
    }

    .about-me-image {
        filter: brightness(80%);
        max-width: 500px;
        animation: grow-in linear;
        animation-timeline: view();
        animation-range-start: cover;
        animation-range-end: contain 250px;
    }

    .about-me-image > img {
        border-radius: 6px;
    }

    .projects {
        max-width: 1240px;
        margin-inline: auto;
        padding-inline: var(--side-padding);
        padding-bottom: 3rem;
    }

    .projects > h2 {
        font-size: 2rem;
        font-weight: bold;
    }

    .projects > .project-wrapper {
        margin-top: 1.5rem;
    }

    .projects > .project-wrapper > * + * {
        margin-top: 2.5rem;
    }

    .projects > .project-wrapper > a {
        display: block;
        text-decoration: none;
        color: inherit;
        max-width: 896px;
        margin-inline: auto;
        border-radius: 8px;
    }

    .project-info {
        display: flex;
        gap: .5rem;
        align-items: baseline;
        flex-wrap: wrap-reverse;
    }

    .project-image-wrapper {
        display: flex;
        place-items: center;
        width: 100%;
    }

    .projects > .project-wrapper > a > article > div > h3 {
        font-size: 1.25rem;
    }

    .projects > .project-wrapper > a > article > div > span {
        color: hsl(var(--muted-foreground));
        font-weight: 500;
        font-size: .875rem;
    }

    .projects > .project-wrapper > a > article img {
        border-radius: 6px;
        animation: grow-in linear forwards;
        animation-timeline: view();
        animation-range-start: cover;
        animation-range-end: cover 500px;
        object-fit: contain;
        margin-inline: auto;
        height: 100%;
    }

    .projects > .project-wrapper > a:hover h3 {
        text-decoration: underline;
        text-underline-offset: 4px;
    }

    .project-wrapper > a:focus-visible {
        --ring-offset: 4px;
        outline: none;
        box-shadow: 0px 0px 0px var(--ring-offset) hsl(var(--background)), 0px 0px 0px calc(2px + var(--ring-offset)) hsl(var(--foreground));
    }

    .more-projects {
        margin-top: .75rem;
        max-width: 896px;
        margin-inline: auto;
    }

    .more-projects > a {
        color: inherit;
        font-size: 1rem;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
    }

    .more-projects > a > svg {
        margin-left: .5rem;
        height: 1rem;
        width: 1rem;
        transition: transform 250ms;
    }

    .more-projects > a:hover > svg {
        transform: translateX(4px);
    }

    .contact {
        min-height: 100vh;
        min-height: 100svh;
        position: relative;
    }

    .contact::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url("/contact-image.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        filter: brightness(50%);
        opacity: 65%;
        z-index: -1;
        animation: grow-in linear;
        animation-timeline: view();
        animation-range-start: normal;
        animation-range-end: contain;
        background-position: right 20%;
    }

    .contact-wrapper {
        max-width: 1240px;
        margin-inline: auto;
        padding-block: 8rem;
        padding-inline: var(--side-padding);
    }

    .contact-wrapper > h2 {
        font-size: 2.75rem;
        font-weight: bold;
    }

    .contact-wrapper > p {
        font-size: 1.625rem;
        font-weight: 500;
        max-width: 525px;
    }

    .contact-wrapper > div {
        height: 50vh;
        height: 50svh;
        display: grid;
        place-items: center;
    }

    .link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: hsl(var(--foreground));
        background-color: hsl(var(--background));
        width: 220px;
        padding-block: .675rem;
        outline: none;
        border: 1px solid hsl(var(--foreground));
        position: relative;
        text-decoration: none;
        transition: background-color 250ms;
    }

    .link:hover {
        background-color: hsl(210 5.6% 13%);
    }

    .link:focus-visible {
        --ring-offset: 2px;
        outline: none;
        box-shadow: 0px 0px 0px var(--ring-offset) hsl(var(--background)), 0px 0px 0px calc(1px + var(--ring-offset)) hsl(var(--muted-foreground));
    }

    .link::after {
        content: "";
        position: absolute;
        inset: -1px;
        background-color: hsl(var(--background));
        border: 1px solid hsl(var(--foreground));
        transition: transform 250ms;
        z-index: -1;
    }

    .link:hover::after {
        transform: translate(10px, 10px);
    }

    @media (min-width: 1024px) {
        .hero {
            grid-template-columns: minmax(auto, 400px) 1fr;
            grid-template-rows: auto;
        }

        .about-me {
            grid-template-rows: auto;
            grid-template-columns: minmax(auto, 400px) 1fr;
        }
    }
</style>
