import type { Task } from "$lib/types/task"
import { derived, writable } from "svelte/store"

type TimerStatus = "idle" | "active" | "elapsed" | "failed"

interface Timer {
    timestamp: number
    duration: number
    timeElapsed: number
    status: TimerStatus
    task: {
        name: string
        id: string
    } | null
}

// TODO: move the defaults to a more appropriate location

const defaultTimer: Timer = {
    timestamp: 0,
    duration: 1800,
    timeElapsed: 0,
    status: "idle",
    task: null,
}

const createTimerStore = (timer: Timer) => {
    const { set, update, subscribe } = writable(timer)

    const runTimer = (duration: number, task?: Task) => {
        /* Initialize the timer */

        let newTask = task ? { name: task.name, id: task.id } : null

        set({
            timestamp: Date.now(),
            duration,
            timeElapsed: 0,
            status: "active",
            task: newTask,
        })

        /* The countdown loop */

        let timerLoop: number

        const onElapsed = () => {
            clearInterval(timerLoop)

            // TODO: add the task handler
        }

        timerLoop = setInterval(() => {
            update((store) => {
                let status: TimerStatus = "active"

                if (store.timeElapsed === store.duration) {
                    onElapsed()
                    status = "elapsed"
                }

                // For testing
                console.log(store.timeElapsed)

                return {
                    ...store,
                    status,
                    timeElapsed: store.timeElapsed + 1,
                }
            })
        }, 1000)
    }

    const reset = () => {
        update((store) => {
            // Will have to figure out what to do about the timestamp
            return {
                ...store,
                status: "idle",
                timeElapsed: 0,
                task: null,
            }
        })
    }

    const giveUp = () => {
        update((store) => {
            return {
                ...store,
                timeElapsed: 0,
                status: "failed",
            }
        })

        // TODO: add the task handler
    }

    return {
        subscribe,
        runTimer,
        giveUp,
        reset,
    }
}

export const timerStore = createTimerStore(defaultTimer)

export const timeLeft = derived(timerStore, ($timerStore) => {
    return $timerStore.duration - $timerStore.timeElapsed
})
