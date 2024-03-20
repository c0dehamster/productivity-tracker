<script lang="ts">
    import "./style.css"

    import backgroundPatternMobile from "../lib/images/bg_pattern_mobile.svg"
    import backgroundPatternTablet from "../lib/images/bg_pattern_tablet.svg"
    import backgroundPatternDesktop from "../lib/images/bg_pattern_desktop.svg"
    import Header from "$lib/components/Header.svelte"
</script>

<svelte:head>
    <title>Frosted Glass time manager</title>
</svelte:head>

<div
    class="app"
    style="
        --background-pattern-mobile: url({backgroundPatternMobile});
        --background-pattern-tablet: url({backgroundPatternTablet});
        --background-pattern-desktop: url({backgroundPatternDesktop});"
>
    <div class="header">
        <Header></Header>
    </div>

    <main class="wrapper">
        <slot />
    </main>
</div>

<style>
    .app {
        position: relative;

        min-height: 100vh;
        width: 100%;

        display: grid;
        grid-template-rows: auto 1fr;

        background-image: var(--background-pattern-mobile);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }

    .header {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
    }

    .wrapper {
        grid-row: 1 / 3;
        grid-column: 1 / 2;

        display: grid;
    }

    @media screen and (width > 40rem) {
        .app {
            background-image: var(--background-pattern-tablet);
        }

        .wrapper {
        }
    }

    @media screen and (width > 64rem) {
        .wrapper {
        }

        .app {
            background-image: var(--background-pattern-desktop);
        }
    }
</style>
