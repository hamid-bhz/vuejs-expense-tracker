<script setup lang="ts">
import { computed, ref } from 'vue'

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

const total = computed(() =>
  transactions.value.reduce((acc, transaction) => acc + transaction.amount, 0)
)

const income = computed(() =>
  transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2)
)

const expenses = computed(() =>
  transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2)
)
</script>

<template>
  <Header />

  <main class="container">
    <Balance :balance="total" />
    <IncomeExpenses :income="+income" :expenses="+expenses" />
    <TransactionList :transactions="transactions" />
    <AddTransaction />
  </main>
</template>
