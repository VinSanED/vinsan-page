import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const VidPlay = ({IDVid }) => {

    const[viewW, setViewW] = useState('')
    const[viewH, setViewH] = useState('')
    useEffect(()=>{
        let vWid = window.innerWidth
        let vHei = window.innerHeight
        setViewW(vWid)
        setViewH(vHei)
    },[])
    console.log(viewW, viewH, "vWid aqui")

    const Medidas =()=>{
        let proporX = 64/39
        let proporY = 39/64
        let alt
        let lar
        if(viewW>920){
            alt = viewH/2 ;
            lar = alt*proporX ;
        }else{
            lar = viewW ;
            alt = proporY*lar
        }
        return {alt, lar}        
    }
    
    let MedY = Medidas().alt
    let MedX = Medidas().lar
    console.log(MedX, MedY,'ei DOIDO , TÁ FAZENDO O QUE VÉI')
    const opts = {
        height: `${MedY}`,
        width: `${MedX}`,
        playerVars: {
          autoplay: 1,
        },
      };
    
      const _onReady = (event) => {
        // Acessa o player no evento 'onReady' e executa funções como playVideo, pauseVideo, etc.
        event.target.pauseVideo();
      };
      

  return <YouTube videoId={IDVid} opts={opts} onReady={_onReady} />;
};

export default VidPlay;