<template>
  <div>
    <Header
      msg="Черт знает что за приложение"
      :prop-style="'background-color: blue;'"
      @eventComponent="(event) => console.log(event)"
      >Переопределили слот</Header
    >
    <DeclarativeRendering />
    <TodosTable />
  </div>
</template>
<script setup lang="ts">
import DeclarativeRendering from '@/components/DeclarativeRendering/DeclarativeRendering.vue'
import Header from '@/components/Header/HeaderComponent.vue'
import TodosTable from '@/components/TodosTable/TodosTable.vue'
</script>
