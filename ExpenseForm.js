import React,{useState} from 'react';
import './ExpenseForm.css';
function ExpenseForm(){

    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');


    const titleChangeHandeler=(event)=>{
    setEnteredTitle(event.target.value);

        console.log('title changed');
    };
          
    const amountChangeHandler=event=>{
        setEnteredAmount(event.target.value)
        console.log(event.target.value);

    };
    const deleteChangeHndler=event=>{
    setEnteredDate(event.target.value);

    };
    return(
        <div className="container">
        <form className="'new-expense__controls">
            <div className='new-expense__control'>
                <label> Title</label>
                <input type='text' onChange={titleChangeHandeler}/>
            </div>
            <div className='new-expense__control'>
                <label> Amount</label>
                <input type='number' min="0.01" step="0.01"onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label> Date</label>
                <input type='date' min="2019-01-01" max="2022-02-31" onchange={deleteChangeHndler}/>
            </div>
            <div className="new-expense__actions">
               <h2><button type="submit" className="contain1"> Add Expense</button></h2>
            </div>
        </form>
        </div>
       

    );
}
export default ExpenseForm;