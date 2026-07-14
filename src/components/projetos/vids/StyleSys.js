import { styled } from "@/styles/Styindex"

export const SysInfSty = styled('section', {
    position:'fixed',
    top:0,
    left:0,
    zIndex:10000,
    backgroundSize:"cover",
    backgroundPosition:"center",
    height:"100vh",
    padding:'5rem',
    backgroundColor: 'rgba(0,0,0,0.4)',
    width:"100%",
    overflow:"auto",
    borderBottom:"solid 2px blue",
    display:"flex",
    flexDirection: "column",
    button:{
        fontFamily:"fangsong",
        fontWeight:'bold',
        fontSize:"18pt",
        color:"rgba(5,255,5,1)",
        background:'rgba(0,255,255,0.2)'
    },
    ".textDiv":{
        padding:"5rem",
        display:"flex",
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderTop:"solid 4px cyan",
        p:{ 
            textAlign:'center',
            fontSize: "18px",
            color:"rgba(0, 250,250, 0.9)",
            marginTop:"2rem"
        },
        h2:{
            textAlign:"center",
            fontSize:"20px",
            color:"cyan",
        }

    },
    ".divVid":{
        marginTop:"5rem",
        ".thumb":{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            margin:"0 auto",
            height:'50vh',
            width:"50%",
            backgroundSize:"cover",
            backgroundPosition:"center",
            borderRadius:"5px",
            border:"solid 2px cyan",
            button:{
                border:"solid 1px cyan",
                backgroundColor:"transparent",
                padding:"1rem 0rem 1rem 1.5rem",
                borderRadius:"50%",
                transition:"all .2s ease",
                "&:hover":{
                    scale:1.1,
                }
            }

        }
    },
    ".divVid.ativo":{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        position:"fixed",
        left:0,
        top:0,
        zIndex:2000,
        height:"100vh",
        width:"100%",
        backgroundColor:"$blackOpa",
        ".btnFechar":{
            width:"100%",
            height:"2.6rem",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"rgba(255,255,255,0.2)",
            button:{
                padding:"1rem",
                textAlign:"center",
                color:"lime",
                fontSize:"15pt",
                borderRadius: "10px",
                backgroundColor:"$blackOpa",
                width:"22rem",
                
            }
        }
    },
    ".divVideo":{
        height:"100vh",
        maxWidth:"100%",
        backgroundColor:"$blackOpa",

        ".video" :{
            width:"100%",
            height:"100%",
            backgroundColor: 'rgba(0,0,0,0.4)',
        }
    },
    "@tablet":{
        ".thumb":{
            height:'50vh !important',
            width:"90vw !important",
        },
        p:{
            fontSize:'14pt !important'
        },
        

    },   
    "@mobile":{
        ".thumb":{
            height:"35vh !important"
        },
        
        p:{
            fontSize:'12pt !important'
        }
    }  


} )