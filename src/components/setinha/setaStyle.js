import { styled } from "@/styles/Styindex"

export const SetaSty = styled('svg',{
    cursor: "pointer",
    transformOrigin: "center",
    "&:hover":{
        stroke:"lime",
    }
})
export const BacSeta = styled('div',{
    position: 'fixed', 
    top: '5px',
    right: '12px',
    width: '40px',
    height: "40px",
    backgroundColor:'rgba(0,0,0,0.4)',
    border: "solid 0.5px cyan",
    borderRadius:"50%",
    zIndex: "21",
    "&:hover":{
        padding:'0.5rem',
        backgroundColor:"rgba(0,0,0,0.8)",
        border: "solid 0.5px lime",
    },
    ".scroll":{
        display:'block'
    },
    "@tablet":{
        left:'83.8%',
        top:'80%'
    }
})