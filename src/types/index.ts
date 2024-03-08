export type Transaction = {
  id: number
  text: string
  amount: number
}

export type Transactions = Transaction[]

export type Balance = { balance: number }

export type IncomeExpenses = { income: string; expenses: string }
