import { useState } from 'react';
import './App.css';

function ListRender(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
  <li>{numbers}</li>
  );
  return (
  <ul>{listItems}</ul>
  );
 }

 function ListRenderUsingLoop(props) {
  const numbers = props.numbers;
  const listItems = [];
  for( let i = 0; i < numbers.length; i++){
    listItems.push(<li>{numbers[i]}</li>)
  }
  return (
  <ul>{listItems}</ul>
  );
 }

const nums = [1, 2, 8, 39]
const names = ["John", "Sara", "Smith"];

function App() {
  let v1 = 90;
  const [val, setVal] = useState(0);
  return (
    <div className="App">
      <ListRender numbers = {nums}/>
      <ListRender numbers = {names}/>
      <ListRenderUsingLoop numbers = {nums}/>
      <ListRenderUsingLoop numbers = {names}/>
      <Username/>
      <h1> Current Value {val}</h1>
      <button onClick={()=>setVal(val+1)}> Increment Value</button>
      <h1></h1>
      <button onClick={()=>setVal(val-1)}> Decrement Value</button>
      {/* Conditional Rendering - will not always display only if condition is met */}
      {val>=5 && <h3>Value is greater than or equal to 5</h3>}
      {val>10 && <h3>Value is greater than 10</h3>}
      {val>=10 && val<=15 && <h3>Value is between 10 and 15</h3>}
    </div>
  );
}
export default App;

function Username() {
  const [name, setName] = useState('');
  
  return (
    <div>
      <h1> Enter your name: </h1>
      <input 
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
     <button onClick={()=> alert('Weclcome ${name}')}> OK</button>
     {<h3> Welcome {name}</h3>}
     </div>
  );
}
