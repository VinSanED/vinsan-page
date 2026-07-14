import { Conteiner } from "@/styles/globalSty";
import { SecHe, Wi, De  } from "./secHerSty"
import Image from "next/image";


import post01 from "../../../public/assets/UT/card_habilit/paint.jpg"
import post02 from "../../../public/assets/UT/card_habilit/WRITE.png"
import post03 from "../../../public/assets/UT/card_habilit/DEVout.jpg"


import { React , useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

import CardHab0 from "./CardHab/CardHab0";
import CardHab1 from "./CardHab/CardHab1";
import CardHab2 from "./CardHab/CardHab2";
import CardHab3 from "./CardHab/CardHab3";

import Write1 from "./btnsHab/wiriteHab/write1";
import Write2 from "./btnsHab/wiriteHab/write2";
import Write3 from "./btnsHab/wiriteHab/write3";

import Dev1 from "./btnsHab/devHab/dev1";
import Dev2 from "./btnsHab/devHab/dev2";
import Dev3 from "./btnsHab/devHab/dev3";

import Paint1 from "./btnsHab/paintHab/paint1";
import Paint2 from "./btnsHab/paintHab/paint2";
import Paint3 from "./btnsHab/paintHab/paint3";


const SecHer = ()=>{
    const [sair,setSair]= useState('sair');

    const ArrHab = [(<CardHab0 data-aos="zoom-in-down"  key={0}/>), (<CardHab1 key={1}/>), (<CardHab2 key={2}/>), (<CardHab3 key={3}/>)]

    const [leftCont, setLeftCont] = useState(ArrHab[0]) 

    const [pisk, setPisk] = useState(false)

    const [btns,setBtns ] = useState('')
    const [isIniBTN, setIsIniBTN]=useState(true)
    const [isWiriteBTN, setIsWiriteBTN]=useState(false)
    const [isPaintBTN, setIsPaintBTN]=useState(false)
    const [isDevBTN, setIsDevBTN]=useState(false)
   
    const loope = (i, indis, leftCont)=>{
        let cc = leftCont
        const but1 = document.querySelector("#b1");
        const but2 = document.querySelector("#b2");
        const but3 = document.querySelector("#b3");
        setPisk(false);
        if(i===indis){        
            if(i===1){but1.classList.toggle("active");setIsPaintBTN(true)}else{setIsPaintBTN(false);but1.classList.remove("active")}
            if(i===2){but2.classList.toggle("active");setIsWiriteBTN(true)}else{setIsWiriteBTN(false);but2.classList.remove("active")}
            if(i===3){but3.classList.toggle("active");setIsDevBTN(true)}else{setIsDevBTN(false);but3.classList.remove("active")}
            
            if(cc.key===ArrHab[i].key){
                console.log(cc.key,ArrHab[i].key);
                setLeftCont(ArrHab[0]);
                setIsPaintBTN(false);
                setIsDevBTN(false);
                setIsWiriteBTN(false);
                setIsIniBTN(true)
            }else{
                setIsIniBTN(false);
                console.log(cc.key,ArrHab[i].key, 'salada');
                setLeftCont(ArrHab[i])
            }            
        }else{
                console.log('não indis', i, "!=", indis)
        }
    }
    
    const HandFunc = (indis) => {
        ArrHab.forEach(function( e,i) {
            setPisk(true);
            setTimeout(()=>{
                loope(i, indis, leftCont)
            },600)
            
        })
    }

    const iniBTN = [
        (
            <button 
                key={0} 
                onClick={()=>{let indis=1; HandFunc(indis)}} 
                className="card-post-xs" 
            >
                        <div className="image">
                            <Image className="img" src={post01} alt="imagem manipulação gráfica, design"/>
                        </div>
                        <div className="info">
                            <span className="categorie">Manipulação Gráfica</span>
                            <h6 className="txt-white">Dê vida às suas ideias com nossos seviços de manipulação gráfica</h6>
                            <ul>
                                <li>
                                <span>Ilustração</span>
                                </li>
                                <li>
                                <span>Composição</span>
                                </li>
                            </ul>
                        </div>
            </button>
        ),
        (
            <button 
                key={1} 
                onClick={()=>{let indis=2; HandFunc(indis)}} 
                className="card-post-xs" 
            >
                        <div className="image">
                            <Image  className="img" src={post02} alt="imagem manipulação de texto, copywrite, ghost write, creative write"/>
                        </div>
                        <div className="info">
                        <span className="categorie">Manipulação textual</span>
                        <h6 className="txt-white">Precisa de um escritor? Edite e aperfeiçoe seu conteúdo aqui!</h6>
                        <ul>
                            <li>
                            <span>Edição</span>
                            </li>
                            <li>
                            <span>Redação</span>
                            </li>
                        </ul>
                        </div>
            </button>
        ),
        (
            <button 
                key={2} 
                onClick={()=>{let indis=3; HandFunc(indis)}} 
                className="card-post-xs" 
            >
                        <div className="image">
                            <Image className="img" src={post03} alt="imagem web desenvolvimento"/>
                        </div>
                        <div className="info">
                        <span  className="categorie">Web-Developing</span>
                        <h6 className="txt-white">Codificação de ponta, Desenvolvimento web personalizado </h6>
                        <ul>
                            <li>
                                <span>FrontEnd</span>
                            </li>
                            <li>
                                <span> - </span>
                            </li>
                        </ul>
                        </div>
            </button>
        )
    ]
    const VinSan = (
        <span className="categorie">VinSan.ed</span>
    )
   
    const [viewMod, setViewMod] = useState(VinSan)
    useEffect(()=>{
        const devs = [(<Dev1 setSair={setSair} sair={sair} setViewMod={setViewMod}  key={0}/>),(<Dev2 setSair={setSair} sair={sair} setViewMod={setViewMod}  key={1}/>),(<Dev3 setSair={setSair} sair={sair} setViewMod={setViewMod}  key={2}/>)];
        const writes = [(<Write1 setSair={setSair} sair={sair} setViewMod={setViewMod}  key={0}/>),(<Write2 setSair={setSair} sair={sair} setViewMod={setViewMod}  key={1}/>),(<Write3 setSair={setSair} sair={sair} setViewMod={setViewMod}  key={2} />)];
        const paints = [ ( <Paint1 setSair={setSair} sair={sair} setViewMod={setViewMod} key={0} />),( <Paint2 setSair={setSair} sair={sair} setViewMod={setViewMod} key={1}/>),(<Paint3 setSair={setSair} sair={sair} setViewMod={setViewMod} key={2} />)];

        if(isIniBTN){setBtns(iniBTN);console.log('INI: ', isIniBTN)};
        if(isDevBTN){setBtns(devs);console.log('DEV: ',isDevBTN);};
        if(isWiriteBTN){setBtns(writes);console.log('Write: ',isWiriteBTN)};
        if(isPaintBTN){setBtns(paints); console.log('PAINT: ',isPaintBTN)};
    },[isIniBTN, isDevBTN, isPaintBTN, isWiriteBTN, sair])
   
    const [aparecido, setAparecido]=useState(true) 
    const moveMod = ()=>{
            setAparecido(false);
            setTimeout(()=>{
                setAparecido(true)
                if(sair==='sair'){
                    setViewMod(VinSan)
                }
            },400)
    }
    useEffect(()=>{
        moveMod()
    },[sair])
   useEffect(()=>{
    Aos.init({
        offset:120,
        delay:100,
        easing:'ease',
        duration:2000
    })
   })
    return(
    <SecHe  id="secHer" className="s-hero-post">
        <Conteiner  className="container"> 
            <div   className="left-container">
                <div className="title">
                    <div className={`mod ${aparecido ? 'apareça' : 'suma'} ${sair!=='sair'? 'modal': 'span'}`} >{viewMod}</div>
                    <h2>Transformando idéias em conteúdo</h2>  
                </div>
                <div className="carButs" >
                    <button id="b1" onClick={()=>{let indis=1; HandFunc(indis);setSair('sair')}}>
                        <Desi  width={25} heigth={25} />
                    </button>
                    <button id="b2" onClick={()=>{let indis=2; HandFunc(indis);setSair('sair')}}>
                        <Wit  width={25} heigth={25}  />
                    </button>
                    <button id="b3" onClick={()=>{let indis=3; HandFunc(indis);setSair('sair')}}>
                        <Dev  width={25} heigth={25} />
                    </button>
                </div>
                <div className={`divCar ${pisk ? 'pisk' : ''}`}>{leftCont}</div>
            </div>
            <div data-aos="fade-left" className="right-container">
                <h4>como posso te ajudar?</h4>
                <div className="all">
                    <div className={`item-post but ${pisk ? 'pisco1' : ''}`} >
                        {btns[0]}
                    </div>
                    <div className={`item-post but ${pisk ? 'pisco2' : ''}`} >
                        {btns[1]}
                    </div>
                    <div className={`item-post but ${pisk ? 'pisco3' : ''}`} >
                        {btns[2]}
                    </div>
                </div>
            </div>
        </Conteiner>  
    </SecHe>
       
)}

export default SecHer;




