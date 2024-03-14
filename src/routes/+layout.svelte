<script lang="ts">
    let atTop = false;
</script>

<header class:not-top={atTop}>
    <div>
        <a href="/">Joar Maltesson</a>
        <nav class="open">
            <a href="/projects">Projects</a>
            <a href="/about">About me</a>
            <a href="/contact">Contact me</a>
        </nav>
    </div>
</header>

<slot/>
<svelte:window on:scroll={(e) => atTop = !!e.currentTarget.scrollY} />

<style>
    @import url('https://fonts.googleapis.com/css2?family=Truculenta:opsz,wght@12..72,100..900&display=swap');

    @keyframes nav-in {
        from {
            opacity: 0;
            transform: translateY(-100%);
        }
        to {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :global(:root) {
        --background: 210 5.6% 9%;
        --foreground: 210 0% 93%;
        --border: 210 7.4% 34%;
        --muted: 210 7.4% 22%;
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
        padding-block: 1.25rem;
        background-color: hsl(var(--background));
        border-bottom: 1px solid hsl(var(--border)/0);
        transition: border-bottom 250ms;
        z-index: 50;
        scrollbar-gutter: stable;    
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
        position: absolute; 
        top: 100%;
        height: 0;
        overflow: hidden;
        background-color: hsl(var(--background));
        width: calc(100vw + 2rem);
        left: -2rem;
        padding-inline: 4rem 2rem;
    }

    .open {
        height: calc(100vh - 74px);
        height: calc(100dvh - 74px);
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
        font-weight: bold;
        display: block;
        font-size: 1.75rem;
        text-decoration: none;
        padding-block: .75rem;
        border-bottom: 1px solid hsl(var(--border));
        transition: color 200ms ease;
        animation: nav-in linear forwards;
    }

    nav > a:hover {
        color: hsl(var(--muted-foreground));
    }

    .not-top {
        border-bottom: 1px solid hsl(var(--border));
    }

    @media (min-width: 460px) {
        header {
            background-color: hsl(var(--background)/50%);
            backdrop-filter: blur(3px);
        }

        nav {
            position: static;
            display: flex;
            align-items: center;
            gap: .75rem;
            margin-left: 3rem;
            background-color: transparent;
            backdrop-filter: none;
            width: auto;
            padding-inline: 0;
            left: auto;
            height: auto;
            background-color: hsl(var(--background) / 50%);
            backdrop-filter: blur(3px);
        }

        nav > a {
            display: inline-block;
            font-weight: 500;
            text-decoration: underline;
            font-size: 1rem;
        }
    }
</style>