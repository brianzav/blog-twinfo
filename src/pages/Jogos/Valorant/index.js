import React from 'react';
import { Link } from 'react-router-dom';
import coreano from '../../../imgStreamer/Coreano.png';
import otsuka from '../../../imgStreamer/Otsukaxd.png';
import paula from '../../../imgStreamer/Paulanobre.png';
import frttt from '../../../imgStreamer/frttt.png';


function Valorant(){
    return(
        <div class="listarea">
      <div class="itens">
        
          <Link to="/menu/csgo">
            <img src={coreano} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/fortnite">
            <img src={otsuka} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/valorant">
            <img src={paula} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/warzone">
            <img src={frttt} alt='descrição' width={290} />
          </Link>

      </div>
    </div>
    )
}
export default Valorant; 