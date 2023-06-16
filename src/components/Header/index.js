import './estilos.css'; // Importe o arquivo CSS
import logo from '../../img/logo.png';
import { BiChevronsRight, BiMessageAltError, BiGroup, BiHome, BiBell} from "react-icons/bi";
import  Script from "./script1";
import { Link } from 'react-router-dom';



const Headerr = () => {


  return (
    
    <>
      <body class="sidebar close">
        <header>
        <div class="image-text">
          <span class="image">
            <img src={logo} alt="logo" />
          </span>

          <div class="text header-text">
            <span class="name">TwInfo</span>
            <span class="profession">Enciclopédia Twitch</span>
          </div>
        </div>

        <BiChevronsRight class ="toggle" onClick={() => Script()}/>
        </header>

      <div class="menu-bar" >
        <div class="menu">
          <ul class="menu-links">
            <li class="nav-link">
              <Link to="/">
                <BiHome class="icon"></BiHome>
                <span class="text nav-text">Home</span>
              </Link>
            </li>
            <li class="nav-link">
              <Link to="/streamer">
                <BiGroup class="icon"></BiGroup>
                <span class="text nav-text">Streamers</span>
              </Link>
            </li>
            <li class="nav-link">
              <Link to="/fale-conosco">
                <BiBell class="icon"></BiBell>
                <span class="text nav-text">Fale Conosco</span>
              </Link>
            </li>
            <li class="nav-link">
              <a href="/sobre">
                <BiMessageAltError class="icon"></BiMessageAltError>
                <span class="text nav-text">Sobre</span>
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </body>

    </>
  )
}
export default Headerr;