export type taskStatus = "active" | "completed" | "suspended"

export interface Task {
    id: string
    name: string
    description: string | null
    status: taskStatus
}

// TODO: disallow tasks with an empty name
