import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import { Contacts } from "./components/Contacts/Contacts";

function App() {
  return (
    <HashRouter>
      <div className="App_container">
        <Route exact path="/" component={Contacts} />
      </div>
    </HashRouter>
  );
}

export default App;
