import React,{useState} from 'react';
import './App.css';

function App() {
  const[todo,completed]=useState(false);
  return (
    <div className="To-Do-App">
      <h1>What is your plan today?</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" placeholder="What is task title?" />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" placeholder="What is task description?" />
          </div>
          <div className="todo-input-item">
            <button type="button" className="primaryBtn">Add</button>
          </div>
        </div>

        <div className="btn-area">
          <button className={`secondaryBtn ${todo === false && 'active'}`} onClick={()=>completed(false)}>Todo</button>
          <button className={`secondaryBtn ${todo === true && 'active'}`} onClick={()=>completed(true)}>Completed</button>
        </div>

        <div className="todo-list">
          <div className="todo-list-item">
            <h1>Task 1</h1>
            <p>Description</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
