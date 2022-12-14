import { Link } from "react-router-dom";
import home from "../assets/home.png";
import menu from "../assets/menu.png";
import user from "../assets/user.png";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="list">
        <li className="listbutton">
          <button className="button" type="button">
            <Link to="/">
              <img className="imagenavbar" src={home} alt="home" />
            </Link>
          </button>
        </li>
        <li className="listbutton">
          <button className="button" type="button">
            <Link to="/menu">
              <img className="imagenavbar" src={menu} alt="home" />
            </Link>
          </button>
        </li>
        <li className="listbutton">
          <button className="button" type="button">
            <Link to="/profil">
              <img className="imagenavbar" src={user} alt="home" />
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
