import imaPaint from "../../../../public/assets/UT/card_habilit/paint.jpg";
import Image from "next/image";

import calendar from "../../../../public/assets/UT/icon-calendar.svg"
import clock from "../../../../public/assets/UT/money.svg"

import { useState} from "react";

const CardHab1=()=>{
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
       
            const { offsetX, offsetY } = e;
            const x = (offsetX / e.target.offsetWidth) * (e.target.scrollWidth - e.target.offsetWidth);
            const y = (offsetY / e.target.offsetHeight) * (e.target.scrollHeight - e.target.offsetHeight);
            setOffset({ x, y });       
        
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
            <Image className="img content" src={imaPaint} style={{ transform: `translate(${-offset.x}px, ${-offset.y}px)`}} alt="Post grande"/>
        </div>
        <div className="info">
        <div className="top-info">
            <span className="categorie">Manipulação Gráfica</span>
            <ul>
            <li>
                <Image src={calendar} alt="Icone de calendario"/>
                <span>2 a 40 dias</span>
            </li>
            <li>
                <Image src={clock} width={16} height={16} alt="Icone de Moeda"/>
                <span>100 a 2000R$</span>
            </li>
            </ul>
        </div>
        <h3 className="txt-white">Transmita sua imagiação com imagens exprecivas: Serviços de Manipulação Gráfica Sob Medida!</h3>
        </div>
    </a>
    )
}
export default CardHab1;