// // // src/page/ToDoEdit.jsx
// // import React, { useState, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import "./ToDoEdit.css";

// // const ToDoEdit = () => {
// //   const { id } = useParams(); // Get the ID of the to-do list to edit
// //   const [title, setTitle] = useState("");
// //   const [tasks, setTasks] = useState([{ task: "" }]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Fetch the to-do list by ID (could be from an API)
// //     // Example with hardcoded data
// //     const fetchedToDo = { title: "May 20 - Tasks", tasks: ["Finish dashboard", "Start journaling UI"] };
// //     setTitle(fetchedToDo.title);
// //     setTasks(fetchedToDo.tasks.map(task => ({ task })));
// //   }, [id]);

// //   const handleTaskChange = (index, e) => {
// //     const newTasks = [...tasks];
// //     newTasks[index].task = e.target.value;
// //     setTasks(newTasks);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     // Update the to-do list on the backend
// //     const updatedToDo = { title, tasks };
// //     console.log("To-Do Updated:", updatedToDo);

// //     // Redirect back to to-do overview
// //     navigate("/todos");
// //   };

// //   return (
// //     <div className="main-container">
// //       <h1 className="page-title">Edit To-Do List</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Title</label>
// //           <input
// //             type="text"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Tasks</label>
// //           {tasks.map((task, index) => (
// //             <div key={index}>
// //               <input
// //                 type="text"
// //                 value={task.task}
// //                 onChange={(e) => handleTaskChange(index, e)}
// //                 required
// //               />
// //             </div>
// //           ))}
// //         </div>
// //         <button type="submit" className="save-btn">Save Changes</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ToDoEdit;









// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const ToDoEdit = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const api = "http://localhost:5000";
//   const [todo, setTodo] = useState(null);
//   const [title, setTitle] = useState("");
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${api}/todos/${id}`, { withCredentials: true })
//       .then((res) => {
//         setTodo(res.data);
//         setTitle(res.data.title);
//         setTasks(res.data.tasks);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch todo:", err);
//       });
//   }, [id]);

//   const handleTaskChange = (index, newValue) => {
//     const updated = tasks.map((task, i) =>
//       i === index ? { ...task, task: newValue } : task
//     );
//     setTasks(updated);
//   };

//   const handleUpdate = () => {
//     axios
//       .put(
//         `${api}/todos/${id}`,
//         { title, tasks },
//         { withCredentials: true }
//       )
//       .then(() => navigate("/"))
//       .catch((err) => console.error("Update failed:", err));
//   };

//   const handleDelete = () => {
//     axios
//       .delete(`${api}/todos/${id}`, { withCredentials: true })
//       .then(() => navigate("/"))
//       .catch((err) => console.error("Delete failed:", err));
//   };

//   if (!todo) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: "20px", color: "#fff" }}>
//       <h2>Edit To-Do</h2>
//       <label style={{ display: "block", marginBottom: "10px" }}>
//         Title:
//         <input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           style={{ width: "100%", padding: "8px", marginTop: "5px" }}
//         />
//       </label>

//       <h4>Tasks:</h4>
//       {tasks?.map((task, i) => (
//         <input
//           key={i}
//           value={task.task}
//           onChange={(e) => handleTaskChange(i, e.target.value)}
//           style={{
//             width: "100%",
//             marginBottom: "10px",
//             padding: "6px",
//             backgroundColor: "#222",
//             color: "#fff",
//             border: "1px solid #555",
//           }}
//         />
//       ))}

//       <div style={{ marginTop: "20px" }}>
//         <button
//           onClick={handleUpdate}
//           style={{
//             marginRight: "10px",
//             padding: "10px 20px",
//             background: "#4CAF50",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           Update
//         </button>

//         <button
//           onClick={handleDelete}
//           style={{
//             padding: "10px 20px",
//             background: "#f44336",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ToDoEdit;











// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import "./ToDoEdit.css"; // import your CSS
// import Header from "./Header";
// import Sidebar from "./sidebar";

// const ToDoEdit = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [todo, setTodo] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/todos/${id}`, { withCredentials: true })
//       .then((res) => setTodo(res.data))
//       .catch((err) => console.error("Failed to fetch:", err));
//   }, [id]);

