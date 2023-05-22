import React, {useState} from 'react';
import './App.css';
function App() {


  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    
    if (!newTask){
      alert("Enter a task.")
      return;
    }

    const task = {
      id: Math.floor(Math.random() * 1000),
      value: newTask
    };

    setTasks(oldList => [...oldList, task]);

    setNewTask("");


  }

  function deleteItem(id) {
    const newArray = tasks.filter(task => task.id !== id);
    setTasks(newArray);
  }
  return (
    <div className="App">
      <h1>My Todo Lists</h1>

      <input
        type='text' 
        placeholder='Add a task...'
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      /> 

      <button onClick={() => addTask()}>Add</button>

      <ul>
        {tasks.map(task =>{
          return(
            <li key={task.id}>{task.value}<button className='delete-button' onClick={()=> deleteItem(task.id)}>X</button></li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
