import { BtnSty } from "./btnSry";
import Image from "next/image";


export function BtnAbout({f,src}){ 
   
    return(
    <BtnSty className="circ">
        <div className="C1">
            <div className="C2">
                <button onClick={f} className="C3">
                    <Image className="I-ima" src={src} />
                </button>
            </div>
        </div>
    </BtnSty>
)}