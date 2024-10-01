export interface Expense {
  id: string;
  title: string;
  description: string;
  type: string;
  amount: number;
  date: string;
}

export interface ExpensesState {
  expenses: Expense[];
}

export interface ExpenseFormProps {
  editMode?: boolean;
  transactionToEdit?: Expense | null;
}
