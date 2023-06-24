import React, { useState } from "react";
// import './App.css';
import Login from "./Component/Login"
import Profile from "./Component/Profile"

import { Routes, Route } from "react-router-dom";

function App() {
  let [id, setId] = useState("")
  console.log("id", id)

  return (
    <div className="App">
      {/* <Login setId={setId} /> */}
      <Routes>

        <Route path="/" element={<Login setId={setId} />} />
        <Route path="/profile" element={<Profile id={id} />} />
        {/* <Profile id={id} /> */}

      </Routes>
    </div>
  );
}

export default App;
