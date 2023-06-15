import React from 'react';
import { Link } from 'react-router-dom';
import gaules from '../../../imgStreamer/Gaules.png';
import mch from '../../../imgStreamer/Michel.png';
import apoka from '../../../imgStreamer/Apoka.png';
import lima from '../../../imgStreamer/liminha.png';

function Csgo(){
    return(
        <div class="listarea">
        <div class="itens">
          
            <Link to="/menu/csgo">
              <img src={gaules} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/fortnite">
              <img src={mch} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/valorant">
              <img src={apoka} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/warzone">
              <img src={lima} alt='descrição' width={290} />
            </Link>
  
        </div>
      </div>


    )
}
export default Csgo; 