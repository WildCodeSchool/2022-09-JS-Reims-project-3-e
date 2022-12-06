import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="list">
        <li>
          <button className="button" type="button">
            Home
          </button>
        </li>
        <li>
          <button className="button" type="button">
            Menu
          </button>
        </li>
        <li>
          <button className="button" type="button">
            Profil
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
