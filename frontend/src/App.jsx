import NavBar from "./components/NavBar";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import "./App.css";
import NewsFeed from "./components/NewsFeed";

function App() {
  return (
    <div className="App">
      <NewsFeed />
      <NavBar />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
