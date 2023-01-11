import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_DATA = [
  { id: 'e1', title: 'Mouse', price: 56, date: new Date(2022, 0, 1) },
  { id: 'e2', title: 'Keyboard', price: 26, date: new Date(2021, 4, 21) },
  { id: 'e3', title: 'Monitor', price: 45, date: new Date(2020, 1, 12) },
  { id: 'e4', title: 'Mousepad', price: 12, date: new Date(2021, 6, 11) },
  { id: 'e5', title: 'Chair', price: 122, date: new Date(2010, 5, 7) },
  { id: 'e6', title: 'Car', price: 200, date: new Date(2022, 7, 7) },
];
function App() {
  const [data, setData] = useState(DUMMY_DATA)

  function addExpense(expense) {
    setData((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={data} />
    </div >
  );
}

export default App;
