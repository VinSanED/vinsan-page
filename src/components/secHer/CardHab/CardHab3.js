import imaDev from "../../../../public/assets/UT/card_habilit/DEVout.jpg";
import Image from "next/image";

import calendar from "../../../../public/assets/UT/icon-calendar.svg"
import clock from "../../../../public/assets/UT/money.svg"

const CardHab3 = ()=>{
    
    return(
        
        <a href="#"  className="card-post-lg">
            <div className="image overflow-container" > 
                <Image className="img content" src={imaDev} alt="Post grande"/>
            </div>
            <div className="info">
            <div className="top-info">
                <span className="categorie">Desenvolvimento Web</span>
                <ul>
                <li>
                    <Image src={calendar} alt="Icone de calendario"/>
                    <span>5 a 60 dias</span>
                </li>
                <li>
                    <Image width={16} height={16} src={clock} alt="Icone de calendario"/>
                    <span>250 a 4000R$ </span>
                </li>
                </ul>
            </div>
            <h3 className="txt-white">Transforme suas ideias em Realidade Digital: Serviços de Desenvolvimento Web personalizado!</h3>
            </div>
        </a>
    )
}

export default CardHab3;