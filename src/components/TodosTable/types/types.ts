/*
completed: false
id: 1
title: "delectus aut autem"
userId:1 */

export type TodoItemType = {
  id: number
  title: string
  completed: boolean
  userId: number
}

export type TodoListType = TodoItemType[]
