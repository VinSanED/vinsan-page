import { Conteiner } from "@/styles/globalSty"
import Image from "next/image"

import 'aos/dist/aos.css';

import { ArtSty, CardPost} from "./artPsty"


import ICCViewer from "./artigosEpub/ICdC.js"

import IArticle from "../../../public/assets/IconsArticle.svg";
import image_post01 from "../../../public/ArtigosEpubs/capas/ilustrandoCC.jpg";
import image_post02 from "../../../public/ArtigosEpubs/capas/prodSuper.jpg"
import image_post03 from "../../../public/ArtigosEpubs/capas/compHisto.jpg"
import { useEffect, useState } from "react";
import React from "react";


const ArtP  = ()=>{
    const [viewer, setViewer] = useState(<p>.</p>);
    const [texAN, setTexAN] = useState([])

    const fechar= ()=>{
        document.querySelector('body').classList.remove('overN')
        setViewer(<p>.</p>)} 

    const artigs = (uri)=>{
        console.log("uri:",uri)
        return(
            <div key={0} className="Eviewer">
                <button className="btnFech" onClick={fechar}> Sair </button>
                <ICCViewer className="iccViewer" epubFilePath={uri} /> 
            </div>
        )
    }

    const vizu = (tit)=>{

        document.querySelector('body').classList.add('overN')

        let uriEpub = {'ICC':"ArtigosEpubs/ilusCienComp.epub",
            'prodSuper':"ArtigosEpubs/ProdSuper.epub",
            'breIntHisComp':"ArtigosEpubs/BreIntroHistCom.epub"
        }
        if(tit==='ICC'){console.log(uriEpub.ICC); setViewer( artigs(uriEpub.ICC))}
        if(tit==='prodsuper'){setViewer(artigs(uriEpub.prodSuper))}
        if(tit==='breIntHisComp'){setViewer(artigs(uriEpub.breIntHisComp))}
    }

    const addAnimaTex = () =>{
        const ebreve = (<p key={texAN.length} className="animaTex">EM BREVE</p>) 
        setTexAN([...texAN, ebreve])
        console.log('AAA EXEC AQUI 1', texAN, texAN.length)   
    }
    useEffect(
        ()=>{
            console.log(texAN.length, 'EFECT')
            if(texAN.length>0){
                console.log('TIMEOUT', texAN.length)
               const timeOID = setTimeout(()=>{
                    setTexAN([])
                    console.log('TIMEOUT', texAN.length)
                },5000)
                return ()=>clearTimeout(timeOID)
            }
        },[texAN])
    const [isMob , setIsMob] = useState(false)
    
    useEffect(()=>{
       
        const bodyRectL = document.body.getBoundingClientRect().width;
        setIsMob(bodyRectL) 
    },[])

    return(
        <ArtSty id="artig" className="s-artigos">
            {viewer}
            <Conteiner className="container">
                <div className="top">
                    <h2>Artigos</h2>
                    <p>Leia meus artigos<Image className="img" width={50}  src={IArticle} alt=""/></p>
                </div>
                <div className="all">
                    <CardPost 
                        data-aos={isMob?"fade-up" : "zoom-in-up"}
                        data-aos-anchor-placement={isMob? "center-bottom" : "center-center"}
                        onClick={()=>{let tit="ICC";vizu(tit)}} 
                        className="card-post-default"
                    >

                    <div className="image">
                            <Image className="img"  src={image_post01} alt=""/>
                        </div>
                        <div className="info">
                            <span className="categorie">Ilustrando as Ciências da Computação</span>
                            <h6 className="txt-white">artigo didático ilustrativo, apresetação as Ciências da computação </h6>
                            <ul>
                                <li>
                                    <span>Abr, 2023</span>
                                </li>
                                <li>
                                    <span>10min de leitura</span>
                                </li>
                            </ul>
                        </div>
                    </CardPost>
                    <CardPost 
                        data-aos={isMob?"fade-up" : "zoom-in-up"}
                        data-aos-anchor-placement={isMob? "center-bottom" : "center-center"}
                        onClick={()=>{let tit="prodsuper";vizu(tit)}}  
                        className="card-post-default"
                    >
                        <div className="image">
                            <Image className="img"  src={image_post02} alt=""/>
                        </div>
                        <div className="info">
                            <span className="categorie">Prodsuper</span>
                            <h6 className="txt-white">como produzir mais, introdução ao mini manual  do homen produtivo</h6>
                            <ul>
                                <li>
                                    <span>Mai, 2023</span>
                                </li>
                                <li>
                                    <span>10min de leitura</span>
                                </li>
                            </ul>
                        </div>
                    </CardPost>
                    <CardPost 
                        data-aos={isMob?"fade-up" : "zoom-in-up"}
                        data-aos-anchor-placement={isMob? "center-bottom" : "center-center"}
                        onClick={()=>{let tit="breIntHisComp";vizu(tit)}} 
                        href="detalhes-post.html" className="card-post-default"
                    >
                        <div className="image">
                            <Image  className="img"  src={image_post03} alt=""/>
                        </div>
                        <div className="info">
                            <span className="categorie">História da Ciência da Computação</span>
                            <h6 className="txt-white">do Ábaco aos modernos computadores, como chegamos aqui?</h6>
                            <ul>
                                <li>
                                    <span>Mar, 2023</span>
                                </li>
                                <li>
                                    <span>20min de leitura</span>
                                </li>
                            </ul>
                        </div>
                    </CardPost>
                </div>
                {texAN.map((e,i)=>(
                    <React.Fragment key={i}>{e}</React.Fragment>
                ))}
                <button 
                    data-aos="fade-up"
                    delay="500"
                    onClick={()=>{addAnimaTex()}} 
                    className="btn-primary" 
                >Carregar mais</button>
            </Conteiner>
        </ArtSty>

    )
}

export default ArtP;