import React from 'react';
import { Link } from 'react-router-dom';
import ishow from '../../../imgStreamer/ishowtv.png';
import ciber from '../../../imgStreamer/CiberDracof.png';


function RocketLeague(){
    return(
        <div class="listarea">
      <div class="itens">
        
          <Link to="/menu/csgo">
            <img src={ishow} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/fortnite">
            <img src={ciber} alt='descrição' width={290} />
          </Link>

      </div>
    </div>
    )
}
export default RocketLeague; 