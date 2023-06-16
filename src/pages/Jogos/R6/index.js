import React from 'react';
import { Link } from 'react-router-dom';
import razah from '../../../imgStreamer/RazaH.png';
import volpz from '../../../imgStreamer/volpzr6.png';
import nesk from '../../../imgStreamer/NeskWgA.png';
import '../../Streamer/streamers.css';

function R6(){
    return(
        <div class="listarea-s">
      <div class="itens-s">
        
      <Link to="/menu/rainbowsix/razah">
            <img src={razah} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/rainbowsix/nesk">
            <img src={nesk} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/rainbowsix/volpz">
            <img src={volpz} alt='descrição' width={290} />
          </Link>


      </div>
    </div>


    )
}
export default R6; 