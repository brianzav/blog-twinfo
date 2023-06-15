import React from 'react';
import { Link } from 'react-router-dom';
import stolen from '../../../imgStreamer/StolenBR.png';
import renegada from '../../../imgStreamer/RenegadaGamer.png';
import rayana from '../../../imgStreamer/RayanaBainy.png';
import snarf from '../../../imgStreamer/Sn4rFx.png';

function Warzone(){
    return(
        <div class="listarea">
      <div class="itens">
        
          <Link to="/menu/csgo">
            <img src={stolen} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/fortnite">
            <img src={renegada} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/valorant">
            <img src={rayana} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/warzone">
            <img src={snarf} alt='descrição' width={290} />
          </Link>

      </div>
    </div>


    )
}
export default Warzone; 