import React from 'react';
import { Link } from 'react-router-dom';
import gaules from '../../../imgStreamer/Gaules.png';
import mch from '../../../imgStreamer/Michel.png';
import apoka from '../../../imgStreamer/Apoka.png';
import lima from '../../../imgStreamer/liminha.png';
import '../../Streamer/streamers.css';


function Csgo(){
    return(
        <div class="listarea-s">
        <div class="itens-s">
          
            <Link to="/menu/csgo/gaules">
              <img src={gaules} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/csgo/michel">
              <img src={mch} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/csgo/apoka">
              <img src={apoka} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/csgo/liminha">
              <img src={lima} alt='descrição' width={290} />
            </Link>
  
        </div>
      </div>


    )
}
export default Csgo; 