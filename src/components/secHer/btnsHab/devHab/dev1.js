import post01 from "../../../../../public/assets/UT/modaPost/landPost.jpg"
import Image from "next/image";
import ModalDev1 from "./ModalDevs 2/dModal1";

const Dev1 = ({sair, setSair, setViewMod })=>{
    const Modal1 = (<ModalDev1 setSair={setSair}/>)
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
        <button  onClick={handMoveMod} className="card-post-xs">
            <div className="image">
                <Image className="img" src={post01} alt="Image do primeiro post pequeno"/>
            </div>
            <div className="info">
                <span className="categorie">Landing Page</span>
                <h6 className="txt-white">paginas estáticas, com foco no seu objetivo.</h6>
                <ul>
                    <li>
                    <span>5 a 10 dias</span>
                    </li>
                    <li>
                    <span>250 a 500R$</span>
                    </li>
                </ul>
            </div>
        </button>
    )
}
export  default Dev1;