import React from 'react';
import Main from "./pages/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppDesign from "./Screens/Second/AppDesign/AppDesign";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<Main/>}/>
              <Route path={'/app-design'} element={<AppDesign/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
