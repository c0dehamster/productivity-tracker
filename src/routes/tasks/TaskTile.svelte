<script lang="ts">
    import type { Task } from "$lib/types/task";

    import iconExpand from "$lib/images/icon_expand.svg";
    import iconEdit from "$lib/images/icon_edit.svg";
    import iconDelete from "$lib/images/icon_delete.svg";
    import iconClose from "$lib/images/icon_close.svg";

    export let task: Task;
</script>

<div class="task-tile glass">
    <div class="task-tile__header">
        <input type="checkbox" class="hidden" id={task.id} />

        <label for={task.id} class="task-tile__checkbox">
            <span class="sr-only">Mark as completed</span>
        </label>

        <h2 class="task-tile__name">
            {task.name}
        </h2>

        <button class="expand">
            <img src={iconExpand} alt="expand" class="expand__icon" />
        </button>
    </div>

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
