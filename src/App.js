import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_DATA = [
  { id: 'e1', title: 'Mouse', amount: 56, date: new Date(2023, 0, 1) },
  { id: 'e2', title: 'Keyboard', amount: 26, date: new Date(2022, 4, 21) },
  { id: 'e3', title: 'Monitor', amount: 45, date: new Date(2020, 1, 12) },
  { id: 'e4', title: 'Mousepad', amount: 12, date: new Date(2021, 6, 11) },
  { id: 'e5', title: 'Chair', amount: 12, date: new Date(2022, 5, 7) },
];
function App() {
  const [data, setData] = useState(DUMMY_DATA)

  function addExpense(expense) {
    // setData()
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={DUMMY_DATA} />
    </div >
  );
}

export default App;
