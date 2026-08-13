import Image from "next/image"
import { PagCartão } from "./cardSty"


import setModa  from "../../../../public/assets/setModa.svg"
import likedinLog from "../../../../public/assets/contact_icon/linkedin.svg"
import faceLog from "../../../../public/assets/contact_icon/facebook-color-svgrepo-com.svg"
import gitIcon from "../../../../public/assets/UT/iconsTech/github1.svg"
import QRc from "./codeQR.js"

import circ4 from "@/../public/assetsCard/circ4.svg"
import ex4 from "@/../public/assetsCard/ex4.svg"

import Iserius from "../../../../public/assetsCard/iserius.png"
import DivAbout from "./divAbout/divAbout"
import { BtnAbout } from "./btnAbout/btni"

import { useEffect, useState } from "react"


const Card = ()=>{ 
    


    const formattedMessage = 'Vamos%20falar%20sobre%20tecnologia?'
    const phoneNumber = '+559392283745'
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${formattedMessage}`
    
    const [divAtiv, setAtive] = useState(false)

    useEffect(()=>{
        if(divAtiv){
            let dab = document.getElementById("dab")
            let dac = document.getElementById("dac")
            let da = document.getElementById("da")

            dab.classList.add('active')
            dac.classList.add('active')
            da.classList.add('active')
           
        }else{
            let card = document.getElementById("cartao")
            card.classList.add('active')
            
        }  
    },[divAtiv])

    const movCenterBtn = ()=>{   
        
        if(divAtiv){
            let dab = document.getElementById("dab")
            let dac = document.getElementById("dac")
            let da = document.getElementById("da")
            dab.classList.remove('active')
            dac.classList.remove('active')
            da.classList.remove('active')
            setTimeout(()=>{
                setAtive(false)
            },1000)
        }else{
            let card = document.getElementById("cartao")
            card.classList.remove('active')
            setTimeout(()=>{
                setAtive(true)
            },1000)
        }    
    }
    let uri = circ4;
    let aboutMe = [
        (
            <p id="paraPrim" >VinSan.ed</p>
        ),
        (
            <DivAbout f={movCenterBtn} src={ex4} key={1}/>
        )
    ]

   

    return(
        <PagCartão>
            {divAtiv?aboutMe[1]:
           (<div id="cartao" >
                <div className="cabeça">
                    <div className="CLe">
                        <div className="Tcont">
                            <div className="panel">
                                <ul>
                                    <li className="itemL"><div><p>Redação e edição de textos, Conteúdo para blogs, Copy-Writing,  Ghost-Writing, Creative-Writing, Escrita-Técnica, Relatórios, Artigos, Pesquisas.</p></div> <span>Manipulação textual</span> <Image src={setModa} className="imaSeta" alt="seta modal"/></li>
                                    <li className="itemL"><div><p>Edição de imagens, Composição Gráfica, ilustração Gráfica, Design de Logo-marca, Cartões de visita, Baners, Cartazes, flyer’s, folter’s, Infográficos, Desenho Técnico, Artes Digitais </p></div> <span>Manipulação Gráfica</span> <Image src={setModa} className="imaSeta" alt="seta modal"/></li>
                                    <li className="itemL"><div><p>Análise de Requisitos, Gestão de web-Projetos, Testes de web-sistemas, Suporte e Manutenção de web-sistemas</p></div> <span>Análise de sistemas</span> <Image src={setModa} className="imaSeta" alt="seta modal"/></li>
                                    <li className="itemL"><div><p>web-pages - paginas estáticas e dinamicas; web-sites – Institucional, Blog, Portifólio; web-app's - sistemas dedicados, E-commerce, Rede-social e chat ao vivo, Game, plataformas de analise e gerenciamento, plataformas E-Learnig(EAD).</p></div> <span>Desenvolvimento web</span> <Image src={setModa} className="imaSeta" alt="seta modal"/></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Bcont">
                            <div className="Lcont" >
                                <div>
                                    <a target="_blank" rel="noreferrer" href='https://github.com/vinsaned' className="relogs"><Image className="imaRL" src={gitIcon} alt="github logo"/></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vinsan631" className="relogs"><Image className="imaRL" src={likedinLog} alt="linkedin logo"/> </a>
                                    <a href="https://www.facebook.com/profile.php?id=61553152607144" target="_blank" className="relogs"> <Image className="imaRL" src={faceLog} alt="facebook logo"/></a>
                                </div>
                            </div>
                            <div className="Rcont">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="CRi">
                        <BtnAbout f={movCenterBtn} src={uri} />
                        <div className="rec" key={0}>
                            <span >Vinicius Sanches</span>
                            <strong>Desenvolvedor de software</strong>
                        </div>
                    </div>
                </div>
                <div className="pé">
                    <div className="lLPe">
                        <div className="LPe"><h5>vinsan.ed@proton.me</h5><h5>vinsan-page.vercel.app</h5></div>
                    </div>
                    <div className="rRPe">
                        <div className="RPe"> 
                            <div className="text">
                                <h4>Vamos conversar sobre tecnologia?</h4>
                            </div>
                            <div className="code">
                                <QRc data={whatsappLink} />
                            </div> 
                        </div>
                    </div>
                </div>
            </div>)}    
        </PagCartão>    
    )
}

export default Card
