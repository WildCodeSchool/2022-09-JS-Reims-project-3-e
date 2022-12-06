import NavBar from "./components/NavBar";
import "./App.css";
import NewsFeed from "./components/NewsFeed";

function App() {
  return (
    <div className="App">
      <NewsFeed />
      <NavBar />
    </div>
  );
}

export default App;
