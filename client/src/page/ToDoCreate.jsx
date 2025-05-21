// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ToDoCreate.css";

// const ToDoCreate = () => {
//   const [title, setTitle] = useState("");
//   const [tasks, setTasks] = useState([{ task: "" }]);
//   const navigate = useNavigate();

//   const handleAddTask = () => {
//     setTasks([...tasks, { task: "" }]);
//   };

//   const handleTaskChange = (index, e) => {
//     const newTasks = [...tasks];
//     newTasks[index].task = e.target.value;
//     setTasks(newTasks);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // You would normally send the data to your backend
//     const newToDo = { title, tasks };
//     console.log("To-Do Created:", newToDo);

//     // Redirect to to-do overview or single to-do page
//     navigate("/todos");
//   };

//   return (
//     <div className="main-container">
//       <h1 className="page-title">Create New To-Do List</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Tasks</label>
//           {tasks.map((task, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 value={task.task}
//                 onChange={(e) => handleTaskChange(index, e)}
//                 placeholder={`Task ${index + 1}`}
//                 required
//               />
//             </div>
//           ))}
//           <button type="button" onClick={handleAddTask}>
//             Add Task
//           </button>
//         </div>
//         <button type="submit" className="save-btn">Save To-Do List</button>
//       </form>
//     </div>
//   );
// };

// export default ToDoCreate;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./ToDoCreate.css";

// const ToDoCreate = () => {
//   const [title, setTitle] = useState("");
//   const [tasks, setTasks] = useState([{ task: "" }]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();
//   const api = "http://localhost:5000"; // Your backend URL

//   const handleAddTask = () => {
//     setTasks([...tasks, { task: "" }]);
//   };

//   const handleTaskChange = (index, e) => {
//     const newTasks = [...tasks];
//     newTasks[index].task = e.target.value;
//     setTasks(newTasks);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setError(null);

//     try {
//       // Send POST request to backend
//       const response = await axios.post(
//         `${api}/todos`,
//         { title, tasks },
//         {
          
//           withCredentials: true, // If cookies/session used
//         }
//       );

//       console.log("To-Do Created:", response.data);
//       setLoading(false);

//       // Redirect to to-do overview or the detail page of the new to-do
//       navigate("/todos");
//     } catch (err) {
//       console.error("Failed to create to-do:", err);
//       setError("Failed to create to-do. Please try again.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="main-container">
//       <h1 className="page-title">Create New To-Do List</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Tasks</label>
//           {tasks.map((task, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 value={task.task}
//                 onChange={(e) => handleTaskChange(index, e)}
//                 placeholder={`Task ${index + 1}`}
               
//               />
//             </div>
//           ))}
//           <button type="button" onClick={handleAddTask}>
//             Add Task
//           </button>
//         </div>

//         {error && <p style={{ color: "red" }}>{error}</p>}

//         <button type="submit" className="save-btn" disabled={loading}>
//           {loading ? "Saving..." : "Save To-Do List"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ToDoCreate;

















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./ToDoCreate.css";

// const ToDoCreate = () => {
//   const [title, setTitle] = useState("");
//   const [tasks, setTasks] = useState([{ task: "" }]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();
//   const api = "http://localhost:5000"; // Replace with env in production

//   const handleAddTask = () => {
//     setTasks([...tasks, { task: "" }]);
//   };

//   const handleTaskChange = (index, e) => {
//     const newTasks = [...tasks];
//     newTasks[index].task = e.target.value;
//     setTasks(newTasks);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     // Remove empty tasks
//     const filteredTasks = tasks.filter((t) => t.task.trim() !== "");

//     if (!title.trim() || filteredTasks.length === 0) {
//       setError("Title and at least one valid task are required.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${api}/todos`,
//         { title, tasks: filteredTasks },
//         { withCredentials: true }
//       );

//       console.log("To-Do Created:", response.data);
//       navigate("/todos");
//     } catch (err) {
//       console.error("Failed to create to-do:", err);
//       setError("Failed to create to-do. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="main-container">
//       <h1 className="page-title">Create New To-Do List</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Title</label>
//           <input
//             id="title"
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Tasks</label>
//           {tasks.map((task, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 value={task.task}
//                 onChange={(e) => handleTaskChange(index, e)}
//                 placeholder={`Task ${index + 1}`}
//                 required={index === 0} // Require at least the first one
//               />
//             </div>
//           ))}
//           <button type="button" onClick={handleAddTask}>
//             Add Task
//           </button>
//         </div>

//         {error && <p style={{ color: "red" }}>{error}</p>}

//         <button type="submit" className="save-btn" disabled={loading}>
//           {loading ? "Saving..." : "Save To-Do List"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ToDoCreate;


















import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ToDoCreate.css";

const ToDoCreate = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([{ task: "" }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const api = "http://localhost:5000";

  const handleAddTask = () => {
    setTasks([...tasks, { task: "" }]);
  };

  const handleTaskChange = (index, e) => {
    const newTasks = [...tasks];
    newTasks[index].task = e.target.value;
    setTasks(newTasks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const filteredTasks = tasks.filter((t) => t.task.trim() !== "");

    if (!title.trim() || filteredTasks.length === 0) {
      setError("Title and at least one valid task are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${api}/todos`,
        { title, tasks: filteredTasks },
        { withCredentials: true }
      );

      console.log("To-Do Created:", response.data);
      navigate("/todos");
    } catch (err) {
      console.error("Failed to create to-do:", err);
      setError("Failed to create to-do. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container todo-create-container">
      <h1 className="page-title">Create New To-Do List</h1>
      <form className="todo-create-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            id="title"
            className="form-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter to-do title"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Tasks</label>
          {tasks.map((task, index) => (
            <div key={index} className="task-input-wrapper">
              <input
                type="text"
                className="form-input task-input"
                value={task.task}
                onChange={(e) => handleTaskChange(index, e)}
                placeholder={`Task ${index + 1}`}
                required={index === 0}
              />
            </div>
          ))}
          <button
            type="button"
            className="btn-add-task"
            onClick={handleAddTask}
            disabled={loading}
          >
            + Add Task
          </button>
        </div>

        {error && <p className="form-error">{error}</p>}

        <button
          type="submit"
          className="save-btn"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save To-Do List"}
        </button>
      </form>
    </div>
  );
};

export default ToDoCreate;
