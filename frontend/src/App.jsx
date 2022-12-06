import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <p>coucou</p>
    </div>
  );
}

export default App;
