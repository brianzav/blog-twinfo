import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Noticias from './pages/Noticias';
import Streamer from './pages/Streamer';
import Csgo from './pages/Jogos/Csgo';
import Header from './components/Header'
import Fortnite from './pages/Jogos/Fortnite';
import Warzone from './pages/Jogos/Warzone';
import Valorant from './pages/Jogos/Valorant';
import Fifa from './pages/Jogos/FIFA';
import GTAV from './pages/Jogos/GTAV';
import R6 from './pages/Jogos/R6';
import RocketLeague from './pages/Jogos/RocketLeague';
import LeagueOfLegends from './pages/Jogos/LeagueOfLegends';


function RouterApp(){
    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/menu" element={<Menu />} />
                <Route exact path="/noticias" element={<Noticias />} />
                <Route exact path="/streamer" element={<Streamer />} />
                <Route exact path="/menu/csgo" element={<Csgo />} />
                <Route exact path="/menu/fortnite" element={<Fortnite />} />
                <Route exact path="/menu/warzone" element={<Warzone/>} />
                <Route exact path="/menu/valorant" element={<Valorant/>} />
                <Route exact path="/menu/fifa" element={<Fifa/>} />
                <Route exact path="/menu/gtav" element={<GTAV/>} />
                <Route exact path="/menu/rainbowsix" element={<R6/>} />
                <Route exact path="/menu/rocketleague" element={<RocketLeague/>} />
                <Route exact path="/menu/leagueoflegends" element={<LeagueOfLegends/>} />
               


            </Routes>
        </Router>
    );
}

export default RouterApp;