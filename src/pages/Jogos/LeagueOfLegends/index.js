import React from 'react';
import { Link } from 'react-router-dom';
import yoda from '../../../imgStreamer/Yoda.png';
import mayumi from '../../../imgStreamer/JuMayumin.png';
import jukes from '../../../imgStreamer/Jukes.png';
import baiano from '../../../imgStreamer/Baiano.png';

function LeagueOfLegends(){
    return(
        <div class="listarea">
        <div class="itens">
          
            <Link to="/menu/csgo">
              <img src={yoda} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/fortnite">
              <img src={mayumi} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/valorant">
              <img src={jukes} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/warzone">
              <img src={baiano} alt='descrição' width={290} />
            </Link>
  
        </div>
      </div>

    )
}
export default LeagueOfLegends; 