import post01 from "../../../../../public/assets/UT/modaPost/wappPost.jpg"
import Image from "next/image";
import ModalDev3 from "./ModalDevs 2/dModal3";

const Dev3 = ({ sair, setSair, setViewMod })=>{
    const Modal3 = (<ModalDev3 setSair={setSair}/>)
    const handMoveMod = ()=>{
        if(sair==="sairBTN3"){
            setSair('sair')
        }else{
            setSair('sairBTN3')
            setTimeout(()=>{
                setViewMod(Modal3);
            },400)
        }
   } 
    return(
        <button onClick={handMoveMod} className="card-post-xs">
            <div className="image">
                <Image className="img" src={post01} alt="Image do primeiro post pequeno"/>
            </div>
            <div className="info">
                <span className="categorie">Web-aplicativo</span>
                <h6 className="txt-white">sistema de aplicação específica com conteúdo interativo e dinâmico.</h6>
                <ul>
                    <li>
                    <span>20 a 60 dias</span>
                    </li>
                    <li>
                    <span>1000 a 4000R$</span>
                    </li>
                </ul>
            </div>
        </button>
    )
}

export default Dev3;