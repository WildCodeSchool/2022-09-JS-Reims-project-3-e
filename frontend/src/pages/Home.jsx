import "../components/NavBar.css";
import { useEffect, useState } from "react";
import NewsFeed from "../components/NewsFeed";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080"
      }/communication-plans`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return <NewsFeed communicationPlans={articles} />;
}

export default Home;
