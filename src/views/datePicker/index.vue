<template>
  <div class="date-picker">
    <el-date-picker v-model="value" type="datetime"></el-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('');
</script>

<style lang="scss" scoped></style>
