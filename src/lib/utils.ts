import { Expense } from "@/types/ExpenseTypes";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleEditExpense = (
  expense: Expense,
  setTransactionToEdit: React.Dispatch<React.SetStateAction<Expense | null>>
) => {
  console.log(expense);
  setTransactionToEdit(expense); // Set the expense to edit
};
