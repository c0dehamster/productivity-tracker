<script lang="ts">
    import iconCheck from "$lib/images/icon_done.svg";

    import type { Task } from "$lib/types/task";

    export let tasks: Array<Task>;
</script>

<div class="details">
    <div class="details__header">
        <p class="details__column-title">Task</p>
        <p class="details__column-title">Time spent</p>
        <p class="details__column-title">Show</p>
    </div>

    <div class="tasks__body">
        <div class="glass total">
            <label for="total" class=" total__label">
                <p class="total__title">Total</p>
                <p class="total__time-spent">8 hrs 48 min</p>
                <div class="total__checkbox"></div>
                <input type="checkbox" class="hidden" id="total" />
            </label>
        </div>

        <ul class="tasks__list"></ul>
    </div>

    <ul class="tasks">
        {#if tasks.length > 0}
            {#each tasks as task}
                <li class="glass task">
                    <label for={task.id} class="task__contents">
                        <input type="checkbox" class="hidden" id={task.id} />
                        <p class="task__label">{task.name}</p>
                        <p class="task__time-spent">8 hrs 48 min</p>
                        <div class="task__status">
                            {#if task.completed}
                                <p>Done</p>
                                <img
                                    src={iconCheck}
                                    alt=""
                                    class="task__icon"
                                />
                            {:else}
                                <p>Active</p>
                            {/if}
                        </div>
                    </label>
                </li>
            {/each}
        {/if}
    </ul>
</div>
