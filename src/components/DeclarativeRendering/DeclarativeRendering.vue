<script setup lang="ts">
import { reactive, ref } from 'vue'
import AttributeBindings from '@/components/AttributeBindings/AttributeBindings.vue'
import { type CounterType, type MessageType } from './types'

const counter = reactive<CounterType>({ count: 0 })
const message = ref<MessageType>({ value: 'Hello World!' })
const color = ref('#291919')
const isVisibleTitle = ref(true)

const updateCounter = () => {
  counter.count++

  if (counter.count >= 10) {
    message.value = { value: 'Count has reached 10!' }
  }
}
const changeColor = (event) => {
  color.value = event.target.value
}
</script>

<template>
  <div :style="{ backgroundColor: color }" class="container">
    <h1 v-if="isVisibleTitle">{{ message.value }}</h1>
    <p>Count is: {{ counter.count }}</p>
    <button @click="updateCounter" class="btn">Increment</button>
    <AttributeBindings :alertClass="counter.count < 10 ? 'success' : 'error'" />
    <input type="text" :value="color" />
    <input type="color" @input="($event) => changeColor($event)" />
    <div>
      <button class="btn" @click="isVisibleTitle = !isVisibleTitle">
        {{ isVisibleTitle ? 'Скрыть тайтл' : 'Показать тайтл' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 50px;
  border-radius: 4px;
  box-shadow: 0 0 1px 1px #aaaaaa;
}
.btn {
  user-select: none;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 14px 2px;
  cursor: pointer;
}
.btn:hover {
  background-color: #45a049;
}
</style>
