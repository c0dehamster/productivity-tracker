export interface Task {
    id: string
    name: string
    description: string
    completed: boolean
}

// TODO: disallow tasks with an empty name