import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import Card from '../UI/Card';

function Expenses(props) {
    const filterChange = (selectedYear) => {
        console.log(selectedYear)
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onFilterChange={filterChange} />
                {props.items.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                ))}
            </Card>
        </div>
    )
}

export default Expenses;