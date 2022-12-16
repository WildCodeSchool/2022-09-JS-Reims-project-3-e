import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./components/NavBar.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Profil from "./components/Profil";
import Login from "./components/Login/Login";

import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const content = (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>

      <NavBar />
    </>
  );
  return (
    <>
      {!isLogged && <Login setIsLogged={setIsLogged} />}
      {isLogged && content}
    </>
  );
}

export default App;
