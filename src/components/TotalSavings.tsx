import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const TotalExpenses = () => {
  const total = useSelector((state: RootState) => {
    const finalSettlement = state.expenses.expenses.reduce((acc, expense) => {
      return expense.type === "Income"
        ? acc + expense.amount // Add if income
        : acc - expense.amount; // Subtract if expense
    }, 0);
    return finalSettlement;
  });

  const hasTransactions = useSelector(
    (state: RootState) => state.expenses.expenses.length > 0
  );

  return (
    <div className="py-1s text-2xl font-bold text-center md:text-left md:pb-5">
      {hasTransactions ? (
        <>
          Total Savings:{" "}
          <span
            className={
              total <= 0 ? "text-red-500" : total > 0 ? "text-green-500" : ""
            }
          >
            {total === 0 ? `-0` : total > 0 ? `+${total}` : `${total}`}
          </span>{" "}
          INR
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default TotalExpenses;
