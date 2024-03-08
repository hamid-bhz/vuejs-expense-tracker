<script setup lang="ts">
import type { Balance } from '@/types'

defineProps<Balance>()
</script>

<template>
  <h4>Your Balance</h4>
  <h1 id="balance">${{ balance }}</h1>
</template>
