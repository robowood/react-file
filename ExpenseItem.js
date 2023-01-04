import React, {useState} from 'react';
import './ExpenseItem.css';



import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem=(props)=>{

    const [amount,setAmount]=useState(props.amount);
     const [title,setTitle]=useState(props.title);
    const [date,setDate]=useState(props.date);
     const [location,setLocation]=useState(props.location);



    function updateExpense(){
        setAmount('');
        setTitle('');
         setDate('');
         setLocation('');

        
    }

    return (
        <div className="contain">
        <div className="expense-item">
         <ExpenseDate date={date}></ExpenseDate>
         <ExpenseDetails title={title} amount={amount} location={location}></ExpenseDetails>
         <button onClick={updateExpense}> Delete Expense</button>
        </div> 
        </div>


  
         
           
         
    );
}
export default ExpenseItem;