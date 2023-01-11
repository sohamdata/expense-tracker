import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseData = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const showForm = () => {
        setIsEditing(true)
    }
    const cancelForm = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={showForm}>add new expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={cancelForm} />}
        </div>
    )
}

export default NewExpense

// <condition> && <render something>:
//      a trick in JS that renders the <render something> if <condition> is true.