import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState, saveState } from "../src/lib/localStorage"; // import the localStorage utilities
import { Expense, ExpensesState } from "../src/types/ExpenseTypes";

const initialState: ExpensesState = {
  expenses: loadState()?.expenses || [], // Load from localStorage or use empty array
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
      saveState({ expenses: state.expenses }); // Save updated state to localStorage
    },
    deleteExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      saveState({ expenses: state.expenses }); // Save updated state to localStorage
    },
    updateExpense: (state, action: PayloadAction<Expense>) => {
      const index = state.expenses.findIndex(
        (exp) => exp.id === action.payload.id
      );
      if (index !== -1) {
        state.expenses[index] = action.payload;
        saveState({ expenses: state.expenses }); // Save updated state to localStorage
      }
    },
  },
});

export const { addExpense, deleteExpense, updateExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
