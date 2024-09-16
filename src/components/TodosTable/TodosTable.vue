<script lang="ts" setup>
import { computed, ref } from 'vue'
import { fetchTodoList } from './Api'
import { type TodoListType } from './types'

const hideCompleted = ref(false)
const todos = ref<TodoListType | []>([])
const getTodosList = async () => {
  todos.value = await fetchTodoList().catch((error) => {
    throw new Error(`Error: ${error.message}`)
  })
}

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((elem) => !elem.completed) : todos.value
})

getTodosList()
</script>
<template>
  <Suspense>
    <template #default>
      <div class="table">
        <div>
          <div>Settings</div>
          <div>
            <button @click="hideCompleted = !hideCompleted">
              {{ hideCompleted ? 'Show completed' : 'Hide completed' }}
            </button>
          </div>
        </div>
        <table border="2">
          <tbody>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>completed</th>
              <th>UserId</th>
            </tr>
            <tr v-for="todo in filteredTodos" :key="todo.id">
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
