<script lang="ts">
    let atTop = false;
</script>

<header class:not-top={atTop}>
    <div>
        <a href="/">Joar Maltesson</a>
        <nav>
            <a href="/projects">Projects</a>
            <a href="about-me">About me</a>
            <a href="contact-me">Contact me</a>
        </nav>
    </div>
</header>

<slot/>
<svelte:window on:scroll={(e) => atTop = !!e.currentTarget.scrollY} />

<style>
    @import url('https://fonts.googleapis.com/css2?family=Truculenta:opsz,wght@12..72,100..900&display=swap');

    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :global(:root) {
        --background: 210 5.6% 9%;
        --foreground: 210 0% 93%;
        --border: 210 7.4% 34%;
        --muted-foreground: 210 7.4% 56%;

        --side-padding: 2rem;
    }

    :global(html) {
        background-color: hsl(var(--background));
        color: hsl(var(--foreground));
        font-family: "Truculenta", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings:
            "wdth" 100;
    }

    :global(img) {
        max-width: 100%;
    }

    header {
        position: sticky;
        top: 0;
        width: 100%;
        background-color: hsl(var(--background)/20%);
        padding-block: 1.25rem;
        backdrop-filter: blur(3px);
        border-bottom: 1px solid hsl(var(--border)/0);
        transition: border-bottom 250ms;
        z-index: 50;
    }

    header > div {
        max-width: 1240px;
        width: 100%;
        margin-inline: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: var(--side-padding);
    }

    nav {
        display: flex;
        align-items: center;
        gap: .75rem;
        margin-left: 3rem;
    }

    a {
        color: inherit;
        text-underline-offset: 4px;
    }

    div > a {
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: none;
    }

    nav > a {
        font-size: 500;
    }

    .not-top {
        border-bottom: 1px solid hsl(var(--border));
    }
</style>