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
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    })
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selectedYear={year} onFilterChange={filterChange} />
                {filteredExpenses.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} price={expense.price} date={expense.date} />
                ))}
            </Card>
        </div>
    )
}

export default Expenses;