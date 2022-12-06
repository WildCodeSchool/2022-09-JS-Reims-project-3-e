import "./NavBar.css";
import home from "../assets/home.png";
import menu from "../assets/menu.png";
import user from "../assets/user.png";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="list">
        <li className="listbutton">
          <button className="button" type="button">
            <img className="imagenavbar" src={home} alt="home" />
          </button>
        </li>
        <li className="listbutton">
          <button className="button" type="button">
            <img className="imagenavbar" src={menu} alt="home" />
          </button>
        </li>
        <li className="listbutton">
          <button className="button" type="button">
            <img className="imagenavbar" src={user} alt="home" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
