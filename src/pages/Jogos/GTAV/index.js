import React from 'react';
import { Link } from 'react-router-dom';
import ovotz from '../../../imgStreamer/Ovotz.png';
import gabe from '../../../imgStreamer/Gabepeixe.png';
import coringa from '../../../imgStreamer/coringa.png';
import paulo from '../../../imgStreamer/PaulinhoLOKObr.png';
import luqueta from '../../../imgStreamer/LuquEt4.png';
import facada from '../../../imgStreamer/Facadarp.png';
import '../../Streamer/streamers.css';


function GTAV(){
    return(
        <div class="listarea-s">
        <div class="itens-s">
          
        <Link to="/menu/gtav/coringa">
              <img src={coringa} alt='descrição' width={290} />
            </Link>

            <Link to="/menu/gtav/luqueta">
              <img src={luqueta} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/gtav/gabe">
              <img src={gabe} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/gtav/paulo">
              <img src={paulo} alt='descrição' width={290} />
            </Link>

            <Link to="/menu/gtav/ovotz">
              <img src={ovotz} alt='descrição' width={290} />
            </Link>

            <Link to="/menu/gtav/facada">
              <img src={facada} alt='descrição' width={290} />
            </Link>
  
        </div>
      </div>


    )
}
export default GTAV; 