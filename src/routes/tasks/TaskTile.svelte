<script lang="ts">
    import type { Task } from "$lib/types/task"

    import iconExpand from "$lib/images/icon_expand.svg"
    import iconEdit from "$lib/images/icon_edit.svg"
    import iconDelete from "$lib/images/icon_delete.svg"
    import iconClose from "$lib/images/icon_close.svg"

    export let task: Task
</script>

<div class="glass task-tile">
    <input type="checkbox" class="hidden" id={task.id} />

    <label for={task.id} class="task-tile__checkbox">
        <span class="sr-only">Mark as completed</span>
    </label>

    <p class="task-tile__name">
        {task.name}
    </p>

    <button class="expand">
        <img src={iconExpand} alt="expand" class="expand__icon" />
    </button>

    <div class="task-tile__expandable">
        <p class="task-tile__description">
            {task.description}
        </p>

        <div class="controls">
            <button class="glass controls__button controls__button--give-up"
                >Give up</button
            >

            <button class="glass controls__button controls__button--edit">
                <img src={iconEdit} alt="edit" class="controls__icon" />
            </button>

            <button class="glass controls__button controls__button--delete">
                <img src={iconDelete} alt="delete" class="controls__icon" />
            </button>
        </div>
    </div>
</div>

<style>
    .task-tile {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "checkbox expand"
            "name name"
            "expandable expandable";
        row-gap: 1.5rem;
        column-gap: 1rem;
        align-items: center;

        padding-inline: 1.5rem;
        padding-block-start: 1.5rem;
    }

    /* Dividing line */

    .task-tile:where(:not(:last-child)) {
        border-bottom: 1px solid var(--color-primary-200);
    }

    .task-tile__checkbox {
        grid-area: checkbox;

        width: 1rem;
        aspect-ratio: 1;
        border: 1px solid var(--color-primary-400);
    }

    .task-tile__name {
        grid-area: name;

        font-size: var(--font-size-300);

        text-wrap: balance;
    }

    .expand {
        grid-area: expand;
        justify-self: end;
    }

    .expand__icon {
        width: 100%;
        height: 100%;
    }

    /* Expandable */

    .task-tile__expandable {
        grid-area: expandable;

        padding-block-end: 1.5rem;

        display: grid;
        gap: 1.5rem;
    }

    .task-tile__description {
        font-size: var(--font-size-100);
    }

    .controls {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 1.5rem;
    }

    .controls__button {
        height: 2rem;
    }

    .controls__icon {
        width: 80%;
        height: 80%;
    }

    .controls__button--give-up {
        justify-self: start;

        padding-inline: 1rem;

        font-size: var(--color-primary-300);
    }

    .controls__button--edit,
    .controls__button--delete {
        aspect-ratio: 1;
    }

    @media screen and (width > 40rem) {
        .task-tile {
            padding-inline: 2.5rem;
            padding-block-start: 2rem;

            grid-template-columns: 1.5rem 1fr 2rem;
            grid-template-areas:
                "checkbox name expand"
                ". expandable .";
            row-gap: 2rem;
            column-gap: 1.5rem;
        }

        .task-tile__checkbox {
            width: 1.5rem;
        }

        .task-tile__name {
            font-size: var(--font-size-400);
        }

        .expand {
            width: 2rem;
        }

        .task-tile__expandable {
            padding-block-end: 2rem;

            gap: 2rem;
        }

        .task-tile__description {
            font-size: var(--font-size-300);
        }

        .controls {
            gap: 2rem;
        }

        .controls__button {
            height: 3rem;
        }

        .controls__button--give-up {
            padding-inline: 2rem;

            font-size: var(--font-size-400);
        }
    }

    @media screen and (width > 64rem) {
        .task-tile {
            padding-block-start: 2.5rem;
            padding-inline: 3rem;

            grid-template-columns: 2rem 1fr 3rem;

            row-gap: 2.5rem;
            column-gap: 3rem;
        }

        .task-tile__checkbox {
            width: 2rem;
        }

        .task-tile__name {
            font-size: var(--font-size-500);
        }

        .expand {
            width: 3rem;
        }

        .task-tile__expandable {
            padding-block-end: 2.5rem;
            gap: 3rem;
        }
    }
</style>
