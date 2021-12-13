import React from "react";
import ".//css/ExpenseItems.css"


function ExpenseItems(){
    const expenseDate = new Date (2021, 12, 13);
    const expenseTitle = ("Car Insurance");
    const expensePrice = 12000

    return(
    <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">Rs{expensePrice}</div>
        </div>
    </div>
    );
}

export default ExpenseItems; 