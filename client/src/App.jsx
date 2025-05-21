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

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 🟣 Auth */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />

        {/* 🟡 Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 🟢 Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* 📓 Journal */}
        <Route path="/journals" element={<JournalList />} />
        <Route path="/journal/:id" element={<JournalEntry />} />
        <Route path="/journal/create" element={<JournalCreate />} />
        <Route path="/journal/edit/:id" element={<JournalEdit />} />

        {/* 📋 To-Do */}
        <Route path="/todos/:id" element={<ToDoOverview />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/todo/create" element={<ToDoCreate />} />
        <Route path="/todo/edit/:id" element={<ToDoEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
