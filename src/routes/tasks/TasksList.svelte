<script lang="ts">
    import { placeholderData } from "$lib/utils/placeholderData";
    import TaskTile from "./TaskTile.svelte";
</script>

<ul class="tasks-list">
    {#if placeholderData.length > 0}
        {#each placeholderData as task}
            <TaskTile {task}></TaskTile>
        {/each}
    {/if}
</ul>
