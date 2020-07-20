import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App container">
      <div className="jumbotron">
        <h1>Hello I am the app</h1>
        <Card />
      </div>
    </div>
  );
}

export default App;
