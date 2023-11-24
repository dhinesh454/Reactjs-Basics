import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {

  const expenses=[
    {id:1,title:'Car Insurance',amount:'$294.96',date:new Date()},
    {id:2,title:'Bike',amount:'$294.96',date:new Date()},
    {id:3,title:'MobilePhones',amount:'$294.96',date:new Date()},
    {id:4,title:'Movie',amount:'$294.96',date:new Date()},
  ];

  return (
    <div className="App">
    <h1>Expense Items</h1>

    <Expenses items={expenses}/>



      
     
    </div>
  );
}

export default App;
