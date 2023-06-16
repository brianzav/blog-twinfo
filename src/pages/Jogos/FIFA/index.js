import React from 'react';
import { Link } from 'react-router-dom';
import adolfz from '../../../imgStreamer/adolfz.png';
import lize from '../../../imgStreamer/Fifalize.png';
import teca from '../../../imgStreamer/FifaTeca66.png';
import paiva from '../../../imgStreamer/paivinha29.png';
import '../../Streamer/streamers.css';

function Fifa(){
    return(
        <div class="listarea-s">
        <div class="itens-s">
          
        <Link to="/menu/fifa/adolfz">
              <img src={adolfz} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/fifa/lize">
              <img src={lize} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/fifa/teca">
              <img src={teca} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/fifa/paiva">
              <img src={paiva} alt='descrição' width={290} />
            </Link>
  
        </div>
      </div>
    )
}
export default Fifa; 