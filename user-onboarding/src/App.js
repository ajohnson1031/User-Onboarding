import React, { useState } from "react";
import FormikForm from "./components/FormikForm";
import "./css/index.css";

function App() {
  const userCount = useState(0);
  return (
    <div className="App">
      <div className="main-header">
        <img
          src="https://cdn130.picsart.com/278122143032211.png?r1024x1024"
          alt="Avengers Logo"
        />
        <span>Avenger Count: {userCount[0]}</span>
      </div>
      <FormikForm userCount={userCount} />
    </div>
  );
}

export default App;
