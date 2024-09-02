<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const todos = ref<TodoListType | []>([])

onMounted(() => {
  getTodosList()
})

const getTodosList = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => (todos.value = json))
}
</script>
<template>
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

<style scoped></style>
