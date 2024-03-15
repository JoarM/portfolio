<script lang="ts">
    import {
        afterNavigate,
    } from '$app/navigation';

    let atTop = false;
    let menuOpen = false;
    afterNavigate(() => {
        menuOpen = false;
        atTop = !!window.screenY;
    });
</script>

<header class:not-top={atTop}>
    <div class:open={menuOpen}>
        <a href="/">Joar Maltesson</a>
        <button class="menu-toggle" on:click={() => menuOpen = !menuOpen}>
            <span class="sr-only">Menu toggle</span>
        </button>
        <nav>
            <a href="/"><span>Home</span></a>
            <a href="/projects"><span>Projects</span></a>
            <a href="/about"><span>About me</span></a>
            <a href="/contact"><span>Contact me</span></a>
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
        --muted: 210 7.4% 22%;
        --muted-foreground: 210 7.4% 56%;

        --side-padding: 2rem;
        --header-height: 5rem;
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

    :global(.sr-only) {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }

    :global(button), 
    :global(input), 
    :global(textarea) {
        font-family: inherit;
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
        height: var(--header-height); 
    }

    header > div {
        max-width: 1240px;
        width: 100%;
        margin-inline: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: var(--side-padding);
        height: 40px;
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
        transition: height 250ms cubic-bezier(0.3, 0.2, 0.2, 1.4), 
        visibility 0ms 250ms, 
        padding-top 0ms 250ms;
        visibility: collapse;
    }

    .open > nav {
        height: calc(100vh - var(--header-height) + 5px);
        height: calc(100dvh - var(--header-height) + 5px);
        padding-top: 5px;
        visibility: visible;
        transition: height 250ms cubic-bezier(0.3, 0.2, 0.2, 1.4), 
        visibility 0ms 0ms, 
        padding-top 0ms 0ms;
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

    div > a:focus-visible {
        --ring-offset: 4px;
        outline: none;
        box-shadow: 0px 0px 0px var(--ring-offset) hsl(var(--background)), 0px 0px 0px calc(1px + var(--ring-offset)) hsl(var(--foreground));
        border-radius: 2px;
    }

    nav > a {
        font-weight: bold;
        display: block;
        font-size: 1.75rem;
        text-decoration: none;
        padding-block: .75rem;
        border-bottom: 1px solid hsl(var(--border));
        transition: color 200ms ease;
    }

    nav > a > span {
        transform: translateY(-100px);
        opacity: 0%;
        transition: transform 0ms cubic-bezier(0.3, 0.2, 0.2, 1.4) 250ms,
        opacity 0ms ease 250ms;
    }

    .open > nav > a > span {
        display: block;
        opacity: 100%;
        transform: translateY(0px);
        transition: transform 250ms cubic-bezier(0.3, 0.2, 0.2, 1.4) var(--delay, 0ms),
        opacity 250ms ease var(--delay, 0ms);
    }

    .open nav > a:nth-child(2) {
        --delay: 100ms;
    }

    .open nav > a:nth-child(3) {
        --delay: 200ms;
    }

    .open nav > a:nth-child(4) {
        --delay: 300ms;
    }

    nav > a:hover {
        color: hsl(var(--muted-foreground));
    }

    nav > a:focus-visible {
        --ring-offset: 4px;
        outline: none;
        box-shadow: 0px 0px 0px var(--ring-offset) hsl(var(--background)), 0px 0px 0px calc(1px + var(--ring-offset)) hsl(var(--foreground));
        border-radius: 2px;
    }

    .not-top {
        border-bottom: 1px solid hsl(var(--border));
    }

    .menu-toggle {
        border: none;
        outline: 0;
        height: 40px;
        width: 40px;
        position: relative;
        border-radius: 6px;
        background-color: hsl(var(--background));
    }

    .menu-toggle::after,
    .menu-toggle::before {
        content: "";
        position: absolute;
        left: 10%;
        right: 10%;
        height: 2px;
        background-color: hsl(var(--foreground));
        transition: background-color 250ms ease,
        transform 250ms ease,
        rotate 250ms cubic-bezier(0.3, 0.2, 0.2, 1.4),
        top 250ms ease,
        bottom 250ms ease;
        transform-origin: 50%;
    }

    .menu-toggle::before {
        top: 33%;
    }

    .menu-toggle::after {
        bottom: 33%;
    }

    .menu-toggle:hover::before,
    .menu-toggle:hover::after {
        background-color: hsl(var(--muted-foreground));
    }

    .menu-toggle:focus-visible {
        --ring-offset: 0px;
        outline: none;
        box-shadow: 0px 0px 0px var(--ring-offset) hsl(var(--background)), 0px 0px 0px calc(1px + var(--ring-offset)) hsl(var(--foreground));
        border-radius: 6px;
    }

    .open .menu-toggle::before {
        top: 50%;
        rotate: 33.75deg;
        transform: translateY(-1px);
    }

    .open .menu-toggle::after {
        bottom: 50%;
        rotate: -33.75deg;
        transform: translateY(1px);
    }

    @media (min-width: 520px) {
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
            width: auto;
            padding-inline: 0;
            height: auto;
            background-color: initial;
            overflow: initial;
            visibility: initial;
            transition: initial;
        }

        nav > a {
            display: inline-block;
            font-weight: 500;
            text-decoration: underline;
            font-size: 1rem;
            border: initial;
            padding: initial;
        }

        nav > a > span {
            transform: initial;
            opacity: initial;
        }

        .menu-toggle {
            display: none;
        }

        .open > nav {
            height: auto;
        }

        nav > a > span {
            transform: initial;
            opacity: initial;
            transition: initial;
        }
    }
</style>