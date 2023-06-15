import React from 'react';
import { Link } from 'react-router-dom';
import pulgaboy from '../../../imgStreamer/Pulgaboy.png';
import master from '../../../imgStreamer/Masteerxd.png';
import suetam from '../../../imgStreamer/Suetam1v4.png';
import black from '../../../imgStreamer/Blackoutz.png';



function Fortnite(){
    return(
      <div class="listarea">
      <div class="itens">
        
          <Link to="/menu/csgo">
            <img src={pulgaboy} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/fortnite">
            <img src={master} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/valorant">
            <img src={suetam} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/warzone">
            <img src={black} alt='descrição' width={290} />
          </Link>

      </div>
    </div>
    )
}
export default Fortnite; 