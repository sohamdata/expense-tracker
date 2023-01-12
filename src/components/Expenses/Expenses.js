import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {

    const [year, setYear] = useState('2020')
    const filterChange = (selectedYear) => {
        setYear(selectedYear)
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    })

    let result = <h2 style={{ textAlign: 'center' }}>no expenses this year.<br /> no to inflation.</h2>
    if (filteredExpenses.length) {
        result = filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} price={expense.price} date={expense.date} />
        ))
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selectedYear={year} onFilterChange={filterChange} />
                <ExpensesChart expenses={filteredExpenses} />
                {result}
            </Card>
        </div>
    )
}

export default Expenses;