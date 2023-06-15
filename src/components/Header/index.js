import './estilos.css'; // Importe o arquivo CSS
import logo from '../../img/logo.png';
import { BiChevronsRight, BiMessageAltError, BiGroup, BiJoystick, BiHome, BiBell} from "react-icons/bi";
import  Script from "./script1";
import { Link } from 'react-router-dom';
import Menu from '../../pages/Menu/index.js';
import Noticias from '../../pages/Noticias';
import Streamer from '../../pages/Streamer';


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
              <Link to="/menu">
                <BiJoystick class="icon"></BiJoystick>
                <span class="text nav-text">Jogos</span>
              </Link>
            </li>
            <li class="nav-link">
              <Link to="/streamer">
                <BiGroup class="icon"></BiGroup>
                <span class="text nav-text">Streamers</span>
              </Link>
            </li>
            <li class="nav-link">
              <Link to="/noticias">
                <BiBell class="icon"></BiBell>
                <span class="text nav-text">Noticias</span>
              </Link>
            </li>
            <li class="nav-link">
              <a href="#">
                <BiMessageAltError class="icon"></BiMessageAltError>
                <span class="text nav-text">Sobre</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="#">
                <BiHome class="icon"></BiHome>
                <span class="text nav-text">Dashboard</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="#">
                <BiHome class="icon"></BiHome>
                <span class="text nav-text">Dashboard</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="#">
                <BiHome class="icon"></BiHome>
                <span class="text nav-text">Dashboard</span>
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