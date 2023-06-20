import Main from '../../components/Main';
import '../Noticias/noticia.css'
import capa from '../../img/capanoticia.png'
import c9hltv from '../../img/cloudhltv.png'
import imphltv from '../../img/imphltv.png'

function Noticias(){
    return(
        <div Class='main'>
                <img class='capa' src={capa}></img>
            <div class='content'>
                <h1 align='left' >Histórico! Gaules bate 710 mil <h1></h1>espectadores na Twitch durante o Major de CS:GO</h1>
                <p>Cloud9 VS Imperial</p>

            <div class='content1'>
                
                <img class='hltv' src={c9hltv}></img>
                <img class='hltv' src={imphltv}></img>
            
            </div>
            <div class = 'escrita'>
                <h2 align='left' >Poucos minutos depois de bater o recorde brasileiro de espectadores simultâneos na Twitch,
                     Alexandre “Gaules” Borba voltou a marcar seu nome na história na plataforma nesta segunda-feira (16)
                      ao atingir um pico de 710 mil espectadores simultâneos.
                     O feito aconteceu no terceiro mapa da série entre Imperial e Cloud9, Mirage, 
                     com a equipe brasileira conquistando um resultado muito importante pelo Legends Stage.
                     <p/>O primeiro recorde havia sido estabelecido na Overpass, primeiro mapa, com 570 mil espectadores acompanhando a vitória da 
                        Imperial pelo placar de 25 a 23 na prorrogação. Tal marca fez com que Gaules virasse o streamer 
                        brasileiro na Twitch com maior audiência de todos os tempos, superando Casimiro Miguel, que alcançou 545 mil espectadores
                         enquanto exibia o documentário do Neymar.<p/>
                        Agora, os 710 mil consolida Gaules como a maior audiência de um streamer brasileiro em todas as plataformas,
                        já que ele ultrapassa o recorde de Felipe Neto no YouTube, que era de 600 mil pessoas assistindo simultaneamente.<p/>
                        Vale ressaltar que com a sobrevida da Imperial no PGL Major Antwerp, Gaules ainda pode alcançar um novo recorde na série decisiva. 
                        A equipe brasileira volta a jogar nesta terça-feira (17), quando enfrentará a Copenhagen Flames, valendo a vaga nos playoffs do mundial na Antuérpia.
                        <p/>
                        <h3>PGL Major Antwerp: Imperial vence Cloud9 em confronto emocionante</h3>
                        <p/>
                        Valendo a permanência no Legends Stage do PGL Major Antwerp, a Imperial encarou a Cloud9,
                         equipe formada pelos atletas da ex-Gambit, que pelo conflitos entre Rússia e Ucrânia, tiveram que sair da organização anterior, 
                         sendo contratados momentos antes do Major pela C9. Dentro do servidor, a Imperial venceu por 2-1 a série e seguiu viva na competição.
                          Já os russos, se despedem da Bélgica.</h2>
            
            </div>

            </div>
        
         </div>
        
    )

    }

export default Noticias;