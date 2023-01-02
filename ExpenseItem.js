import React, {useState} from 'react';
import './ExpenseItem.css';



import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem=(props)=>{

    const [amount,setAmount]=useState(props.amount);
    
    function DeleteExpense(){
        setAmount(100);
        
    }

    return (
        <div className="expense-item">
         <ExpenseDate date={props.date}></ExpenseDate>
         <ExpenseDetails title={props.title} amount={amount} location={props.location}></ExpenseDetails>
         <button onClick={DeleteExpense}> Delete Expense</button>
        </div> 


  
         
           
         
    );
}
export default ExpenseItem;