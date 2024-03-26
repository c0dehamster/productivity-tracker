<script lang="ts">
    import Clock from "./Clock.svelte"

    import { timerStore } from "./timer"

    let duration = 30 // For testing, 30 seconds

    const onStart = () => timerStore.runTimer(duration)
</script>

<div class="page">
    <div class="clock">
        <Clock></Clock>
    </div>

    <div class="select-task">
        <button class="select-task__button"> Select a task </button>
    </div>

    <button class="glass-button start-button" on:click={onStart}>
        Start!
    </button>

    <div class="active-task">
        <p class="active-task__label">Working on...</p>
        <p class="active-task__name">Something extremely important</p>
    </div>

    <div class="controls">
        <button class="controls__give-up">Give up</button>
        <button class="glass controls__finished">Finished!</button>
    </div>
</div>

<style>
    /* Tablet first, since it is the simplest layout */

    .page {
        position: relative;
        padding-inline: 4rem;

        display: grid;
        grid-template-rows: 4fr 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
    }

    .clock {
        position: relative;
        z-index: 10;

        grid-column: 1 / 3;
        align-self: end;

        width: 100%;

        display: grid;
        place-items: center;
    }

    /* Idle state */

    .start-button {
        height: 3rem;
        padding-inline: 2rem;

        grid-row: 2 / 4;

        font-size: var(--font-size-500);
    }

    .select-task {
        grid-row: 2 / 4;
    }

    .select-task__button {
        font-size: var(--font-size-500);
    }

    /* Active state */

    .active-task {
        grid-row: 2 / 3;
        grid-column: 1 / 3;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        text-align: center;

        /* Temporary */
        display: none;
    }

    .active-task__label {
        font-size: var(--font-size-300);
        font-weight: var(--font-weight-bold);
    }

    .active-task__name {
        font-size: var(--font-size-600);
    }

    .controls {
        grid-row: 3 / 4;
        grid-column: 1 / 3;

        display: flex;
        gap: 3rem;

        /* Temporary */
        display: none;
    }

    .controls__give-up {
        font-size: var(--font-size-500);
    }

    .controls__finished {
        height: 3rem;
        padding-inline: 2rem;

        font-size: var(--font-size-500);
    }

    @media screen and (width < 40rem) {
        .page {
            grid-template-columns: 1fr;
            grid-template-rows: 3fr 1fr;

            padding-inline: 2rem;
        }
        .clock {
            grid-row: 1 / 3;
            align-self: center;

            padding: 0rem;
        }

        /* Idle state */

        .select-task {
            grid-row: 1 / 3;
            grid-column: 1 / 2;
        }

        .select-task__button {
            font-size: var(--font-size-400);
        }

        .start-button {
            grid-row: 2 / 3;
            grid-column: 1 / 2;

            font-size: var(--font-size-300);
            height: 2rem;
        }

        /* Active state */

        .active-task {
            grid-row: 1 / 3;

            max-width: 75%;
        }

        .active-task__label {
            font-size: var(--font-size-100);
        }

        .active-task__name {
            font-size: var(--font-size-300);
        }

        .controls {
            grid-row: 2 / 3;
        }

        .controls__give-up {
            font-size: var(--font-size-300);
        }

        .controls__finished {
            height: 2rem;

            padding-inline: 1rem;

            font-size: var(--font-size-300);
        }
    }

    @media screen and (width > 64rem) {
        .page {
            grid-template-rows: 1fr 1fr 1fr;

            padding-inline: 2rem;
        }

        /* Decorative background lines */

        .page::before,
        .page::after {
            content: "";
            position: absolute;

            height: 2px;

            background-color: var(--color-primary-200);
        }

        .page::before {
            top: 35%;
            left: 2%;
            width: 70%;
        }

        .page::after {
            top: 65%;
            left: 20%;
            width: 60%;
        }

        /* A mess of magic numbers to fit the freehand-drawn design*/

        .clock {
            grid-row: 1 / 4;
            grid-column: 2 / 3;
            align-self: center;
        }

        /* Idle state */

        .select-task {
            grid-row: 2 / 3;
            grid-column: 1 / 2;
            justify-self: end;
        }

        .select-task__button {
            font-size: var(--font-size-700);
        }

        .start-button {
            height: 4rem;

            margin-block-start: 2rem;

            grid-row: 3 / 4;
            grid-column: 1 / 2;
            align-self: start;
            justify-self: end;

            font-size: var(--font-size-600);
        }

        /* Active state */

        .active-task {
            grid-row: 2 / 3;
            grid-column: 1 / 2;
            justify-self: end;
        }

        .controls {
            margin-block-start: 2rem;

            grid-row: 3 / 4;
            grid-column: 1 / 2;
            align-self: start;
            justify-self: end;
        }

        .controls__give-up {
            font-size: var(--font-size-600);
        }

        .controls__finished {
            height: 4rem;
            font-size: var(--font-size-600);
        }
    }
</style>
