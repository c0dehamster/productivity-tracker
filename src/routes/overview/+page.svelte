<script lang="ts">
    import { placeholderData } from "$lib/utils/placeholderData";
    import Chart from "./Chart.svelte";
    import Details from "./Details.svelte";
</script>

<div class="page">
    <fieldset class="timespan">
        <legend class="timespan__legend">Show for</legend>

        <div class="timespan__options">
            <label for="day" class="timespan__label glass">
                <input type="radio" class="hidden" id="day" value="day" />
                Day
            </label>

            <label for="week" class="timespan__label glass">
                <input type="radio" class="hidden" id="week" value="weeek" />
                Week
            </label>

            <label for="month" class="timespan__label glass">
                <input type="radio" class="hidden" id="month" value="month" />
                Month
            </label>

            <label for="year" class="timespan__label glass">
                <input type="radio" class="hidden" id="year" value="year" />
                Year
            </label>
        </div>
    </fieldset>

    <h1 class="focused-time">
        Focused time: <span class="focused-time__value">7 hrs 30 min</span>
    </h1>

    <div class="chart">
        <Chart></Chart>
    </div>

    <button class="divider">View detailed statistics</button>

    <div class="details">
        <Details tasks={placeholderData}></Details>
    </div>
</div>
