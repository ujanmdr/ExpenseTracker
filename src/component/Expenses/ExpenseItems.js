import React from "react";
import "../css/ExpenseItems.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card.js"


function ExpenseItems(props){
    
    return(
    <Card className="expense-item">
        <ExpenseDate date = {props.date} />
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">Rs {props.amount}</div>
        </div>
    </Card>
    );
}

export default ExpenseItems; 