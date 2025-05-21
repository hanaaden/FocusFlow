// src/page/ToDoCreate.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ToDoCreate.css";

const ToDoCreate = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([{ task: "" }]);
  const navigate = useNavigate();

  const handleAddTask = () => {
    setTasks([...tasks, { task: "" }]);
  };

  const handleTaskChange = (index, e) => {
    const newTasks = [...tasks];
    newTasks[index].task = e.target.value;
    setTasks(newTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // You would normally send the data to your backend
    const newToDo = { title, tasks };
    console.log("To-Do Created:", newToDo);

    // Redirect to to-do overview or single to-do page
    navigate("/todos");
  };

  return (
    <div className="main-container">
      <h1 className="page-title">Create New To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tasks</label>
          {tasks.map((task, index) => (
            <div key={index}>
              <input
                type="text"
                value={task.task}
                onChange={(e) => handleTaskChange(index, e)}
                placeholder={`Task ${index + 1}`}
                required
              />
            </div>
          ))}
          <button type="button" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
        <button type="submit" className="save-btn">Save To-Do List</button>
      </form>
    </div>
  );
};

export default ToDoCreate;
