import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../store/user-context";

import enedislogo from "../assets/enedislogo.png";
import homeIcon from "../assets/home.png";
import userIcon from "../assets/account.png";
import "./NewsFeed.css";

import "./Header.css";

function Header() {
  const { admin } = useContext(UserContext);
  return (
    <div className="header-main">
      <div>
        <img className="enedislogo" src={enedislogo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={homeIcon} alt="home-icon" />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src={userIcon} alt="user-icon" />
            </Link>
          </li>
          {admin ? (
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
}
export default Header;
