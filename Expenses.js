import React,{useState} from 'react';
 import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
function Expenses(props){
    const [filteredYear,setFilterYear]=useState('2020');
    const filterChangeHandeler=selectedYear=>{
        console.log('Expenses.js');
        console.log(selectedYear);

 const filteredExpenses = props.items.filter(expense => {
 return expense.date.getFullYear().toString() === filteredYear;
          }); 
        
    };
    return(
        <div>
            <div>
            <ExpenseFilter selected={filteredYear} 
             onChangeFilter={filterChangeHandeler}/>
             </div>
         
         {filteredExpenses.length ===0 && <p> no expense is found</p>}  
         {filteredExpense.length ===1 && <p> Only single Expense here. Please add more...</p>}
       {filteredExpenses.length > 0 &&
       filteredExpenses.map((expense)=>( 
    <ExpenseItem
      key={expense.id}
       title={expense.title} 
       amount={expense.amount} 
      date={expense.date}
      location={expense.location}/> ) )}
</div>
    );}
export default Expenses;

    

