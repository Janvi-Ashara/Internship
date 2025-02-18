
import { useState } from 'react';
import './App.css';

function App() {
const [count,setCount] = useState(0)
const [tasks,setTasks] = useState([])  //store tasks
const [newtask,setnewTask] = useState(''); //State to store current task input
const [setorder,setSortOrder] = useState('');
const [search, setSearch] = useState(''); // State for search input
const [color,setColor]=useState('yellow');

const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Grapes']; // List of items
const Increment = ()=>{
      setCount(count+1)
}
const Decrement=()=>{
      setCount(count-1)
}
const Addtask =()=>{
      if(newtask){
        setTasks([...tasks,newtask])
        setnewTask('');
      }
};

const handleSearch = (e) => {
  setSearch(e.target.value); // Update search state
};

const handlesort =(e) =>{
    const order=e.target.value;   // Get the selected value from dropdown
    setSortOrder(order)

      if (order === 'A to Z'){
        setTasks([...tasks].sort());
      }
      else if (order === 'Z to A') {
        setTasks([...tasks].sort().reverse());
      }

}

const changeColor=()=>{
  setColor((prevColor) => (prevColor === 'yellow' ? 'red' : 'yellow')); // Toggle between blue and green
}
  return (
    <>
    <center>
      <div style={{border:'2px solid black' ,height:'400px',width:'300px',marginTop:'20px' }}>

          <h1>Your Task List</h1>
          <input type='text' value={newtask} onChange={(e) => setnewTask(e.target.value)} placeholder='Enter Your Task...'/>
          <button onClick={Addtask}>Add</button>

          <select onChange={handlesort}>
            <option value="" disabled>Filter</option>
            <option value="A to Z">A-Z</option>
            <option value="Z to A">Z-A</option>
          </select>

          <div style={{border:'1px solid black',marginTop:'5px', overflowY: 'auto',height:'100px'}}>
         <ul style={{ padding: '10px' }}>
          {tasks.map((tasks,index)=>(
            <li key={index}>{tasks}</li>
          ))}
         </ul>
         </div>
         
          <h1 style={{marginTop:'10px'}}>Counter : {count}</h1>
          <button onClick={Increment}>Increment</button>
          <button onClick={Decrement}>Decrement</button>
      </div>
      <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {items
          .filter((item) => item.toLowerCase().includes(search.toLowerCase())) // Filter items based on search input
          .map((item, index) => (
            <li key={index}>{item}</li> // Display filtered items
          ))}
      </ul>
    </div>  
      </center>
      <div style={{height:'70px',width:'70px',border:'2px solid black ',backgroundColor: color, color: 'white', padding: '10px 20px', cursor: 'pointer'}}>
          1
      </div>
      <button onClick={changeColor}>Click me!!</button>
      
    </>
  );
}

export default App;
