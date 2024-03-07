<script setup lang="ts">
import AddTransaction from './components/AddTransaction.vue'
import Balance from './components/Balance.vue'
import Header from './components/Header.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
</script>

<template>
  <Header />

  <main class="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
  </main>
</template>
