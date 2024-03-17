<script lang="ts">
    import NewTaskForm from "./NewTaskForm.svelte";
    import TasksList from "./TasksList.svelte";
</script>

<div class="page">
    <div class="form">
        <NewTaskForm></NewTaskForm>
    </div>

    <div class="tasks">
        <TasksList></TasksList>
    </div>
</div>
