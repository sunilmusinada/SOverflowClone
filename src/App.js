import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Searchbar from "./Components/Searchbar/Searchbar";
function App() {
  return (
    <div className="App">
      <Searchbar placeholder="Search" autoFocus={false}></Searchbar>
    </div>
  );
}

export default App;
