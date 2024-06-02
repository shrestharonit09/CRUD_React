import React, { useState } from "react";
import Crudoperation from "./component/Crudoperation";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Facebooks from "./component/Facebooks";
import Youtube from "./component/Youtube";



const App = () => {
  const [datafromchild, setDataFromChild] = useState();

  const handleData = (data) => {
    setDataFromChild(data);
  };
  return (
    <div>
      <Router>
        <Navbar />
      
        <Routes>
    
          <Route path="/crud" element={<Crudoperation />}>
            {" "}
          </Route>
          <Route path="/fb" element={<Facebooks />}></Route>
          <Route path="/youtube" element={<Youtube />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
