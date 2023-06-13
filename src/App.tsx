import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header'
import Menu from './Pages/Menu/Menu'
import Search from "./Pages/Search/Search";
import Text from "./Pages/Text/Text"
import Square from "./Pages/Square/Square"



function App() {
  return (
    <div className="App">
    <Header/>
      <Menu/>
      <Search/>
      <Text/>
      <Square/>

    </div>
  );
}

export default App;
