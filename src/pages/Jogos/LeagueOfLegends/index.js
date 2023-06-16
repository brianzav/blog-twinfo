import React from 'react';
import { Link } from 'react-router-dom';
import yoda from '../../../imgStreamer/Yoda.png';
import mayumi from '../../../imgStreamer/JuMayumin.png';
import jukes from '../../../imgStreamer/Jukes.png';
import baiano from '../../../imgStreamer/Baiano.png';
import '../../Streamer/streamers.css';

function LeagueOfLegends(){
    return(
        <div class="listarea-s">
        <div class="itens-s">
          
        <Link to="/menu/leagueoflegends/yoda">
              <img src={yoda} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/leagueoflegends/mayumi">
              <img src={mayumi} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/leagueoflegends/jukes">
              <img src={jukes} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/leagueoflegends/baiano">
              <img src={baiano} alt='descrição' width={290} />
            </Link>
  
        </div>
      </div>

    )
}
export default LeagueOfLegends; 