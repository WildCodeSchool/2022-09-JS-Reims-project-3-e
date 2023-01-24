import React from "react";
import Card from "../../UI/Card";
import defaultProfilePic from "../../assets/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";

import recentIcon from "../../assets/recent.png";

import classes from "./Activity.module.css";

function Activity() {
  return (
    <Card classNames={classes.activity}>
      <header>
        <img src={recentIcon} alt="recent-activity-icon" />
        <h3>Activités recentes</h3>
      </header>
      <section>
        <header>
          <p>
            <strong>Aujourd'hui</strong>
          </p>
          <p>3 activités</p>
        </header>
        <div>
          <img src={defaultProfilePic} alt="member" />
          <p>Simon a créé une page</p>
        </div>
        <div>
          <img src={defaultProfilePic} alt="member" />
          <p>Pierre-Yves a aimé toutes les publications du monde entier</p>
        </div>
        <div>
          <img src={defaultProfilePic} alt="member" />
          <p>Farid a créé une page</p>
        </div>
        <header>
          <p>
            <strong>Hier</strong>
          </p>
          <p>1 activité</p>
        </header>
        <div>
          <img src={defaultProfilePic} alt="member" />
          <p>Olivier a créé une page</p>
        </div>
      </section>
    </Card>
  );
}

export default Activity;
