<script lang="ts"></script>

<form class="form">
    <input
        type="text"
        class="form__name"
        placeholder="Add new task"
        id="new-task-name"
    />
    <label for="new-task-name" class="sr-only">New task name</label>

    <div class="expandable">
        <div class="expandable__buffer">
            <div class="expandable__contents">
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    class="expandable__description"
                    placeholder="Add task description (optional)"
                ></textarea>

                <div class="form__controls">
                    <button class="form__button"> Cancel </button>
                    <button class="glass form__button"> Submit </button>
                </div>
            </div>
        </div>
    </div>
</form>

<style>
    .form {
        padding: 1.5rem;

        display: grid;
    }

    .form__name {
        height: 2rem;
        padding-inline: 1rem;

        border-bottom: 1px solid var(--color-primary-200);

        font-size: var(--font-size-300);
    }

    .expandable {
        display: grid;
        grid-template-rows: 0fr;

        transition: grid-template-rows 200ms ease-out;
    }

    .form:hover > .expandable,
    .form:focus-within > .expandable {
        grid-template-rows: 1fr;
    }

    .expandable__buffer {
        overflow: hidden;
    }

    .expandable__contents {
        padding-top: 1.5rem;

        display: grid;
        gap: 1.5rem;

        overflow: hidden;
    }

    .expandable__description {
        padding: 1rem;

        resize: none;

        border: 1px solid var(--color-primary-200);

        font-size: var(--font-size-100);
    }

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
        .form {
            padding-block: 2.5rem;
            padding-inline: 4rem;
        }

        .form__name {
            height: 2.5rem;
            padding-inline: 1.5rem;

            font-size: var(--font-size-400);
        }

        .expandable__contents {
            padding-top: 2.5rem;

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
