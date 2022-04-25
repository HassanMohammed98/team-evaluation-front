import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUP from "./Components/Auth/SignUP";
import SignIn from "./Components/Auth/SignIn";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="whole-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
