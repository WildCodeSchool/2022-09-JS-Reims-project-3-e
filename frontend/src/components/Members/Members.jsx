import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";
import membersPic from "../../assets/multiple-users-silhouette.png";
import defaultProfilePic from "../../assets/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";

import classes from "./Members.module.css";

function MembersSection() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/users`)
      .then((response) => response.json())
      .then((data) => {
        setMembers(data);
      });
  }, []);

  return (
    <Card classNames={classes.members}>
      <div className={classes["members-header"]}>
        <img src={membersPic} alt="members" />
        <h4> {members.length} Membres</h4>
      </div>
      <div className={classes["members-section"]}>
        {members.slice(-5).map((member) => (
          <div className={classes["member-card"]} key={member.id}>
            <img src={member.img || defaultProfilePic} alt="member" />
          </div>
        ))}
      </div>
      <div className={classes.actions}>
        <button type="button">Annuaire</button>
        <button type="button">Organigramme</button>
      </div>
    </Card>
  );
}

export default MembersSection;
