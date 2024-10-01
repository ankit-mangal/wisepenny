import { useState } from "react";

import TotalSavings from "@/components/TotalSavings";
import ExpenseForm from "@/components/ExpenseForm";
import ExpenseList from "@/components/ExpenseList";
import NavMenu from "@/components/ui/nav-menu";

import { Expense } from "@/types/ExpenseTypes";
import { handleEditExpense } from "@/lib/utils";

const Dashboard = () => {
  const [transactionToEdit, setTransactionToEdit] = useState<Expense | null>(
    null
  );

  const onEdit = (expense: Expense) => {
    handleEditExpense(expense, setTransactionToEdit);
  };

  return (
    <div>
      <NavMenu />
      <div className="h-screen font-montserrat flex flex-col md:flex-row gap-6 md:gap-44 items-center p-0 md:p-0">
        {/* ExpenseForm Container */}
        <div className="bg-slate-200 p-7 md:px-32 md:h-screen flex items-center w-full md:w-auto">
          <ExpenseForm
            editMode={!!transactionToEdit}
            transactionToEdit={transactionToEdit}
          />
        </div>

        {/* TotalSavings and ExpenseList */}
        <div className="flex flex-col h-auto md:h-screen w-full md:w-[29rem] space-y-2 md:space-y-0 pt-6 pb-6 md:pt-20">
          <TotalSavings />
          <ExpenseList onEdit={onEdit} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
