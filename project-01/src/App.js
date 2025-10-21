import React, { Fragment } from "react";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  /*return (
    <Fragment>
      <ExpenseItem/>
    </Fragment>
    
    <Fragment>
      <h1>Let's get Started</h1>
      <ExpenseItem
        date={new Date(2023, 7, 15)}
        title="Insurance"
        price="50"
        location="Bangalore"
      ></ExpenseItem>

      <ExpenseItem
        date={new Date(2023, 12, 12)}
        title="Book"
        price="75"
        location="Delhi"
      ></ExpenseItem>

      <ExpenseItem
        date={new Date(2023, 8, 25)}
        title="Mobile"
        price="20000"
        location="Hyderabad"
      ></ExpenseItem>

      <ExpenseItem
        date ={new Date(2023, 9, 5)}
        title="Laptop"
        price="50000"
        location="Mumbai"
      ></ExpenseItem>
    </Fragment>
  );*/

  const expenses = [
    {
      id: "1",
      date: new Date(2023, 7, 24),
      title: "Insurance",
      price: "100",
      location: "Bangalore",
    },
    {
      id: "2",
      date: new Date(2023, 8, 14),
      title: "Book",
      price: "75",
      location: "Delhi",
    },
    {
      id: "3",
      date: new Date(2022, 5, 4),
      title: "Pen",
      price: "775",
      location: "Hyderabad",
    },
    {
      id: "4",
      date: new Date(2021, 7, 24),
      title: "Laptopp",
      price: "99999",
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

      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
          location={expense.location}
        />
      ))}
    </Fragment>
  );
}

export default App;
