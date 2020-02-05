import React from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";

import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Header branding="Contact Manager1" />
       <Contacts/>
      </div>
    </div>
  );
}

export default App;
