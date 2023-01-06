import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import Card from '../UI/Card';

function Expenses(props) {

    const [year, setYear] = useState('2020')
    const filterChange = (selectedYear) => {
        setYear(selectedYear)
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selectedYear={year} onFilterChange={filterChange} />
                {props.items.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                ))}
            </Card>
        </div>
    )
}

export default Expenses;