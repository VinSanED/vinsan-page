import post01 from "../../../../../public/assets/UT/modaPost/PostPublicidade.jpeg"
import Image from "next/image";
import ModalPaint1 from "./ModalPaints/pModal1";

const Paint1 = ({sair, setSair, setViewMod })=>{
    const Modal1 = (<ModalPaint1 setSair={setSair}/>)
    const handMoveMod = ()=>{
        if(sair==="sairBTN1"){
            setSair('sair')
        }else{
            setSair('sairBTN1')
            setTimeout(()=>{
                setViewMod(Modal1);
            },400)
        }       
   } 
 
    return(
        <button onClick={handMoveMod}  className="card-post-xs">
            <div className="image">
                <Image className="img" src={post01} alt="Image do primeiro post pequeno"/>
            </div>
            <div className="info">
                <span className="categorie">Publicidade</span>
                <h6 className="txt-white">Construção de conteúdo Visual para négocios, iniciativas e projetos gerais. Marketing e Propaganda.</h6>
                <ul>
                    <li>
                    <span>2 a 20 dias</span>
                    </li>
                    <li>
                    <span>100 a 1000R$</span>
                    </li>
                </ul>
            </div>
        </button>
    ) 
}


export default Paint1;