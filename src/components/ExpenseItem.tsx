import { useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/expenseSlice";
import { Button } from "@/components/ui/button"; // shadCN Button
import { Expense } from "@/types/ExpenseTypes";

const ExpenseItem = ({
  expense,
  onEdit,
}: {
  expense: Expense;
  onEdit: (expense: Expense) => void;
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteExpense(expense.id));
  };

  const handleEdit = () => {
    // Call onEdit with the current expense
    onEdit(expense);
  };

  return (
    <div
      className={`w-full md:w-[464px] flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-7 py-5 rounded-md shadow-md border-l-8 ${
        expense.type === "Expense" ? "border-red-500" : "border-green-600"
      }`}
    >
      <div className="flex-grow">
        <h4 className="text-lg md:text-xl tracking-tighter font-semibold capitalize">
          {expense.title.length > 12
            ? expense.title.slice(0, 10).concat("...")
            : expense.title}
        </h4>
        <p className="text-sm font-semibold text-gray-700">
          INR {expense.amount}
        </p>
        <p className="text-sm text-gray-500">{expense.date}</p>
      </div>
      <div className="flex gap-2 mt-4 md:mt-0 md:pl-12">
        <Button
          onClick={handleEdit}
          className="bg-green-600 hover:bg-green-500 text-sm md:text-base"
        >
          Edit
        </Button>
        <Button
          onClick={handleDelete}
          variant="destructive"
          className="text-sm md:text-base"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ExpenseItem;
