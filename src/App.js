import React from 'react';
import './App.css';
import ExpenseItems from '../src/component/ExpenseItems';

function App() {
  const expenses = [
    {
      id:'1',
      title:'ToiletPaper',
      amount:120,
      date: new Date(2021,12,13),
    },
    {
      id:'2',
      title:'Eraser',
      amount:10,
      date: new Date(2021,12,13),
    },
    {
      id:'3',
      title:'Paper',
      amount:50,
      date: new Date(2021,12,13),
    },
    {
      id:'4',
      title:'Pen',
      amount:100,
      date: new Date(2021,12,13),
    },
  ];

  return (
    <div className="App">
      <ExpenseItems title ={expenses[0].title} amount ={expenses[0].amount} date ={expenses[0].date} ></ExpenseItems> 
      <ExpenseItems title ={expenses[1].title} amount ={expenses[1].amount} date ={expenses[1].date} ></ExpenseItems> 
      <ExpenseItems title ={expenses[2].title} amount ={expenses[2].amount} date ={expenses[2].date} ></ExpenseItems> 
      <ExpenseItems title ={expenses[3].title} amount ={expenses[3].amount} date ={expenses[3].date} ></ExpenseItems> 
    </div>
  );
}

export default App;
