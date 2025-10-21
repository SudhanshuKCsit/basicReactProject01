import ExpenseItem from "./ExpenseItem";
import React, { Fragment } from "react";
import "./Expenses.css";
const Expenses = () => {
  const expenses = [
    {
      id: "1",
      date: new Date(2023, 8, 17),
      title: "Insurance",
      price: 9,
      location: "Bangalore",
    },
    {
      id: "2",
      date: new Date(2022, 9, 18),
      title: "Book",
      price: 99,
      location: "Delhi",
    },
    {
      id: "1",
      date: new Date(2021, 10, 19),
      title: "laptop",
      price: 999,
      location: "Mumbai",
    },
  ];

  return (
    <Fragment>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
            location={expense.location}
          />
        );
      })}
      ;
    </Fragment>
  );
};

export default Expenses;
