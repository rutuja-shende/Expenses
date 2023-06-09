import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';


function Expenses (props) {

    const [filteredYear,setFilteredYear] = useState('2020');
    
    const changeYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    };

    return (
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeDropdownValue={changeYearHandler}/>
            <ExpenseItem Title={props.expenses[0].title} Amount={props.expenses[0].amount} Date={props.expenses[0].date}></ExpenseItem>
            <ExpenseItem Title={props.expenses[1].title} Amount={props.expenses[1].amount} Date={props.expenses[1].date}></ExpenseItem>
            <ExpenseItem Title={props.expenses[2].title} Amount={props.expenses[2].amount} Date={props.expenses[2].date}></ExpenseItem>
            <ExpenseItem Title={props.expenses[3].title} Amount={props.expenses[3].amount} Date={props.expenses[3].date}></ExpenseItem>
        </Card>
        </div>
    )
}
 export default Expenses;