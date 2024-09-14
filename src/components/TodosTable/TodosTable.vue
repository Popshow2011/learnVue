<script lang="ts" setup>
import { ref } from 'vue'
import { fetchTodoList } from './Api'
import { type TodoListType } from './types'

const todos = ref<TodoListType | []>([])
const getTodosList = async () => {
  todos.value = await fetchTodoList().catch((error) => {
    throw new Error(`Error: ${error.message}`)
  })
}

getTodosList()
</script>
<template>
  <Suspense>
    <template #default>
      <div class="table">
        <table border="2">
          <tbody>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>completed</th>
              <th>UserId</th>
            </tr>
            <tr v-for="todo in todos" :key="todo.id">
              <td>{{ todo.id }}</td>
              <td>{{ todo.title }}</td>
              <td>{{ todo.completed }}</td>
              <td>{{ todo.userId }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template #fallback>Loading...</template>
  </Suspense>
</template>

<style scoped></style>
