import React from 'react';
import { Link } from 'react-router-dom';
import coreano from '../../../imgStreamer/Coreano.png';
import otsuka from '../../../imgStreamer/Otsukaxd.png';
import paula from '../../../imgStreamer/Paulanobre.png';
import frttt from '../../../imgStreamer/frttt.png';
import '../../Streamer/streamers.css';

function Valorant(){
    return(
        <div class="listarea-s">
      <div class="itens-s">
        
      <Link to="/menu/valorant/coreano">
            <img src={coreano} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/valorant/otsuka">
            <img src={otsuka} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/valorant/paula">
            <img src={paula} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/valorant/frttt">
            <img src={frttt} alt='descrição' width={290} />
          </Link>

      </div>
    </div>
    )
}
export default Valorant; 