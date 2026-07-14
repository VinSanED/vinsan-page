import { DivAboutSty } from "./divAboutSty";
import { BtnAbout } from "../btnAbout/btni";
import Image from "next/image";

export default function DivAbout({f,src}){
    return(
        <DivAboutSty id="da">
            <video style={{
                            width: '100vw',
                            height: '100vh',
                            objectFit: 'cover',
                            position: 'fixed',
                            top: 0,
                            left: 0, 
                            zIndex: -1
                        }} disablePictureInPicture autoPlay muted loop
            >
                <source src="/videos/tecVid.mp4" type="video/mp4" />
            </video>
            <div id="dab" className="CRi">
                <BtnAbout f={f} src={src}/>
            </div>
            <div id="dac" className="content">

            </div>
        </DivAboutSty>
    )
}