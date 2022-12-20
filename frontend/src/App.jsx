import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./components/NavBar.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Profil from "./components/Profil";
import Login from "./components/Login/Login";

import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const switchPage = () => {
    setIsActive(!isActive);
  };

  const login = (
    <div className="log-page">
      <Login setIsLogged={setIsLogged} />
      <button onClick={switchPage} type="button">
        Premiere fois? Creet votre compte!
      </button>
    </div>
  );
  const content = (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>

      <NavBar />
    </>
  );

  return !isLogged && !isActive ? login : content;
}

export default App;
