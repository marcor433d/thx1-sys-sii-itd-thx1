import React from "react";
import "./App.css";
import { HomePage } from "./containers/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LoginPage } from "./containers/LoginPage";
import { StudentPage } from "./containers/StudentPage";
import { CareersPage } from "./containers/CareersPage";
import { CareerDetails } from "./containers/CareerDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/career/:id" element={<CareerDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
