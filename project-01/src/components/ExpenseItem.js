import "./ExpenseItem.css";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ExpenseItem = (props) => {
  /**const expenseDate = new Date(2023,7,12).toISOString();
    const expenseLocation = "Bangalore";
    const expenseTitle = "Insurance";
    const expenseAmount = 50;
    return (
        <div className="expense-item">
            <div>{expenseDate}</div>
            <div className="expense-item__location">{expenseLocation}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    );*/

    const month = months[props.date.getMonth()];
    const year = props.date.getFullYear();
    const date = props.date.getDate();
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{date}</div>
      </div>
      <div className="expense-item__location">{props.location}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
