<main>
    <div>
        <h1>Contact me</h1>
        <p>Contact me about anything from, job offers, collaborations or commissioning.</p>
        <form action="">
            <div>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" placeholder="John Doe">
            </div>
            <div>
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="example@gmail.com">
            </div>
            <div>
                <label for="message">Message</label>
                <textarea rows="6" name="message" id="message"/>
            </div>
            <button type="submit">Send message</button>
        </form>
        <div class="info">
            <a href="mailto:joar.maltesson@gmail.com" class="email">joar.maltesson@gmail.com</a>
            <a href="https://twitter.com/steepval" class="twitter">Twitter</a>
            <a href="https://www.linkedin.com/in/joar-maltesson-18ab1a256/">LinkedIn</a>
            <a href="https://www.instagram.com/joar_l._.l/">Instagram</a>
            <a href="https://github.com/JoarM">Github</a>
        </div>
    </div>
</main>

<style>
    main {
        display: grid;
        max-width: 576px;
        padding-inline: var(--side-padding);
        padding-block: 5rem;
        margin-inline: auto;
        min-height: calc(100vh - 74.4px);
        min-height: calc(100dvh - 74.4px);
        place-items: center;
    }

    main > div > p {
        font-size: 1.125rem;
    }

    form {
        margin-top: 1rem;
    }

    form * + * {
        margin-top: .75rem;
    }

    input, textarea {
        margin-top: .25rem;
        display: block;
        width: 100%;
        padding-inline: .75rem;
        padding-block: .5rem;
        border: 1px solid hsl(var(--foreground));
        background-color: hsl(var(--background));
        color: inherit;
    }

    input {
        height: 36px;
    }

    textarea {
        resize: none;
    }

    input::placeholder, textarea::placeholder {
        color: hsl(var(--muted-foreground));
    }

    input:focus-visible, textarea:focus-visible {
        --ring-offset: 2px;
        outline: none;
        box-shadow: 0px 0px 0px var(--ring-offset) hsl(var(--background)), 0px 0px 0px calc(1px + var(--ring-offset)) hsl(var(--muted-foreground));
        border-radius: 2px;
    }

    button {
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

    button:hover {
        background-color: hsl(210 5.6% 13%);
    }

    button:focus-visible {
        --ring-offset: 2px;
        outline: none;
        box-shadow: 0px 0px 0px var(--ring-offset) hsl(var(--background)), 0px 0px 0px calc(1px + var(--ring-offset)) hsl(var(--muted-foreground));
    }

    button::after {
        content: "";
        position: absolute;
        inset: -1px;
        background-color: hsl(var(--background));
        border: 1px solid hsl(var(--foreground));
        transition: transform 250ms;
        z-index: -1;
    }

    button:hover::after {
        transform: translate(10px, 10px);
    }

    .info {
        margin-top: .75rem;
        display: grid;
        justify-items: start;
    }

    .info .twitter {
        margin-top: .625rem;
    }

    .info * + * {
        margin-top: .25rem;
    }

    .info a {
        color: inherit;
        text-decoration: none;
        font-size: 1.125rem;
        transition: color 250ms;
    }

    .info a:hover {
        color: hsl(var(--muted-foreground));
    }

    .info .email {
        display: inline;
        position: relative;
        font-size: 1.325rem;
        font-weight: 500;
        padding-inline: .125rem;
    }

    .info .email:hover {
        color: hsl(var(--foreground));
    }

    .info .email::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 10px;
        background-color: hsl(var(--muted));
        z-index: -1;
        transition: height 250ms;
    }

    .info .email:hover::before {
        height: 100%;
    }
</style>