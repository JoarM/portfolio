<div class="cover-image">
    <img src="/about-me-2.jpg" alt="Me in by the sunset">
</div>

<main>
    <div>
        <h1>About me</h1>
        <p>
            Hey my name is Joar Maltesson I use Steep as my nick on many social media platforms. 
            I'm a student at LBS kreativa gymnasiet Borås, Sweden. There I study software development, my passion 
            is creating amazing user experinces on the web and on native platforms.
        </p>
    </div>
</main>

<style>
    :root {
        --image-width: 100%;
    }

    .cover-image {
        padding-inline: 2rem;
        margin-top: 2rem;
        width: var(--image-width);
    }

    .cover-image > img {
        border-radius: 48px;
        aspect-ratio: 1.5/2;
        object-fit: cover;
        filter: brightness(85%);
        width: 100%;
        object-position: center top;
    }

    main {
        margin-inline: auto;
        display: grid;
        align-items: center;
        padding-bottom: 5rem;
    }

    main > div {
        padding-inline: 2rem;
        max-width: 960px;
    }

    main > div > h1 {
        font-size: 3.5rem;
        padding-bottom: .5rem;
        border-bottom: 2px solid hsl(var(--foreground));
    }

    main > div > p {
        font-size: 1.25rem;
        font-weight: 500;
        margin-top: 2rem;
        max-width: 700px;
    }

    @media (min-width: 768px) {
        :root {
            --image-width: 50%;
        }

        .cover-image {
            position: absolute;
            top: 0;
            right: 0;
            padding-inline: 0;
            margin-top: 0;
        }

        .cover-image > img {
            border-radius: 0 0 0 48px;
        }

        main {
            margin-right: var(--image-width);   
            margin-left: max(calc((100vw - 1240px) / 2), 0px);
            min-height: calc(100vh - var(--header-height));
            min-height: calc(100svh - var(--header-height));
        }
    }

    @media (min-width: 1200px) {
        :root {
            --image-width: 25%;
        }
    }
</style>
