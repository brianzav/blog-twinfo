import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Sobre from './pages/sobre';
import Streamer from './pages/Streamer';
import Header from './components/Header'
import Csgo from './pages/Jogos/Csgo';
import Fortnite from './pages/Jogos/Fortnite';
import Warzone from './pages/Jogos/Warzone';
import Valorant from './pages/Jogos/Valorant';
import Fifa from './pages/Jogos/FIFA';
import GTAV from './pages/Jogos/GTAV';
import R6 from './pages/Jogos/R6';
import RocketLeague from './pages/Jogos/RocketLeague';
import LeagueOfLegends from './pages/Jogos/LeagueOfLegends';
import Apoka from './pages/Jogos/Csgo/apoka';
import Gaules from './pages/Jogos/Csgo/gaules';
import Liminha from './pages/Jogos/Csgo/liminha';
import Michel from './pages/Jogos/Csgo/michel';
import Adolfz from './pages/Jogos/FIFA/adolfz';
import Lize from './pages/Jogos/FIFA/lize';
import Teca from './pages/Jogos/FIFA/teca';
import Paiva from './pages/Jogos/FIFA/paiva';
import Suetam from './pages/Jogos/Fortnite/suetam';
import Pulgaboy from './pages/Jogos/Fortnite/pulgaboy';
import Master from './pages/Jogos/Fortnite/master';
import Black from './pages/Jogos/Fortnite/black';
import Coringa from './pages/Jogos/GTAV/coringa';
import Facada from './pages/Jogos/GTAV/facada';
import Gabe from './pages/Jogos/GTAV/gabe';
import Luqueta from './pages/Jogos/GTAV/luqueta';
import Ovotz from './pages/Jogos/GTAV/ovotz';
import Paulo from './pages/Jogos/GTAV/paulo';
import Baiano from './pages/Jogos/LeagueOfLegends/baiano';
import Jukes from './pages/Jogos/LeagueOfLegends/jukes';
import Mayumi from './pages/Jogos/LeagueOfLegends/mayumi';
import Yoda from './pages/Jogos/LeagueOfLegends/yoda';
import Nesk from './pages/Jogos/R6/nesk';
import RazaH from './pages/Jogos/R6/razah';
import Volpz from './pages/Jogos/R6/volpz';
import Ishow from './pages/Jogos/RocketLeague/ishow';
import Ciber from './pages/Jogos/RocketLeague/ciber';
import Coreano from './pages/Jogos/Valorant/coreano';
import Paula from './pages/Jogos/Valorant/paula';
import Frttt from './pages/Jogos/Valorant/frttt';
import Otsuka from './pages/Jogos/Valorant/otsuka';
import Stolen from './pages/Jogos/Warzone/stolen/stolen';
import Renegada from './pages/Jogos/Warzone/renegada';
import Rayana from './pages/Jogos/Warzone/rayana';
import Snarf from './pages/Jogos/Warzone/snarf/snarf';
import Fale from './pages/fale-conosco/index';

function RouterApp(){
    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Menu />} />
                <Route exact path="/sobre" element={<Sobre />} />
                <Route exact path="/streamer" element={<Streamer />} />
                <Route exact path="/fale-conosco" element={<Fale />} />
                <Route exact path="/menu/csgo" element={<Csgo />} />
                <Route exact path="/menu/fortnite" element={<Fortnite />} />
                <Route exact path="/menu/warzone" element={<Warzone/>} />
                <Route exact path="/menu/valorant" element={<Valorant/>} />
                <Route exact path="/menu/fifa" element={<Fifa/>} />
                <Route exact path="/menu/gtav" element={<GTAV/>} />
                <Route exact path="/menu/rainbowsix" element={<R6/>} />
                <Route exact path="/menu/rocketleague" element={<RocketLeague/>} />
                <Route exact path="/menu/leagueoflegends" element={<LeagueOfLegends/>} />
                <Route exact path="/menu/csgo/apoka" element={<Apoka/>}/>
                <Route exact path="/menu/csgo/gaules" element={<Gaules/>}/>
                <Route exact path="/menu/csgo/liminha" element={<Liminha/>}/>
                <Route exact path="/menu/csgo/michel" element={<Michel/>}/>
                <Route exact path="/menu/fifa/adolfz" element={<Adolfz/>}/>
                <Route exact path="/menu/fifa/lize" element={<Lize/>}/>
                <Route exact path="/menu/fifa/teca" element={<Teca/>}/>
                <Route exact path="/menu/fifa/paiva" element={<Paiva/>}/>
                <Route exact path="/menu/fortnite/suetam" element={<Suetam/>}/>
                <Route exact path="/menu/fortnite/pulgaboy" element={<Pulgaboy/>}/>
                <Route exact path="/menu/fortnite/master" element={<Master/>}/>
                <Route exact path="/menu/fortnite/black" element={<Black/>}/>
                <Route exact path="/menu/gtav/coringa" element={<Coringa/>}/>
                <Route exact path="/menu/gtav/facada" element={<Facada/>}/>
                <Route exact path="/menu/gtav/gabe" element={<Gabe/>}/>
                <Route exact path="/menu/gtav/luqueta" element={<Luqueta/>}/>
                <Route exact path="/menu/gtav/ovotz" element={<Ovotz/>}/>
                <Route exact path="/menu/gtav/paulo" element={<Paulo/>}/>
                <Route exact path="/menu/leagueoflegends/baiano" element={<Baiano/>}/>
                <Route exact path="/menu/leagueoflegends/jukes" element={<Jukes/>}/>
                <Route exact path="/menu/leagueoflegends/mayumi" element={<Mayumi/>}/>
                <Route exact path="/menu/leagueoflegends/yoda" element={<Yoda/>}/>
                <Route exact path="/menu/rainbowsix/nesk" element={<Nesk/>}/>
                <Route exact path="/menu/rainbowsix/volpz" element={<Volpz/>}/>
                <Route exact path="/menu/rainbowsix/razah" element={<RazaH/>}/>
                <Route exact path="/menu/rocketleague/ishow" element={<Ishow/>}/>
                <Route exact path="/menu/rocketleague/ciber" element={<Ciber/>}/>
                <Route exact path="/menu/valorant/coreano" element={<Coreano/>}/>
                <Route exact path="/menu/valorant/paula" element={<Paula/>}/>
                <Route exact path="/menu/valorant/frttt" element={<Frttt/>}/>
                <Route exact path="/menu/valorant/otsuka" element={<Otsuka/>}/>
                <Route exact path="/menu/warzone/stolen" element={<Stolen/>}/>
                <Route exact path="/menu/warzone/renegada" element={<Renegada/>}/>
                <Route exact path="/menu/warzone/rayana" element={<Rayana/>}/>
                <Route exact path="/menu/warzone/snarf" element={<Snarf/>}/>
                
            </Routes>
        </Router>
    );
}

export default RouterApp;