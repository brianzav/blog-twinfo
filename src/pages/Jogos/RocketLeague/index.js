import React from 'react';
import { Link } from 'react-router-dom';
import ishow from '../../../imgStreamer/ishowtv.png';
import ciber from '../../../imgStreamer/CiberDracof.png';
import '../../Streamer/streamers.css';

function RocketLeague(){
    return(
        <div class="listarea-s">
      <div class="itens-s">
        
      <Link to="/menu/rocketleague/ishow">
            <img src={ishow} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/rocketleague/ciber">
            <img src={ciber} alt='descrição' width={290} />
          </Link>

      </div>
    </div>
    )
}
export default RocketLeague; 