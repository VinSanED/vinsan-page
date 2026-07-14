import ImaIni from "../../../../public/assets/UT/card_habilit/spacingBACK.png";
import Image from "next/image";

import calendar from "../../../../public/assets/UT/icon-calendar.svg"
import clock from "../../../../public/assets/UT/money.svg"
import { useEffect, useState } from "react";

const CardHab0 = ()=>{
    const [transformValue, setTransformValue] = useState('')


    useEffect(()=>{

    const divIm = document.getElementById('ima');
    const ima = document.getElementById('imagem');

    const handleMouseMove = (e) => {        
        const { left, top, width, height } = divIm.getBoundingClientRect();

        let psx= e.clientX
        let psy= e.clientY

        let dx= ((psx-left)/width)*100
        let dy= ((psy-top)/height)*100
       
        let x = -(dx-50)
        let y = -(dy-50)
        requestAnimationFrame(()=>{
            console.log(`${x}%`, `${y}%`, 'of y')   
            document.getElementById('imagem').style.transform = `translateX(${x}%) translateY(${y}%) scale(1.5)`         
        })
          
    };
    const handleTouchMove = (e) => {
        const { left, top, width, height } = divIm.getBoundingClientRect();

        let psx= e.clientX
        let psy= e.clientY

        let dx= ((psx-left)/width)*100
        let dy= ((psy-top)/height)*100
       
        let x = -(dx-50)
        let y = -(dy-50)
        requestAnimationFrame(()=>{
            console.log(`${x}%`, `${y}%`, 'of y')   
            document.getElementById('imagem').style.transform = `translateX(${x}%) translateY(${y}%) scale(1.5)`         
        })
    };
       const moEnt=()=>{
        console.log('funci 3');document.getElementById('imagem').classList.add('active')
        console.log('efect exec moEnt')
    }
       const moLiv=()=>{
            requestAnimationFrame(()=>{
                ima.style.transform = 'scale(1)';
                console.log('efect execmolive')
            })
       }
       console.log('efect exec')
       
        ima.addEventListener("mouseenter", moEnt);
        divIm.addEventListener("mouseleave", moLiv);
        divIm.addEventListener("mousemove", handleMouseMove);

        ima.addEventListener("touchstart", moEnt);
        divIm.addEventListener("touchend", moLiv);
        divIm.addEventListener("touchmove", handleTouchMove);
        return () => {
            // Cleanup event listeners on component unmount
            ima.removeEventListener("mouseenter", moEnt);
            divIm.removeEventListener("mouseleave", moLiv);
            divIm.removeEventListener("mousemove", handleMouseMove);
      
            ima.removeEventListener("touchstart", moEnt);
            divIm.removeEventListener("touchend", moLiv);
            divIm.removeEventListener("touchmove", handleTouchMove);
          };
    
    },[])
    return(
        <a href="#"  className="card-post-lg">
            <div 
                id="ima" 
                className="image"           
            >
                <Image 
                    id="imagem"
                    className="img" 
                    src={ImaIni} 
                    alt="Post grande"
                />
            </div>
            <div className="info">
            <div className="top-info">
                <span className="categorie">tecnologia</span>
                <ul>
                    <li>
                        <Image src={calendar} alt="Icone de calendario"/>
                        <span>Melhor prazo</span>
                    </li>
                    <li>
                        <Image width={16} height={16}  src={clock} alt="Icone de calendario"/>
                        <span>Melhor preço</span>
                    </li>
                </ul>
            </div>
            <h3 className="txt-white">Sua presença digital começa aqui! websites interativos e responsivos, textos criativos e cativantes, imagens de alta qualidade.</h3>
            </div>
          
        </a>
    )
}

export default CardHab0