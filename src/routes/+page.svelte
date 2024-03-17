<script lang="ts">
    import Clock from "./Clock.svelte";
</script>

<div class="page">
    <div class="clock">
        <Clock></Clock>
    </div>

    <button class="select-task hidden"> Select a task </button>

    <button class="start-button glass hidden"> Start! </button>

    <div class="active-task">
        <p class="active-task__label">Working on</p>
        <p class="active-task__name">Something extremely important</p>
    </div>

    <div class="controls">
        <button class="controls__give-up">Give up</button>
        <button class="controls__finished glass">Finished!</button>
    </div>
</div>

<style>
    /* Tablet first, since it is the simplest layout */

    .page {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        justify-items: center;
        align-items: center;
    }

    .clock {
        width: 100%;
        grid-column: 1 / 3;
    }

    .select-task,
    .active-task__name {
        font-size: var(--font-size-600);
    }
    .start-button,
    .controls {
        font-size: var(--font-size-500);
    }

    .start-button,
    .controls__finished {
        min-height: 3rem;
        padding-inline: 2rem;
        box-shadow: 0.25rem 0.25rem 2rem 0.25rem rgba(0, 0, 0, 0.1);
    }

    .active-task {
        grid-column: 1 / 3;

        display: grid;
        justify-items: center;
    }

    .active-task__label {
        font-weight: var(--font-weight-bold);
    }

    .controls {
        grid-column: 1 / 3;

        display: flex;
        gap: 3rem;
    }

    @media screen and (width > 64rem) {
        .page {
            gap: 0rem;
        }
        .active-task {
            grid-column: 1 / 2;
        }

        .controls {
            grid-column: 1 / 2;
        }

        .clock {
            grid-column: 2 / 3;
            grid-row: 1 / 3;
        }
    }
</style>
