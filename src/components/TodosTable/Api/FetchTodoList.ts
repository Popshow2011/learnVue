import type { TodoListType } from '../types'

export const fetchTodoList = async (): Promise<TodoListType> => {
  return await (await fetch('https://jsonplace2holder.typicode.com/todos'))
    .json()
    .catch((error) => {
      throw new Error(`Error: ${error.message}`)
    })
}
