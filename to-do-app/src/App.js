import React,{useState,useEffect} from 'react';
import './App.css';
import {AiOutlineDelete} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs'


function App() {
  const[todo,completed]=useState(false);
  const[allTodos,setTodos]=useState([]);
  const[newTitle,setNewTitle]=useState("");
  const[newDescription,setNewDescription]=useState("");

  const handleAddTodo=()=>{
    let newTodoItem={
      title: newTitle,
      descripton: newDescription
    };

    let updatedTodoArr=[...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist',JSON.stringify (updatedTodoArr))
  };

  const handleDeleteTod=(index)=>{
    let reducedTodo=[...allTodos];
    reducedTodo.splice(index);
    localStorage.setItem('todolist'.JAON.stringify(updatedTodoArr));
    setTodos(reducedTodo);
  }

  useEffect(()=>{
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if(savedTodo){
      setTodos(savedTodo);
    }

  },[])
  return (
    <div className="To-Do-App">
      <h1>What is your plan today?</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="What is task title?" />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="What is task description?" />
          </div>
          <div className="todo-input-item">
            <button type="button" className="primaryBtn" onClick={handleAddTodo()}>Add</button>
          </div>
        </div>

        <div className="btn-area">
          <button className={`secondaryBtn ${todo === false && 'active'}`} onClick={()=>completed(false)}>Todo</button>
          <button className={`secondaryBtn ${todo === true && 'active'}`} onClick={()=>completed(true)}>Completed</button>
        </div>

        <div className="todo-list">
          
          {allTodos.map((item,index)=>{return(
            <div className="todo-list-item" key={index}>
            <div><h3>{item.title}</h3>
            <p>{item.descripton}</p>
            </div>
            <div>
            <AiOutlineDelete className="icon" title="Delete?" onClick={()=>handleDeleteTod(index)}/>
            <BsCheckLg className="check-icon" title="Completed?"/>
          </div>
          </div>
          )
          })}

         
        </div>
      </div>
    </div>
  );
}

export default App;
