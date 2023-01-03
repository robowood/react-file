import React,{useState} from 'react';
import './ExpenseForm.css';
function ExpenseForm(props){

    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');
    const[enteredLocation,setEnteredLocation]=useState('');


    const titleChangeHandeler=(event)=>{
    setEnteredTitle(event.target.value);

        console.log('title changed');
    };
          
    const amountChangeHandler=event=>{
        setEnteredAmount(event.target.value)
        console.log("title");

    };
    const dateChangeHndler=event=>{
    setEnteredDate(event.target.value);
    };

    const locationChangeHndler=event=>{
        setEnteredLocation(event.target.value);
        };
    
    const submitHandeler=(event)=>{
        event.preventDefault();

        const expenseData={
       title:enteredTitle,
       amount:enteredAmount,
       date: new Date(enteredDate) ,
       location:enteredLocation

        };
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredLocation('');

    };

    
    return(
        <div className="container">
        <form className="'new-expense__controls" onSubmit={submitHandeler}>
            <div className='new-expense__control'>
                <label> Title</label>
                <input type='text' onChange={titleChangeHandeler}/>
            </div>
            <div className='new-expense__control'>
                <label> Amount</label>
                <input type='number' min="0.01" step="0.01"onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label> location</label>
                <input type='text' min="0.01" step="0.01"onChange={locationChangeHndler}/>
            </div>

            <div className="new-expense__control">
                <label> Date</label>
                <input type='date'  onchange={dateChangeHndler}/>
            </div>
            <div className="new-expense__actions">
               <h2><button type="submit" className="contain1"> Add Expense</button></h2>
            </div>
        </form>
        </div>
       

    );
}
export default ExpenseForm;