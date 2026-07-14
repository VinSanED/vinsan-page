import post01 from "../../../../../public/assets/UT/modaPost/sitepos.jpg"
import Image from "next/image";
import ModalDev2 from "./ModalDevs 2/dModal2";

const Dev2 = ({ sair, setSair, setViewMod })=>{
    const Modal2 = (<ModalDev2 setSair={setSair}/>)
    const handMoveMod = ()=>{
        if(sair==="sairBTN2"){
            setSair('sair')
        }else{
            setSair('sairBTN2')
            setTimeout(()=>{
                setViewMod(Modal2);
            },400)
        }
   } 
    return(
        <button onClick={handMoveMod} className="card-post-xs">
            <div className="image">
                <Image className="img" src={post01} alt="Image do primeiro post pequeno"/>
            </div>
            <div className="info">
                <span className="categorie">Web-Site</span>
                <h6 className="txt-white">Paginas dinâmicas especialmente feitas para exibir o seu conteúdo.</h6>
                <ul>
                    <li>
                    <span>15 a 40 dias</span>
                    </li>
                    <li>
                    <span>750 a 2000R$</span>
                    </li>
                </ul>
            </div>
        </button>
    )
}
export default Dev2;