<script setup lang="ts">
import type { IncomeExpenses } from '@/types'

defineProps<IncomeExpenses>()
</script>

<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+${{ income }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">-${{ expenses }}</p>
    </div>
  </div>
</template>
