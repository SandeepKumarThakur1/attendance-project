import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Login from "./page/Login";
import Dashboard from "./page/Dashboard";
import Attendance from "./page/Attendance";
import Leaves from "./page/Leaves";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee/attendance" element={<Attendance />} />
          <Route path="/employee/leave" element={<Leaves />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
