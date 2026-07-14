<template>
  <i
    v-if="icon && icon.includes('el-icon')"
    class="sub-el-icon"
    :class="icon"
  ></i>
  <svg-icon v-else :icon="icon"></svg-icon>
  <span>{{ title }}</span>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    require: true
  },
  icon: {
    type: String,
    require: true
  }
})
</script>

<style lang="scss" scoped></style>
