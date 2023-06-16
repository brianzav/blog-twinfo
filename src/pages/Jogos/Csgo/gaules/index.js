import React from "react";
import imgGau from "../../../../imgStreamer/Gaules.png"
import "../gaules/stream.css"
import { BsFacebook,BsTwitter,BsTwitch} from "react-icons/bs";


function Gaules(){
    return(
        <body>
            <div class="main">
            
            <div class="container">
                
                <div class="flip">
                    <div class="front"> 
                    
                    </div>

                    <div class="back">
                            <h2><span>Nome:</span> Alexandre Borba Chiqueta </h2><br/><br/>
                            <h2>é um streamer, youtuber, filantropo e ex-jogador profissional de Counter-Strike
                                 brasileiro. Ele começou sua carreira profissional na g3nerationX em 2001.</h2><br/><br/>
                            <h2><span>Nascimento: </span>2 de dezembro de 1983 (idade 39 anos)</h2>    
                              
                    </div>
                    

                </div>
                
            </div>
            <div class="bio"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan diam in odio bibendum posuere. 
                            Pellentesque at aliquet odio. Cras semper pharetra magna, sit amet fermentum nunc aliquet id. Aliquam bibendum a neque rutrum dictum. 
                            Pellentesque fermentum nibh eget sapien mattis tincidunt. Suspendisse lobortis odio eget varius tristique. Duis arcu tortor, dignissim at sem nec,
                             volutpat ultricies tortor.
                            Aenean arcu nunc, tincidunt sed metus id, hendrerit semper diam. Sed cursus nibh in lacus ultrices faucibus. Aenean tempor nunc nec dui mollis, 
                            vitae porttitor nibh tempor. Duis venenatis turpis sapien, id porttitor eros interdum et. Fusce et lectus est. Proin orci sem, dignissim non turpis volutpat, 
                            maximus tincidunt ex. Nulla eros turpis, congue sit amet imperdiet eget, varius vitae libero. Proin vehicula neque non sem gravida molestie.
                             Suspendisse congue est id faucibus fringilla. Donec in scelerisque libero. Cras eleifend lectus eu lacus elementum faucibus. Phasellus felis eros,
                              volutpat nec eros non, elementum feugiat mauris. Aliquam facilisis sit amet nisl vitae efficitur. Donec convallis dolor sed pellentesque elementum.
                            Vivamus non eros ut elit vulputate tincidunt. Aenean gravida malesuada nulla, quis iaculis odio cursus vel. Mauris non felis magna. Donec dignissim turpis mauris,
                             a dignissim sem blandit id. Fusce ut velit nec leo scelerisque viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                              Duis convallis turpis quis nunc volutpat efficitur. Donec porttitor eget est at hendrerit. Suspendisse sit amet magna malesuada, feugiat dolor eu, semper eros.
                               Maecenas nec volutpat mi, sed faucibus arcu. Morbi mattis ligula sit amet efficitur lacinia. Pellentesque ultrices eget ligula quis sagittis.
                                Maecenas commodo ante nec turpis molestie, ut aliquam ex pulvinar. In euismod arcu mauris, vitae blandit elit aliquet quis.
                            Duis ullamcorper ante iaculis dui hendrerit vehicula. Mauris commodo ipsum vel lectus rhoncus pulvinar. Integer ut pretium ligula.
                             Nulla at sem erat. Vivamus elementum in quam ut ornare. Nullam eu laoreet mauris, ut aliquam turpis. Praesent aliquet venenatis sapien,
                              eu vulputate lectus ultrices eu. Cras lacinia ullamcorper condimentum.
                            Donec nisl quam, cursus ac suscipit vel, ornare a purus. Pellentesque et est sapien. 
                            Etiam sed tempus lorem. Nullam vitae pharetra enim, eget tempus velit.
                             Nam malesuada ligula et elit suscipit, at dapibus mi pretium. Sed vel sapien magna. Nullam blandit pharetra mollis.
                              Aenean a pharetra urna. Morbi posuere semper ornare. Mauris consequat risus ultricies varius tincidunt. Proin arcu nisl,
                               pulvinar sit amet semper ac, faucibus at nisl.</span></div>
            
            </div>
            <div class='icon1'>

                <a href="#" class="btn">

                <BsFacebook class="i"/>

                    </a>

                    <a href="#" class="btn">
                    <BsTwitch class="i"/>

                    </a>

                    <a href="#" class="btn">
                    <BsTwitter class="i"/>

                    </a>

            </div>
        </body>
    )
}

export default Gaules;