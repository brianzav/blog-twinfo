import React from 'react';
import { Link } from 'react-router-dom';
import razah from '../../../imgStreamer/RazaH.png';
import volpz from '../../../imgStreamer/volpzr6.png';
import nesk from '../../../imgStreamer/NeskWgA.png';


function R6(){
    return(
        <div class="listarea">
      <div class="itens">
        
          <Link to="/menu/csgo">
            <img src={razah} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/fortnite">
            <img src={nesk} alt='descrição' width={290} />
          </Link>

          <Link to="/menu/valorant">
            <img src={volpz} alt='descrição' width={290} />
          </Link>


      </div>
    </div>


    )
}
export default R6; 