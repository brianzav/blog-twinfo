import React from "react";
import Trailer from '../assests/trailer.mp4'
import '../components/Main.css'


const Main = () =>{
    return(
        <div className='main'>
            <video src={Trailer} autoPlay loop/>

        </div>
    )
}

export  default Main