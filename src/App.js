import "./App.css";
import React from "react";
import Combined from "./templates/Combined";
import "primereact/resources/themes/saga-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import "primeflex/primeflex.css"; // PrimeFlex

function App() {
  return (
    <div className="App">
      <Combined />
    </div>
  );
}

export default App;
