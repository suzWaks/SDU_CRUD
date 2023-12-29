import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddUser } from "./Components/AddUser";
import { Dashboard } from "./Components/Dashboard";
import { SideNav } from "./Components/SideNav";
import { Departments } from "./Components/Departments";
import { NotFound } from "./Components/NotFound";
import { Userview } from "./Components/Userview";

function App() {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <Router>
        <SideNav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/userview" element={<Userview />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
