function ExpenseItem(){
    return (
        <div>
         <h2> Expense Item</h2>
         <p>Food Rs 10</p>
         <p>Petrol Rs 100</p>
         <p>Movies Rs 200</p>
        </div>
         
    );
}
export default ExpenseItem;

//
import './ExpenseItem.css';
function ExpenseItem(){
    return (
        <div className="expense-item">
            <div> March 28th 2021 </div>
           <div className="expense-item__description"> 
            <h2> Car Insurance</h2>
         </div>
            <div className="expense-item__price"> $294.64</div>
        </div>
         
    );
}
export default ExpenseItem;
// 3
import './ExpenseItem.css';
function ExpenseItem(){
    const expenseDate =new Date(2021,2,28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.64;
    const LocationOfExpenditure='food';

    return (
        <div className="expense-item">
            <div> {expenseDate.toISOString()} </div>
           <div className="expense-item__description"> 
            <h2> {expenseTitle }</h2>
            </div>
             <div className="expense-item__price"> ${expenseAmount}
            </div>
            <div className="expense-item__price">
              <h2> {LocationOfExpenditure}</h2>
            </div>

        </div>
         
    );
}
export default ExpenseItem;
