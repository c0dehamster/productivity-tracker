<script lang="ts">
    import { tasksStore } from "./tasks"

    let name = ""
    let description = ""

    let isError = false

    const resetFields = () => {
        name = ""
        description = ""
        isError = false
    }

    const onInput = () => {
        if (name !== "") isError = false
    }

    const onSubmit = () => {
        if (name === "") {
            isError = true
            return
        }

        tasksStore.addTask(name, description !== "" ? description : null)

        resetFields()
    }

    const onCancel = () => resetFields()

    $: isFormActive = name !== "" || description !== ""

    $: {
        console.log($tasksStore)
    }
</script>

<form class="form">
    <!-- TODO: limit the size of the inputs -->
    <div class="form__input-wrapper">
        <input
            type="text"
            class="form__name {name !== '' ? 'form__name--active' : ''}"
            placeholder="Add new task"
            id="new-task-name"
            autocomplete="off"
            bind:value={name}
            on:input={onInput}
        />
        <label for="new-task-name" class="sr-only">New task name</label>
        <p class="error-message {isError ? 'error-message--active' : ''}">
            Please enter a task name
        </p>
    </div>

    <div class="expandable {isFormActive ? 'expandable--active' : ''}">
        <div class="expandable__buffer">
            <div class="expandable__contents">
                <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    class="expandable__description {description !== ''
                        ? 'expandable__description--active'
                        : ''}"
                    placeholder="Add task description (optional)"
                    bind:value={description}
                ></textarea>

                <div class="form__controls">
                    <button
                        class="form__button"
                        type="button"
                        on:click={onCancel}
                    >
                        Cancel
                    </button>

                    <button
                        class="glass-button form__button"
                        type="button"
                        on:click={onSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
</form>

<style>
    .form {
        display: grid;
    }

    .form__input-wrapper {
        padding: 1.5rem;

        display: grid;
        gap: 1rem;
    }

    .error-message {
        display: none;

        font-size: var(--font-size-100);
        text-align: end;
    }

    .error-message--active {
        display: block;
    }

    .expandable {
        display: grid;
        grid-template-rows: 0fr;

        transition: grid-template-rows 200ms ease-out;
    }

    .form:hover > .expandable,
    .form:focus-within > .expandable,
    .expandable--active {
        grid-template-rows: 1fr;
    }

    .expandable__buffer {
        overflow: hidden;
    }

    .expandable__contents {
        padding-block-end: 1.5rem;
        padding-inline: 1.5rem;

        display: grid;
        gap: 1.5rem;

        overflow: hidden;
    }

    /* Inputs */

    .form__name {
        height: 2rem;
        padding-inline: 1rem;

        border-bottom: 1px solid var(--color-primary-200);

        font-size: var(--font-size-300);
    }

    .form__name:hover,
    .expandable__description:hover {
        border-color: var(--color-primary-400);
    }

    .form__name--active,
    .expandable__description--active {
        border-color: var(--color-primary-400);
        color: var(--color-primary-400);
    }

    .expandable__description {
        padding: 1rem;

        resize: none;

        border: 1px solid var(--color-primary-200);

        font-size: var(--font-size-100);
    }

    /* Controls */

    .form__controls {
        justify-self: end;

        display: flex;
        gap: 1rem;
    }

    .form__button {
        height: 2rem;
        padding-inline: 1rem;
    }

    @media screen and (width > 40rem) {
        .form__input-wrapper {
            padding-block: 2.5rem;
            padding-inline: 4rem;
        }

        .form__name {
            height: 2.5rem;
            padding-inline: 1.5rem;

            font-size: var(--font-size-400);
        }

        .error-message {
            font-size: var(--font-size-300);
        }

        .expandable__contents {
            padding-block-end: 2.5rem;
            padding-inline: 4rem;

            gap: 2.5rem;
        }

        .expandable__description {
            padding-inline: 1.5rem;

            font-size: var(--font-size-300);
        }

        .form__button {
            height: 3rem;
            padding-inline: 2rem;

            font-size: var(--font-size-400);
        }
    }

    @media screen and (width > 64rem) {
        .form__name {
            height: 3rem;
            padding-inline: 2rem;

            font-size: var(--font-size-500);
        }

        .expandable__description {
            padding-inline: 2rem;
            padding-block: 1.5rem;
        }
    }
</style>
