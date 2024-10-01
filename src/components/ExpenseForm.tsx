import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addExpense, updateExpense } from "../../redux/expenseSlice";
import { Button } from "@/components/ui/button"; // shadCN Button
import { ExpenseFormProps } from "../types/ExpenseTypes";

const expenseOption: [string, string] = ["Expense", "Income"];

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  editMode = false,
  transactionToEdit,
}) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [transactionType, setTransactionType] = useState<string>("Expense");
  const [amount, setAmount] = useState<number | "">(100);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  const [localEditMode, setLocalEditMode] = useState(editMode);

  useEffect(() => {
    setLocalEditMode(editMode);
    if (editMode && transactionToEdit) {
      setTitle(transactionToEdit.title);
      setDescription(transactionToEdit.description);
      setTransactionType(transactionToEdit.type);
      setAmount(transactionToEdit.amount);
      setDate(transactionToEdit.date);
    }
  }, [editMode, transactionToEdit]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Creating the expense object from state
    const expense = {
      id: localEditMode ? transactionToEdit!.id : Date.now().toString(),
      title,
      description,
      type: transactionType,
      amount: Number(amount),
      date,
    };

    if (localEditMode) {
      dispatch(updateExpense(expense));
    } else {
      dispatch(addExpense(expense));
    }
    resetForm();
  };

  // Function to reset the form fields
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setAmount(100);
    setDate(() => {
      const today = new Date();
      return today.toISOString().split("T")[0];
    });
    setLocalEditMode(false);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || !isNaN(Number(value))) {
      setAmount(value === "" ? "" : Number(value));
    }
  };

  const handleOptionChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionType(target.value);
  };

  return (
    <>
      <div className="max-w-[28rem] mx-auto bg-white px-8 md:px-16 py-8 md:py-10 rounded-lg shadow-2xl">
        <div className="text-center text-lg font-extrabold pb-2 text-green-600 md:text-3xl md:text-left">
          <h1 className="w-full md:w-[400px]">
            Track Your {transactionType === "Expense" ? "Expense" : "Income"}!
          </h1>
        </div>
        <div className="mx-auto">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="flex justify-center space-x-6">
              {expenseOption?.map((option, i) => {
                return (
                  <label
                    key={i}
                    className="flex items-center space-x-2 font-semibold pt-3"
                  >
                    <input
                      type="radio"
                      id={option}
                      name={option}
                      value={option}
                      checked={option === transactionType}
                      onChange={handleOptionChange}
                      className="form-radio"
                    />
                    <span>{option}</span>
                  </label>
                );
              })}
            </div>
            <label htmlFor="amount" className="text-md font-semibold">
              {transactionType === "Expense" ? "Expense" : "Income"} Amount
            </label>
            <input
              type="text"
              name="amount"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Amount"
              className="p-3 border rounded-md focus:outline-none focus:ring focus:ring-green-200"
              required
            />
            <label htmlFor="title" className="text-md font-semibold">
              {transactionType === "Expense" ? "Expense" : "Income"} Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Groceries"
              className="p-3 border rounded-md focus:outline-none focus:ring focus:ring-green-200"
              required
            />
            <label htmlFor="description" className="text-md font-semibold">
              {transactionType === "Expense" ? "Expense" : "Income"} Description
            </label>
            <textarea
              name="description"
              cols={20}
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Shopped for groceries..."
              className="p-3 border rounded-md focus:outline-none focus:ring focus:ring-green-200"
              required
            />
            <label htmlFor="date" className="text-md font-semibold">
              {transactionType === "Expense" ? "Expense" : "Income"} Date
            </label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-3 border rounded-md focus:outline-none focus:ring focus:ring-green-200 mb-6"
              required
            />
            <Button
              type="submit"
              className="bg-green-600 text-white text-lg py-3 hover:bg-green-700 transition-all"
            >
              {localEditMode && transactionToEdit?.type
                ? `Update ${
                    transactionType === "Expense" ? "Expense" : "Income"
                  }`
                : `Add ${transactionType === "Expense" ? "Expense" : "Income"}`}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ExpenseForm;
