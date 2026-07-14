import { FootSty } from "./footSty"
import Image from "next/image";
let vinsanLog = "/VinSanLogg.svg"
let arrow = 'assets/UT/arrow-up.svg'

let likedinLog = "assets/contact_icon/linkedin.svg"
let faceLog =  "assets/contact_icon/facebook-color-svgrepo-com.svg"
let ytubeLog = "assets/contact_icon/youtube.svg"
let mailLog = "assets/contact_icon/email-9-svgrepo-com.svg"
let whatsLog = "assets/contact_icon/whatsapp-128-svgrepo-com.svg"
let aten = "assets/contact_icon/atencao.svg"
import { useEffect } from "react";

const Foot = ()=>{
    
    const rotação = ()=>{
        const setinha = document.getElementById('Setinha')
        setinha.classList.toggle('rodar')
    }

    useEffect(()=>{
        const observerIntersec = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("ativo")
                entry.target.querySelector('.container').classList.add('ativo')
                entry.target.querySelectorAll('li').forEach((lis)=>{
                    lis.classList.add('ativo');
                })
               
            } else {
                console.log('desativo')
                entry.target.querySelector('.container').classList.remove('ativo')
                entry.target.querySelectorAll('li').forEach((lis)=>{
                    lis.classList.remove('ativo');
                })              
              }
            });
        });

        const section = document.querySelector('.secFot');
        observerIntersec.observe(section);
        console.log("!!svg!!: ",aten)
        return () => {
            observerIntersec.unobserve(section);
        };
    },[])

    return(
        <FootSty id="fote" className="secFot">
            <div className="container">
                <div className="left-footer">
                    <strong>©2023 VinSan.ED</strong>
                    <p>Meu nome é Vinicius Sanches, sou editor e desenvolvedor de conteúdo web-informacional. Estudar 📚 , trabalhar 🛠 e contribuir 🤝 são os pilares que sustentam minha jornada. Estou comprometido com o constante aprimoramento dos meus saberes, aplicando-os em meus trabalhos e buscando uma contribuição mútua para a construção de um mundo melhor 🌎🤝☮.</p>
                </div>
                <div className="right-footer">
                    <div className="group">
                        <span>Dev</span>
                        <a href="/cardPage"><Image id="LOGOf" width={250} height={100}  src={vinsanLog} alt=""/></a>
                    </div>
                    <button type="button" onClick={()=>{rotação()}} id="js-btn-scroll-top">
                        <Image width={35} height={25} id='Setinha' src={arrow} alt=""/>
                    </button>
                </div>
            </div>
            <div className="contato">
                <ul>
                    <li className="C1">
                        <Image src={mailLog} width={40} height={40} alt="Email"/>
                        <strong><a>Email: </a>VinSan.ed@proton.me</strong>
                    </li>
                    <li className="C2">
                        <Image src={whatsLog} width={40} height={40} alt="Telefone"/>
                        <strong><a href="https://chat.whatsapp.com/KbYkCTOLzHkBlhTT9dOGLR" target="_blank">telefone: (93)992283745</a></strong>
                    </li>
                    <li className="C3">
                        <Image src={likedinLog} width={40} height={40} alt="linkedin logo"/>
                        <strong><a target="_blank" rel="linkedin path" href="https://www.linkedin.com/in/vinicius-sanches-88aa27218" >perfil Linkedin</a></strong>
                    </li>  
                    <li className="C4">
                        <Image src={faceLog} width={40} height={40} alt="facebook"/>
                        <strong><a href="https://www.facebook.com/profile.php?id=61553152607144" target="_blank">pagina facebook</a></strong>
                    </li>  
                    <li className="C5">
                        <Image src={ytubeLog} width={40} height={40} alt="youtube"/>
                        <strong><a href="https://www.youtube.com/channel/UCycsaYplLmm7-ESBrvJtJeg" target="_blank">canal You-Tube</a></strong>
                    </li>
                    <li className="C6">
                        <Image src={aten} width={40} height={40} alt="relatar erro"/>
                        <strong><a href="https://wa.me/93992283745">relate um erro</a> </strong> 
                    </li>
                </ul>
            </div>
        </FootSty>  
    )
}

export default Foot;