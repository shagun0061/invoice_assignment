import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home.jsx";
import Enteries from "./pages/Enteries";
import EnteriesDetail from "./pages/EnteriesDetail";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/enteries" element={<Enteries />}></Route>
        <Route path="/enteries/:id" element={<EnteriesDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
