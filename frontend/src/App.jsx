import { useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Header from "./components/Header";
import Login from "./components/Login/Login";
import { UserContext } from "./store/user-context";

import "./App.css";
import Main from "./pages/Main";
import Profile from "./components/Profile/Profile";
import Admin from "./pages/Admin/Admin";

function App() {
  const { token } = useContext(UserContext);
  const { admin } = useContext(UserContext);

  const [isActive, setIsActive] = useState(false);
  const switchPage = () => {
    setIsActive(true);
  };
  const resForm = () => {
    setIsActive(false);
  };

  const login = (
    <div className="log-page">
      <Login />
      <button onClick={switchPage} type="button">
        Premiere fois? Creet votre compte!
      </button>
    </div>
  );
  const content = (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        {admin ? <Route path="/admin" element={<Admin />} /> : null}
        <Route path="*" element={<Main />} />
      </Routes>
    </>
  );

  return (
    <>
      {!token && !isActive && login}
      {!token && isActive && <Signup onRes={resForm} />}
      {token && content}
    </>
  );
}

export default App;
