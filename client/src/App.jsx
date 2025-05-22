// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Auth Pages
import WelcomePage from "./page/WelcomePage";
import SignUpPage from "./page/SignUpPage";
import SignInPage from "./page/SignInPage";

// Main Pages
import Dashboard from "./page/Dashboard";
import Profile from "./page/Profile";

// Journal Pages
import JournalList from "./page/JournalList";
import JournalEntry from "./page/JournalEntry";
import JournalCreate from "./page/JournalCreate";
import JournalEdit from "./page/JournalEdit";


// To-Do Pages
import ToDoOverview from "./page/ToDoOverview";
import ToDoList from "./page/ToDoList";
import ToDoCreate from "./page/ToDoCreate";
import ToDoEdit from "./page/ToDoEdit";
import ProtectedRoute from "./page/ProtectedRoute";



// protected routes

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 🟣 Auth */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />



        {/* 🟡 Dashboard */}
        <Route path="/dashboard" element={  <ProtectedRoute ><Dashboard /> </ProtectedRoute>} />

        {/* 🟢 Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* 📓 Journal */}
        <Route path="/journals" element={<ProtectedRoute ><JournalList /> </ProtectedRoute>
          } />
        <Route path="/journal/:id" element={ <ProtectedRoute><JournalEntry /> </ProtectedRoute>} />
        <Route path="/journal/create" element={ <ProtectedRoute> <JournalCreate /> </ProtectedRoute>} />
        <Route path="/journal/edit/:id" element={ <ProtectedRoute> <JournalEdit /> </ProtectedRoute>} />

        {/* 📋 To-Do */}
        <Route path="/todos/:id" element={ <ProtectedRoute> <ToDoOverview /> </ProtectedRoute>} />
        <Route path="/todo" element={ <ProtectedRoute> <ToDoList /> </ProtectedRoute>} />
        <Route path="/todo/create" element={ <ProtectedRoute> <ToDoCreate /> </ProtectedRoute>} />
        <Route path="/todo/edit/:id" element={ <ProtectedRoute> <ToDoEdit /> </ProtectedRoute>} />

       
      </Routes>
    </Router>
  );
};

export default App;
