import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <header className="App-header">
        <h1>Titre du Blog !</h1>
      </header>
      <NavBar />
      <main>
        <article>
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            laboriosam quod corrupti fuga hic! Harum ducimus quas odio esse.
            Eligendi numquam suscipit laborum atque ad itaque libero reiciendis
            omnis voluptate.
          </h1>
        </article>
        <article>
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            laboriosam quod corrupti fuga hic! Harum ducimus quas odio esse.
            Eligendi numquam suscipit laborum atque ad itaque libero reiciendis
            omnis voluptate.
          </h1>
        </article>
      </main>

      <footer>Ici le Footer</footer>
    </>
  );
}
export default Home;
