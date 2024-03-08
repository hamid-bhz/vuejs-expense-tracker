<script setup lang="ts">
import { ref } from 'vue'

import type { Transactions } from './types'

import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import Balance from './components/Balance.vue'
import Header from './components/Header.vue'

const transactions = ref<Transactions>([
  { id: 1, text: 'Flower', amount: -19.99 },
  { id: 2, text: 'Book', amount: 299 }
])
</script>

<template>
  <Header />

  <main class="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList :transactions="transactions" />
    <AddTransaction />
  </main>
</template>
