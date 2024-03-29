import "./Navbar.css";
import logo from "./logo_tx_white.png";

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="TX Group AG"></img>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00C481"
          fillOpacity="1"
          d="M0,256L48,218.7C96,181,192,107,288,101.3C384,96,480,160,576,176C672,192,768,160,864,138.7C960,117,1056,107,1152,106.7C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
export default Navbar;
