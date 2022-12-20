import "./Menu.css";
import chat from "../assets/chat.jpg";
import agence from "../assets/agence.jpg";
import clients from "../assets/clients.jpg";
import enedis from "../assets/enedis.png";
import metier from "../assets/metier.png";
import prevention from "../assets/prevention.jpeg";

function Menu() {
  return (
    <div className="menupage">
      <ul>
        <li>
          <button className="buttonwidget" type="button">
            <img src={enedis} alt="enedis" />
          </button>
        </li>
        <li>
          <button className="buttonwidget" type="button">
            <img src={agence} alt="communication" />
          </button>
        </li>
        <li>
          <button className="buttonwidget" type="button">
            <img src={prevention} alt="job" />
          </button>
        </li>
        <li>
          <button className="buttonwidget" type="button">
            <img src={metier} alt="prevention" />
          </button>
        </li>
        <li>
          <button className="buttonwidget" type="button">
            <img src={clients} alt="customer" />
          </button>
        </li>
        <li>
          <button className="buttonwidget" type="button">
            <img src={chat} alt="tchat" />
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
