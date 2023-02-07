import React, { useEffect, useState } from "react";
import UserField from "../../components/UserField/UserField";
import Card from "../../UI/Card";

import classes from "./Admin.module.css";

function Admin() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const usersList = users.map((user) => (
    <UserField
      key={user.email}
      firstname={user.firstname}
      lastname={user.lastname}
      email={user.email}
      city={user.city}
      role={user.admin}
    />
  ));

  return (
    <Card classNames={classes["admin-panel"]}>
      <div className={classes.fields}>
        <h3>Prenom</h3>
        <h3>Nom</h3>
        <h3>Email</h3>
        <h3>City</h3>
        <h3>Role</h3>
        <h3>Supprimer</h3>
      </div>
      {usersList}
    </Card>
  );
}

export default Admin;
