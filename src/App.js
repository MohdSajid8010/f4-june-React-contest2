import React, { useState } from "react";
// import './App.css';
import Login from "./Component/Login"
import Profile from "./Component/Profile"

import { Routes, Route } from "react-router-dom";
import userContextObj from "./context/context";

function App() {
  let [id, setId] = useState("a")
  console.log("id", id)

  return (
    <div className="App">

      <userContextObj.Provider value={{ id, setId }}>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </userContextObj.Provider>

    </div>
  );
}

export default App;
