// src/page/ToDoEdit.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ToDoEdit.css";

const ToDoEdit = () => {
  const { id } = useParams(); // Get the ID of the to-do list to edit
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([{ task: "" }]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the to-do list by ID (could be from an API)
    // Example with hardcoded data
    const fetchedToDo = { title: "May 20 - Tasks", tasks: ["Finish dashboard", "Start journaling UI"] };
    setTitle(fetchedToDo.title);
    setTasks(fetchedToDo.tasks.map(task => ({ task })));
  }, [id]);

  const handleTaskChange = (index, e) => {
    const newTasks = [...tasks];
    newTasks[index].task = e.target.value;
    setTasks(newTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Update the to-do list on the backend
    const updatedToDo = { title, tasks };
    console.log("To-Do Updated:", updatedToDo);

    // Redirect back to to-do overview
    navigate("/todos");
  };

  return (
    <div className="main-container">
      <h1 className="page-title">Edit To-Do List</h1>
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
                required
              />
            </div>
          ))}
        </div>
        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default ToDoEdit;
