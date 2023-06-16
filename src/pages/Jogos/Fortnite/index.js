import React from 'react';
import { Link } from 'react-router-dom';
import pulgaboy from '../../../imgStreamer/Pulgaboy.png';
import master from '../../../imgStreamer/Masteerxd.png';
import suetam from '../../../imgStreamer/Suetam1v4.png';
import black from '../../../imgStreamer/Blackoutz.png';
import '../../Streamer/streamers.css';



function Fortnite(){
    return(
      <div class="listarea-s">
      <div class="itens-s">
        
      <Link to="/menu/fortnite/pulgaboy">
            <img src={pulgaboy} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/fortnite/master">
            <img src={master} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/fortnite/suetam">
            <img src={suetam} alt='descrição' width={290} />
          </Link>

           <Link to="/menu/fortnite/black">
            <img src={black} alt='descrição' width={290} />
          </Link>

      </div>
    </div>
    )
}
export default Fortnite; 