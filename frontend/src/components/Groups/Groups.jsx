import React from "react";
import Card from "../../UI/Card";
import defaultProfilePic from "../../assets/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";
import defaultGroupPic from "../../assets/enedis-logo.png";

import classes from "./Groups.module.css";

const DUMMY_GROUPS = [
  {
    id: 1,
    logo: "",
    name: "Reims",
    members: [
      {
        id: 1,
        name: "John",
        lastname: "Doe",
        age: 28,
        img: "",
      },
      {
        id: 2,
        name: "Jane",
        lastname: "Doe",
        age: 28,
        img: "",
      },
    ],
  },
  {
    id: 2,
    logo: "",
    name: "Paris",
    members: [
      {
        id: 1,
        name: "John",
        lastname: "Doe",
        img: "",
      },
      {
        id: 2,
        name: "Jane",
        lastname: "Doe",
        img: "",
      },
    ],
  },
  {
    id: 3,
    logo: "",
    name: "Lyon",
    members: [
      {
        id: 1,
        name: "John",
        lastname: "Doe",
        img: "",
      },
      {
        id: 2,
        name: "Jane",
        lastname: "Doe",
        img: "",
      },
    ],
  },
  {
    id: 4,
    logo: "",
    name: "Lille",
    members: [
      {
        id: 1,
        name: "John",
        lastname: "Doe",
        img: "",
      },
      {
        id: 2,
        name: "Jane",
        lastname: "Doe",
        img: "",
      },
    ],
  },
  {
    id: 5,
    logo: "",
    name: "Bordeaux",
    members: [
      {
        id: 1,
        name: "John",
        lastname: "Doe",
        img: "",
      },
      {
        id: 2,
        name: "Jane",
        lastname: "Doe",
        img: "",
      },
    ],
  },
];

function Groups() {
  const filteredData = DUMMY_GROUPS.map((group) => {
    return (
      <details className={classes.details} key={group.id}>
        <summary>
          <div>
            <img
              className={classes["group-logo"]}
              src={group.logo}
              alt="group-logo"
              onError={(e) => {
                e.currentTarget.src = defaultGroupPic;
              }}
            />
            <h4>{group.name}</h4>
          </div>
        </summary>
        {group.members.map((member) => {
          return (
            <div className={classes["group-profile"]} key={member.id}>
              <img
                className={classes["group-profile-pic"]}
                src={member.img}
                alt="profile"
                onError={(e) => {
                  e.currentTarget.src = defaultProfilePic;
                }}
              />
              <p>{member.name}</p>
              <p>{member.lastname}</p>
            </div>
          );
        })}
      </details>
    );
  });
  return (
    <Card classNames={classes.groups}>
      <h3>Groupes</h3>
      {filteredData}
    </Card>
  );
}

export default Groups;
