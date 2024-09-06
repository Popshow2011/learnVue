import type { TodoListType } from '../types'

export const fetchTodoList = async (): Promise<TodoListType> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return await response.json()
  } catch (error) {
    console.error('Ошибка при получении данных:', error)
    throw error
  }
}
