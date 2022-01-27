import React from 'react';
import './App.css';
import Expenses from "./component/Expenses/Expenses";


function App() {
  const expenses = [
    {
      id:'1',
      title:'ToiletPaper',
      amount:120,
      date: new Date(2021, 12, 3),
    },
    {
      id:'2',
      title:'Eraser',
      amount:10,
      date: new Date(2021, 12, 13),
    },
    {
      id:'3',
      title:'Paper',
      amount:50,
      date: new Date(2021, 12, 13),
    },
    {
      id:'4',
      title:'Pen',
      amount:100,
      date: new Date(2021, 12, 13),
    },
  ];

  return (
    <div className="App">
      <Expenses items ={expenses} />
    </div>
  );
}

export default App;
