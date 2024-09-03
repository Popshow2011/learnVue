<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { type AlertType } from './types'
const props = defineProps({ alertClass: String as PropType<AlertType> })
</script>

<template>
  <div class="alert" :class="props.alertClass && props.alertClass">Alert</div>
</template>

<style scoped>
.error {
  color: red;
}
.success {
  color: green;
}
</style>
