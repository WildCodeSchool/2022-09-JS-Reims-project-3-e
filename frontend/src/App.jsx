import { Route, Routes } from "react-router-dom";
import "./components/NavBar.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Profil from "./components/Profil";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>

      <NavBar />
    </>
  );
}

export default App;
