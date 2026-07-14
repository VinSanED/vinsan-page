import { styled } from "@stitches/react"

export const DivAboutSty= styled("div", {
    width:"100vw",
    height:"100vh",
    position:"fixed",
    overflow:'auto',
    top:"0",
    left:"2000",
    zIndex:100,
    transition:"ease 1.5s all",
    opacity:'0',
    "&.active":{
        opacity:'1'
    },
    
    ".CRi":{
        transition:"ease 0.5s all",
        padding:'0.5rem',
        width:'10rem',
        height:'15rem',
        transform:'scale(0.1)',
        "&.active":{
            transform:'scale(1)'
        },
    },
    ".content":{
        position:'relative',
        width:'90%',
        height:"200%",
        backgroundColor:'rgba(0,100,100,0.8)',
        bottom:'5%',
        left:"5%",
        borderRadius:'5%',
        transition:"ease 1s all",
        left:"-2000px",
        "&.active":{
            left:"50px",
        },
    }
})    