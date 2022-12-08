import "../components/NavBar.css";
import { useEffect, useState } from "react";
import NewsFeed from "../components/NewsFeed";
import NavBar from "../components/NavBar";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/articles`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  console.warn(articles);

  return (
    <>
      <NewsFeed />
      <NavBar />
    </>
  );
}
export default Home;
