import ExpenseItems from "./ExpenseItems";
import ".//css/Expenses.css"

function Expenses(props){
    
    return(
        <div>
        <ExpenseItems title={props.items[0].title} amount={props.items[0].amount} date={props.items[0]} />
        <ExpenseItems title={props.items[1].title} amount={props.items[1].amount} date={props.items[1]} />
        <ExpenseItems title={props.items[2].title} amount={props.items[2].amount} date={props.items[2]} />
        <ExpenseItems title={props.items[3].title} amount={props.items[3].amount} date={props.items[3]} />
        </div>
    )
}

export default Expenses;