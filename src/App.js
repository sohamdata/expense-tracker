import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { id: 'e1', title: 'Mouse', amount: 56, date: new Date(2023, 0, 1) },
    { id: 'e2', title: 'Keyboard', amount: 26, date: new Date(2022, 4, 21) },
    { id: 'e3', title: 'Monitor', amount: 45, date: new Date(2020, 1, 12) },
    { id: 'e4', title: 'Mousepad', amount: 12, date: new Date(2021, 6, 11) },
    { id: 'e5', title: 'Chair', amount: 12, date: new Date(2022, 5, 7) },
  ];

  const addExpense = (expense) => {
    console.log("in app.js")
    console.log(expense)
  }
  return (

    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div >
  );
}

export default App;
