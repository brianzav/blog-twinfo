import React from 'react';
import { Link } from 'react-router-dom';
import ovotz from '../../../imgStreamer/Ovotz.png';
import gabe from '../../../imgStreamer/Gabepeixe.png';
import coringa from '../../../imgStreamer/coringa.png';
import paulo from '../../../imgStreamer/PaulinhoLOKObr.png';
import luqueta from '../../../imgStreamer/LuquEt4.png';
import facada from '../../../imgStreamer/Facadarp.png';

function GTAV(){
    return(
        <div class="listarea">
        <div class="itens">
          
            <Link to="/menu/csgo">
              <img src={coringa} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/fortnite">
              <img src={luqueta} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/valorant">
              <img src={gabe} alt='descrição' width={290} />
            </Link>
  
            <Link to="/menu/warzone">
              <img src={paulo} alt='descrição' width={290} />
            </Link>

            <Link to="/menu/warzone">
              <img src={ovotz} alt='descrição' width={290} />
            </Link>

            <Link to="/menu/warzone">
              <img src={facada} alt='descrição' width={290} />
            </Link>
  
        </div>
      </div>


    )
}
export default GTAV; 