//   const handleTaskChange = (index, newTask) => {
//     const updated = [...todo.tasks];
//     updated[index].task = newTask;
//     setTodo({ ...todo, tasks: updated });
//   };

//   const handleUpdate = () => {
//     axios.put(`http://localhost:5000/todos/${id}`, todo, { withCredentials: true })
//       .then(() => navigate("/todo"))
//       .catch((err) => console.error("Update failed:", err));
//   };

//   const handleDelete = () => {
//     axios.delete(`http://localhost:5000/todos/${id}`, { withCredentials: true })
//       .then(() => navigate("/todo"))
//       .catch((err) => console.error("Delete failed:", err));
//   };

//   if (!todo) return <div>Loading...</div>;

//   return (

  
//     <div className="layout">
//       <Sidebar />
//       <div className="main-container">
//         <Header/>
//         <div className="edit-todo-container">
//       <h2>Edit To-Do: {todo.title}</h2>

//       {todo?.tasks?.map((task, index) => (
//         <input
//           key={index}
//           type="text"
//           className="edit-task-input"
//           value={task.task}
//           onChange={(e) => handleTaskChange(index, e.target.value)}
//         />
//       ))}

//       <div className="edit-buttons">
//         <button className="update-btn" onClick={handleUpdate}>
//           Update
//         </button>
//         <button className="delete-btn" onClick={handleDelete}>
//           Delete
//         </button>
//       </div>
//     </div>
//       </div>
//     </div>
//   );
// };

// export default ToDoEdit;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./ToDoEdit.css";
import Header from "./Header";
import Sidebar from "./sidebar";

const ToDoEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/todos/${id}`, { withCredentials: true })
      .then((res) => {
        setTodo(res.data);
        setTitle(res.data.title);
      })
      .catch((err) => console.error("Failed to fetch:", err));
  }, [id]);

  const handleTaskChange = (index, newTask) => {
    const updatedTasks = [...todo.tasks];
    updatedTasks[index].task = newTask;
    setTodo({ ...todo, tasks: updatedTasks });
  };

  const handleTaskToggle = (index) => {
    const updatedTasks = [...todo.tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTodo({ ...todo, tasks: updatedTasks });
  };

  const handleAddTask = () => {
    const updatedTasks = [...(todo.tasks || []), { task: "", completed: false }];
    setTodo({ ...todo, tasks: updatedTasks });
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = todo.tasks.filter((_, i) => i !== index);
    setTodo({ ...todo, tasks: updatedTasks });
  };

  const handleUpdate = () => {
    const updatedTodo = { ...todo, title };
    axios
      .put(`http://localhost:5000/todos/${id}`, updatedTodo, { withCredentials: true })
      .then(() => navigate("/todo"))
      .catch((err) => console.error("Update failed:", err));
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/todos/${id}`, { withCredentials: true })
      .then(() => navigate("/todo"))
      .catch((err) => console.error("Delete failed:", err));
  };

  if (!todo) return <div>Loading...</div>;

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-container edit">
        <Header />
        <div className="edit-todo-container">
          <h2>Edit To-Do</h2>
          <input
            type="text"
            className="edit-title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="To-do title"
          />

          <div className="tasks-list">
            {todo.tasks.length === 0 && <p style={{ color: "#888", fontStyle: "italic" }}>No tasks yet. Add one!</p>}
            {todo.tasks.map((task, index) => (
              <div key={index} className="task-row">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleTaskToggle(index)}
                  className="task-checkbox"
                />
                <input
                  type="text"
                  value={task.task}
                  onChange={(e) => handleTaskChange(index, e.target.value)}
                  className={`edit-task-input ${task.completed ? "completed" : ""}`}
                  placeholder="Task description"
                />
                <button className="delete-task-btn" onClick={() => handleDeleteTask(index)} aria-label="Delete task">
                  &times;
                </button>
              </div>
            ))}
          </div>

          <button className="add-task-btn" onClick={handleAddTask}>
            + Add Task
          </button>

          <div className="edit-buttons">
            <button className="update-btn" onClick={handleUpdate}>
              Update
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              Delete To-Do
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoEdit;
