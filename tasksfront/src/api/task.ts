import { CreateTask, UpdateTask } from "../interfaces/task.interfaces"

const API = 'http://localhost:3000/api'

export const createTaskRequest = (task: CreateTask) =>
    fetch(`${API}/tasks`, {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json"
        }
    })

export const getTaskRequest = () => {
    return fetch(`${API}/tasks`)
}

export const deleteTaskRequest = (id: string) => {
    return fetch(`${API}/tasks/${id}`, { method: "DELETE" })
}

export const updateTaskRequest = (id: string, task: UpdateTask) => {
    return fetch(`${API}/tasks/${id}`, { 
        method: "PUT",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json"
        }    
    })
};