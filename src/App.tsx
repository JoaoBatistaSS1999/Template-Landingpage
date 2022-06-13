import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Marketplace from "./pages/Marketplace/Marketplace";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/marketplace' element={<Marketplace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
