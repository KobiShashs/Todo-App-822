import axios, { AxiosResponse } from "axios"
import { Todo } from "../Models/Todo";

export async function getAllTasks(): Promise<AxiosResponse<Todo[], any>> {
    return await axios.get<Todo[]>("https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/tasks");
}


export async function addTask(task: Todo): Promise<AxiosResponse<Todo, any>> {
    return await axios.post<Todo>("......", task);
}

export async function editTask(id: number, task: Todo): Promise<AxiosResponse<Todo, any>> {
    return await axios.put<Todo>("....../" + id, task);
}

export async function deleteTask(id: number): Promise<AxiosResponse<any, any>> {
    return await axios.delete<any>("....../" + id);
}