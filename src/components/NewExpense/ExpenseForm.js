import { useState } from "react"
import "./ExpenseForm.css"

function ExpenseForm(props) {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");

    // alternatively,
    // const [userInput, setUserInput] = useState({
    //     title: "", price: "", date: ""
    // })

    function addTitle(event) {
        setTitle(event.target.value)

        // in some cases, the below may result in wrong result, as it depends on the previous state
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // })

        // solution:
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         title: event.target.value
        //     }
        // })

    }
    function addPrice(event) {
        setPrice(event.target.value)
    }
    function addDate(event) {
        setDate(event.target.value)
    }

    function submitForm(event) {
        event.preventDefault()

        const expenseData = {
            title: title,
            price: price,
            date: new Date(date)
        }

        props.onSaveExpenseData(expenseData)

        console.log(expenseData)
        setTitle(''); setPrice(''); setDate('');
    }

    return (
        <form onSubmit={submitForm}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={addTitle}></input>
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01" value={price} onChange={addPrice}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={date} onChange={addDate}></input>
                </div>
            </div>
            <button type="submit" className="new-expense__actions">Add expense</button>
        </form>
    )
}

export default ExpenseForm;