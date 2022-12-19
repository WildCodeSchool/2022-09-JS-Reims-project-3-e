import enedislogo from "../assets/enedislogo.png";
import "./NewsFeed.css";

function Header() {
  return (
    <div>
      <img className="enedislogo" src={enedislogo} alt="logo" />
    </div>
  );
}
export default Header;
