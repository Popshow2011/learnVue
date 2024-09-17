<script setup lang="ts">
const emit = defineEmits(['eventComponent'])
const props = defineProps({
  propStyle: String,
  msg: String
})
</script>
<template>
  <div class="header" :style="props.propStyle" @click="(event) => emit('eventComponent', event)">
    {{ props.msg }}
  </div>
</template>
<style lang="css" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 2rem;
  font-weight: 700;
}
</style>
