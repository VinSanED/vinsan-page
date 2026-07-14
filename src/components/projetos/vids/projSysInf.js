import React, { useEffect, useState } from "react";

import ReactPlayer from 'react-player';

import { SysInfSty } from "./StyleSys";

import Image from "next/image";

import vidBut from "../../../../public/vidButo.svg";
import { projetos } from "./projs";
import VidPlay from "./youPlayer";



const SysInf = ({nun}) =>{

    let projetoAtual = projetos[nun]

    const [vid, setVid] = useState('')
    const [isPlay, setIsPlay] = useState('')
    
    

    let Title = projetoAtual.text.title;
    let Para1 = projetoAtual.text.p1;
    let Para2 = projetoAtual.text.p2;
    let VideUrl = projetoAtual.vidUrl;
    let BackVid = projetoAtual.backIma;
    
    useEffect(()=>{ 
        let Thumb = projetoAtual.thumbIma;
        console.log(Thumb)
        let exibição = [
            (
                <div key={0} style={{backgroundImage:`url(${Thumb})`}} className="thumb">
                    <button
                        onClick={
                            ()=>{setIsPlay(true)}
                        }   
                    >
                        <Image width={60} height={60} alt="botão de video" src={vidBut}/>
                    </button>
                </div>
            ),
            (
                <VidPlay IDVid={VideUrl} />
             
            )
        ]    
    
       
         
        
        if(isPlay){
            document.querySelector('.divVid').classList.add('ativo')
            setVid(exibição[1])
        } else {
            document.querySelector('.divVid').classList.remove('ativo')
            setVid(exibição[0])
        }
        console.log(vid)
    }, [isPlay]
    )
    const systP = document.getElementById('SysInf')
    function fechar(){
        systP.parentNode.classList.add('fechar')
    }
    return(
        <SysInfSty style={{backgroundImage:`url(${BackVid})`,}} id="SysInf">
            <button onClick={fechar}>FECHAR</button>
            <div className="textDiv">
                <div>
                    <h2>{Title}</h2>
                    <p>{Para1}</p>
                    <p>{Para2}</p>
                </div>
            </div>
            
            <div className="divVid">
            {
                 isPlay && (
                    <div className="btnFechar" >
                        <button onClick={
                            ()=>{setIsPlay(false)}
                        }
                        >FECHAR</button>
                    </div>)
                }
                <div style={{paddingBottom:'6rem'}}>{vid}</div>
            </div>    
               
        </SysInfSty>

    )
}

export default SysInf;