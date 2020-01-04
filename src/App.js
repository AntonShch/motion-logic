import React from 'react';
import './App.scss';
import Cities from "./Components/Cities";
import Header from "./Modules/Header";

function App() {
  return (
    <div className="app">
        <Header />
        <Cities/>
    </div>
  );
}

export default App;
