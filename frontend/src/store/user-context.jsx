import { useState, createContext, useMemo } from "react";
import propTypes from "prop-types";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);
  const [city, setCity] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [admin, setAdmin] = useState(null);

  const value = useMemo(
    () => ({
      token,
      setToken,
      id,
      setId,
      city,
      setCity,
      firstname,
      setFirstname,
      lastname,
      setLastname,
      admin,
      setAdmin,
    }),
    [token, setToken, id, setId]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: propTypes.node.isRequired,
};
