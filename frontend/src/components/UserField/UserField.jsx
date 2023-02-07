import React from "react";
import PropTypes from "prop-types";

import classes from "./UserField.module.css";

function UserField({ firstname, lastname, city, email, role }) {
  return (
    <div className={classes["user-data"]}>
      <h3>{firstname}</h3>
      <h3>{lastname}</h3>
      <h3>{email}</h3>
      <h3>{city}</h3>
      <h3>{role === 1 ? "admin" : "visiteur"}</h3>
      <button type="button">Supprimer</button>
    </div>
  );
}

UserField.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default UserField;
