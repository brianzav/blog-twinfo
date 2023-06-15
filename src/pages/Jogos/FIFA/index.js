import React from 'react';
import { Link } from 'react-router-dom';
import adolfz from '../../../imgStreamer/adolfz.png';
import lize from '../../../imgStreamer/Fifalize.png';
import teca from '../../../imgStreamer/FifaTeca66.png';
import paiva from '../../../imgStreamer/paivinha29.png';

function Fifa(){
    return(
        <div class="listarea">
        <div class="itens">
          
            <Link to="/menu/csgo">
              <img src={adolfz} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/fortnite">
              <img src={lize} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/valorant">
              <img src={teca} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/warzone">
              <img src={paiva} alt='descrição' width={290} />
            </Link>
  
        </div>
      </div>
    )
}
export default Fifa; 