import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import AddExpense from "./pages/AddExpense.jsx";
import EditExpense from "./pages/EditExpense.jsx";
import Profile from "./pages/Profile.jsx";

export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="p-4 bg-blue-600 text-white flex gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add Expense</Link>
        <Link to="/edit">Edit Expense</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      {/* Pages */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/edit" element={<EditExpense />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}
