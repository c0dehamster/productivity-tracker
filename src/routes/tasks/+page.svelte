<script lang="ts">
    import { placeholderData } from "$lib/utils/placeholderData"

    import NewTaskForm from "./NewTaskForm.svelte"
    import TaskTile from "./TaskTile.svelte"
    import { tasksStore } from "./tasks"

    const suspendTask = (id: string) =>
        tasksStore.toggleCompleted(id, "suspended")
    const resumeTask = (id: string) => tasksStore.toggleCompleted(id, "active")

    $: tasksToDisplay = $tasksStore.length > 0 ? $tasksStore : placeholderData
</script>

<div class="page">
    <div class="glass form">
        <NewTaskForm></NewTaskForm>
    </div>

    <ul class="tasks-list">
        {#if tasksToDisplay.length > 0}
            {#each tasksToDisplay as task}
                <TaskTile
                    {task}
                    on:suspend={(e) => suspendTask(e.detail)}
                    on:resume={(e) => resumeTask(e.detail)}
                    on:delete={(e) => tasksStore.deleteTask(e.detail)}
                ></TaskTile>
            {/each}
        {/if}
    </ul>
</div>

<style>
    .page {
        padding-block: 6.75rem;
        padding-inline: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 2rem;
    }

    .tasks-list {
        box-shadow: 0.25rem 0.25rem 2rem 0.25rem rgba(0, 0, 0, 0.1);
    }

    @media screen and (width > 40rem) {
        .page {
            padding-block: 8rem;
            padding-inline: 4rem;
            gap: 5rem;
        }
    }

    @media screen and (width > 64rem) {
        .page {
            padding-inline: 20%;
        }
    }
</style>
