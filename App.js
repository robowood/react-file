import React ,{useState} from 'react';
import ExpenseForm from './Components/Expenses/ExpenseForm';
import './App.css';

import Expenses from './Components/Expenses/Expenses';
const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: 'food'
  },
  { id: 'e2', 
      title: 'New TV',
    amount: 799.49, 
    date: new Date(2021, 2, 12),
    location: 'petrol'
   },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: 'grocery'
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    location:'movie '
  },
];

const App=() =>{

        const [expenses,setExpensesData]=useState(DUMMY_EXPENSE);
     
       const saveExpenseDataHandeler=(enteredExpenseData)=>{
           const expense={
              ...enteredExpenseData,
              id:Math.random().toString()
           }
           //const updatedExpense=[expense,...expenses]
           setExpensesData((prevExpense)=>{
            return[expense,...prevExpense];
           });
           console.log(updatedExpense);

       };
     

  return (
    <div>
         
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandeler}></ExpenseForm>
      <Expenses expenses={expenses}/>
      
      

     


      


    </div>
  );
}

export default App;
