import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Noticias from './pages/Noticias';
import Streamer from './pages/Streamer';
import Header from './components/Header'

function RouterApp(){
    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/menu" element={<Menu />} />
                <Route exact path="/noticias" element={<Noticias />} />
                <Route exact path="/streamer" element={<Streamer />} />
            </Routes>
        </Router>
    );
}

export default RouterApp;