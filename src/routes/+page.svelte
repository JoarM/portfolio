<section class="hero">
    <div class="hero-info">
        <h1>Joar Maltesson</h1>
        <p>I develop software that scales.</p>
    </div>
</section>

<section class="contact">
    <div class="contact-wrapper">
        <h2>Contact Me</h2>
    </div>
</section>

<style>
    @keyframes grow-in {
        from { scale: 0.9; }
        to { scale: 1; }
    }

    .hero {
        display: grid;
        max-width: 1240px;
        padding-inline: 1rem;
        margin-inline: auto;
        min-height: calc(100vh - 74.4px);
        min-height: calc(100dvh - 74.4px);
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

    .contact {
        min-height: 100vh;
        min-height: 100dvh;
        position: relative;
    }

    .contact::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url("/TheLog.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        filter: grayscale(100);
        opacity: 65%;
        z-index: -1;
        animation: grow-in linear;
        animation-timeline: view();
        animation-range-start: normal;
        animation-range-end: contain;
    }

    .contact-wrapper {
        max-width: 1240px;
        margin-inline: auto;
        padding-block: 8rem;
        padding-inline: 1rem;
    }

    .contact-wrapper > h2 {
        font-size: 2.75rem;
        font-weight: bold;
    }
</style>