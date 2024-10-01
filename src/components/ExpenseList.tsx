import { useSelector } from "react-redux";
import ExpenseItem from "./ExpenseItem";
import { RootState } from "../../redux/store";
import { Expense } from "@/types/ExpenseTypes";

const ExpenseList = ({ onEdit }: { onEdit: (expense: Expense) => void }) => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);

  return (
    <div className="space-y-4 overflow-y-auto h-[32rem] custom-scrollbar px-4 md:px-0 w-full md:w-[30rem]">
      {expenses.length > 0 ? (
        expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} onEdit={onEdit} />
        ))
      ) : (
        <p className="border-4 w-full border-dashed border-gray-400 text-center h-24 pt-8 bg-gray-200 font-medium">
          No expense/income added yet.
        </p>
      )}
    </div>
  );
};

export default ExpenseList;
