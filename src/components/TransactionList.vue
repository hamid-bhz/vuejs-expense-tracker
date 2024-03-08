<script setup lang="ts">
import type { Transactions } from '@/types'

defineProps<{
  transactions: Transactions
}>()
</script>

<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      :class="transaction.amount > 0 ? 'plus' : 'minus'"
    >
      {{ transaction.text }}
      <span>{{ transaction.amount }}</span
      ><button class="delete-btn">x</button>
    </li>
  </ul>
</template>
