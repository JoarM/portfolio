<section class="hero">
    <div class="hero-info">
        <h1>Joar Maltesson</h1>
        <p>I develop software that scales.</p>
    </div>
    <div class="hero-img">
        <img src="/hero-image.webp" alt="">
    </div>
</section>

<section class="about-me">
    <div class="about-me-image">
        <img src="/about-me.jpg" alt="">
    </div>
    <div class="about-me-wrapper">
        <h2>About me</h2>
        <p>
            <span>
                Im a 18 year old student and entrepreneur from Borås, Sweden. I study system development at LBS kreativa gymnasiet.
                I enjoy solving problems with code, my primary focus is fullstack web development but i also develop desktop and mobile apps.
            </span>
        </p>
        <a href="/about-me" class="link">Read more</a>
    </div>
</section>

<section class="contact">
    <div class="contact-wrapper">
        <h2>Contact Me</h2>
        <p>Sparked your intrest? Contact me about anything from, job offers, collaborations or commissioning.</p>
        <div>
            <a href="/contact-me" class="link">Contact me</a>
        </div>
    </div>
</section>

<style>
    @keyframes grow-in {
        from { scale: 0.9; }
        to { scale: 1; }
    }

    @keyframes scroll-text-reveal {
        to { background-size: 100% 100%; }
    }

    .hero {
        display: grid;
        max-width: 1240px;
        padding-inline: var(--side-padding);
        margin-inline: auto;
        min-height: calc(100vh - 74.4px);
        min-height: calc(100dvh - 74.4px);
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
        min-height: calc(100vh - 74.4px);
        min-height: calc(100dvh - 74.4px);
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
        animation-range-start: normal;
        animation-range-end: contain;
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
        height: 50dvh;
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