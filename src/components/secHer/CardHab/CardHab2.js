import imaWri from "../../../../public/assets/UT/card_habilit/WRITE.png";
import Image from "next/image";

import calendar from "../../../../public/assets/UT/icon-calendar.svg"
import clock from "../../../../public/assets/UT/money.svg"

import { useState } from "react";

const CardHab2 = ()=>{
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (e) {
            const { offsetX, offsetY } = e;
            const x = (offsetX / e.target.offsetWidth) * (e.target.scrollWidth - e.target.offsetWidth);
            const y = (offsetY / e.target.offsetHeight) * (e.target.scrollHeight - e.target.offsetHeight);
            setOffset({ x, y });
        }
        
    };

    const handleTouchMove = (e) => {
        if (e.nativeEvent) {
            const touch = e.touches[0];
            const x = (touch.clientX / e.target.offsetWidth) * (e.target.scrollWidth - e.target.offsetWidth);
            const y = (touch.clientY / e.target.offsetHeight) * (e.target.scrollHeight - e.target.offsetHeight);
            setOffset({ x, y });
        }   
    };

    return(
        <a href="#"  className="card-post-lg">
            <div className="image overflow-container" onMouseMove={handleMouseMove} onTouchMove={handleTouchMove}>
                <Image className="img content" style={{ transform: `translate(${-offset.x}px, ${-offset.y}px)`}} src={imaWri} alt="Post grande"/> 
            </div>
            <div className="info">
            <div className="top-info">
                <span className="categorie">Manipulação Textual</span>
                <ul>
                <li>
                    <Image src={calendar} alt="Icone de calendario"/>
                    <span>2 a 20 dias</span>
                </li>
                <li>
                    <Image width={16} height={16} src={clock} alt="Icone de calendario"/>
                    <span>50 a 1000R$</span>
                </li>
                </ul>
            </div>
            <h3 className="txt-white">Desperte o Poder das Palavras: Serviços de Manipulação Textual Exclusivos!</h3>
            </div>
        </a>
    )
}

export default CardHab2;