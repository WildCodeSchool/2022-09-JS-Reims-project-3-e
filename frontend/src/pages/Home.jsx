import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost/5000"}/articles`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  console.warn(articles);

  return (
    <>
      <header className="App-header">
        <h1>Title !</h1>
      </header>
      <NavBar />
      <main>
        <article>
          <h1>Title</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          laboriosam quod corrupti fuga hic! Harum ducimus quas odio esse.
          Eligendi numquam suscipit laborum atque ad itaque libero reiciendis
          omnis voluptate.
        </article>
        <article>
          <h1>Title</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          laboriosam quod corrupti fuga hic! Harum ducimus quas odio esse.
          Eligendi numquam suscipit laborum atque ad itaque libero reiciendis
          omnis voluptate.
        </article>
      </main>

      <footer>Ici le Footer</footer>
    </>
  );
}
