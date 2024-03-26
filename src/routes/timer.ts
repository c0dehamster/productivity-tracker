import type { Task } from "$lib/types/task"
import { writable } from "svelte/store"

interface Timer {
    timestamp: number
    duration: number
    timeElapsed: number
    status: "idle" | "active" | "elapsed" | "failed"
    task: {
        name: string
        id: string
    } | null
}

const createTimerStore = () => {
    const { set, update, subscribe } = writable<Timer>()

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

            update((store) => {
                // For testing
                console.log(store.status)

                return {
                    ...store,
                    status: "elapsed",
                }
            })

            // TODO: add the task handler
        }

        timerLoop = setInterval(() => {
            update((store) => {
                if (store.timeElapsed === store.duration) onElapsed()

                // For testing
                console.log(store.timeElapsed)

                return {
                    ...store,
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

export const timerStore = createTimerStore()
