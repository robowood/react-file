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
