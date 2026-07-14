import { styled } from "@stitches/react";

import cc1 from "../../../../../public/assetsCard/circ1.svg"
import cc2 from "../../../../../public/assetsCard/circ2.svg"
import cc3 from "../../../../../public/assetsCard/circ3.svg"


let C1 = cc1.src
let C2 = cc2.src
let C3 = cc3.src

export const BtnSty = styled('div',{
    height:"100%",
    width:'100%',
    paddingBottom: '0.5rem',
    ".C1":{     
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundImage:`url(${C1})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
        width:'100%',
        height:'100%',
        transition:'all 1s ease',
        
        ".C2":{   
            transition:'all 1s ease',  
            backgroundImage:`url(${C2})`,
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'contain',
            width:'60%',
            height:'60%',
            transform:'translateX(0.2rem)',
            display:"flex",
            justifyContent:"center",
            alignItems:'center',
            ".C3":{
            transition:'all 1s ease',  
            backgroundImage:`url(${C3})`,
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'contain',
            width:'80%',
            height:'80%',
            display:"flex",
            justifyContent:"center",
            alignItems:'center',
            ".I-ima":{
                width:'50%',
                height:'50%',
                transition:'all 1s ease',
                opacity: '0.5',
            }
            }
        },
        "&:hover":{
            transform:'rotate(80deg)',
            ".C2":{
                transform:'rotate(-160deg)',
                ".C3":{
                    transform:'rotate(90deg) translateX(-2px)',
                    ".I-ima":{
                        transform:'rotate(-10deg) ',
                        scale:3,
                        opacity:1
                    }
                }
            }
        },
    }
})