import "./NewsFeed.css";

function NewsFeed() {
  return (
    <section className="news-feed">
      <article>
        <h1>CHSCT</h1>
        <p>
          Flash Sécurité : La bonne posture suivant les tâches. Pour les
          salariés travaillant assis il est important de positionner l'écran
          aligné à l'axe des yeux. Ni trop haut, ni trop bas. Pour les salariés
          ayant dans le cadre de leurs missions à porter des charges, il est
          important de bien maintenir un axe droit de la coloone vertébrale, et
          lorsque l'on doit se baisser ce sont les jambes qui flechissent et pas
          le dos qui se courbe
        </p>
      </article>
      <article>
        <h1>Elections délégués du personnel</h1>
        <p>
          Nous vous rappelons que l'élection des délégués du personnel au aura
          lieu prochainement. Les listes des différents candidats vous ont été
          communiqué par mail.
        </p>
      </article>
      <article>
        <h1>Association AS ENEDIS</h1>
        <p>
          Dans le cadre du championnat de football inter-entreprise
          l'association AS ENEDIS vous confie à son match phare contre
          l'OLYMPIQUE TOTAL ENREGIES. Les joueurs ont besoin de votre soutien
          pour défendre les couleurs de notre entreprise!
        </p>
      </article>
    </section>
  );
}

export default NewsFeed;
