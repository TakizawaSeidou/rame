import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header'
import Menu from './Pages/Menu/Menu'
import search from "./Pages/Search/Search";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <div className="App">
    <Header/>
      <Menu/>
      <Search/>
    </div>
  );
}

export default App;
