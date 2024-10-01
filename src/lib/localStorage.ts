import { ExpensesState } from "@/types/ExpenseTypes";

export const loadState = (): ExpensesState | undefined => {
  try {
    const serializedState = localStorage.getItem("expenses");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as ExpensesState;
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return undefined;
  }
};

export const saveState = (state: ExpensesState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("expenses", serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
};
