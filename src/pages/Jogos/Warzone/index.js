import React from 'react';
import { Link } from 'react-router-dom';
import stolen from '../../../imgStreamer/StolenBR.png';
import renegada from '../../../imgStreamer/RenegadaGamer.png';
import rayana from '../../../imgStreamer/RayanaBainy.png';
import snarf from '../../../imgStreamer/Sn4rFx.png';
import '../../Streamer/streamers.css';

function Warzone(){
    return(
        <div class="listarea-s">
      <div class="itens-s">
        
      <Link to="/menu/warzone/stolen">
          <img src={stolen} alt='descrição' width={290} />
        </Link>

          <Link to="/menu/warzone/renegada">
          <img src={renegada} alt='descrição' width={290} />
        </Link>

          <Link to="/menu/warzone/rayana">
          <img src={rayana} alt='descrição' width={290} />
        </Link>

        <Link to="/menu/warzone/snarf">
          <img src={snarf} alt='descrição' width={290} />
        </Link>

      </div>
    </div>


    )
}
export default Warzone; 