<img src="/about-me-2.jpg" alt="Me in by the sunset" class="cover-image">

<main>
    <div>
        <h1>About me</h1>
    </div>
</main>

<style>
    :root {
        --image-width: 375px;
    }

    .cover-image {
        filter: brightness(85%);
        position: absolute;
        top: 0;
        right: 0;
        aspect-ratio: 1.15/2;
        width: var(--image-width);
        object-fit: cover;
        border-radius: 0 0 0 48px;
    }

    main {
        margin-right: var(--image-width);
    }

    main > div {
        padding-inline: 2rem;
        margin-left: auto;
        max-width: 1205px;
    }
</style>