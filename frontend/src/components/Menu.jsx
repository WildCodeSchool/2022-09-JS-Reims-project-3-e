import "./Menu.css";
import chat from "../assets/chat.png";
import agence from "../assets/agence.png";
import clients from "../assets/clients.png";
import enedis from "../assets/enedis.png";
import metier from "../assets/metier.png";
import prevention from "../assets/prevention.png";

function Menu() {
  return (
    <div className="menupage">
      <ul className="listcategories">
        <li className="category">
          <button className="buttonwidget" type="button">
            <img src={enedis} alt="enedis" /> Enedis
          </button>
        </li>
        <li className="category">
          <button className="buttonwidget" type="button">
            <img src={agence} alt="communication" /> Communication Agence
          </button>
        </li>
        <li className="category">
          <button className="buttonwidget" type="button">
            <img src={prevention} alt="job" /> Prévention
          </button>
        </li>
        <li className="category">
          <button className="buttonwidget" type="button">
            <img src={metier} alt="prevention" /> Métier
          </button>
        </li>
        <li className="category">
          <button className="buttonwidget" type="button">
            <img src={clients} alt="customer" /> Clients
          </button>
        </li>
        <li className="category">
          <button className="buttonwidget" type="button">
            <img src={chat} alt="tchat" /> Entre nous
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
