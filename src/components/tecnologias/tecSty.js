import { styled } from "@/styles/Styindex";
import backTec from "../../../public/assets/walPaperSecTec.jpg"

export const TecSty = styled("section",{
    background:`url(${backTec.src}) no-repeat center center`,
    padding:"1rem 2rem 1rem 2rem",
    height:"60rem",
    display:"flex",
    justifyContent:'center',
    alignItems:"center",
    
    ".tecDesc":{
      overflow:'auto',
      zIndex:100,
      width:'100%',
      height:'100vh',
      position:'fixed',
      padding:'5rem 2rem 5rem 2rem',
      top:0,
      left:0,
      backgroundColor:'rgba(0,0,0,0.8)',
      display:'flex',
      alignItems:'start',
      justifyContent:'start',
      flexDirection:'column',
      ".imagemM":{
        padding:'2rem 0rem',
        width:'100vw',
        height:'auto',
        display:'flex', 
        alignItems:'center', 
        justifyContent:'center',
        ".mathIma":{
          width:'60%',
          height:'auto',
        }
      },
      ".butSair":{
        padding:'0.5rem 2rem 0.5rem 2rem',
        width:'100%',
        border:'solid 1px cyan',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        a:{
          color:'white',
          fontWeight:'bold',
          fontSize:'10pt',
          "&:hover":{
            color:'cyan',
            scale:1.2
          }

        },
        button:{
          color:'white',
          fontWeight:'bold',
          fontSize:'10pt',
          "&:hover":{
            color:'cyan',
            scale:1.2
          }

        }
      },
      ".imagemDesc":{
        width:"100%",
        padding:'2px',
        display:'flex',
        alignItems:'center',
        h1:{
          marginLeft:'2rem',
          paddingLeft:'2rem',
          borderLeft:'solid 1px cyan'
        }       
      },
      ".textDesc":{
        padding:'1rem',
        p:{
          maxWidth:'110rem',
          fontSize:'21px',
          fontWeight:500,
          fontStyle:"oblique",
          fontFamily:"'Times New Roman', Times, serif",
          marginBottom:'2rem',
          wordSpacing:'100%',
          textIndent:'4%',
          letterSpacing:'5%',
          textShadow:'20cap',
          color:'rgba(255,255,255,1)',
          lineHeight:'105%'
        }
      },
    },
    ".fechado":{
      display:'none'
    },
    ".container": {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height:'100%',
      overflow:'hidden',
      borderRadius:'8px'
    },
    ".text-left": {
      maxWidth: '37.5rem',
      width:'100%',
      height:'100%',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      zIndex:'5',
      background: "linear-gradient(90deg,rgba(0, 230, 230,0.8) 48.69%, rgba(0, 250, 255,0.2) 100%)",
     
      h4 :{
        color:'ice',
        marginTop: '1.4rem',
      }
    },
    
    ".right-container": {
      paddingBottom:'4rem',
      flex: 1,
      zIndex:1,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      height:'100%',
      width:'70%',
      backgroundColor:'rgba(0,250,255,0.2)',
      ".swiper-wrapper":{
        position: 'relative'
      },
      ".swiper-slide":{
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
      },
      ".item-playlist": {
        height:'100%',
        display:'flex',
        alignItems:"center",
        justifyContent:"center",
        flexDirection:'column',
        paddingTop: '1rem',
        "&:hover": {
          
          h5:{
            opacity: 1,
          },
          ".icon": {
            ".img":{
                
                scale:1.1
            }
          }
        },
        
        ".icon": {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1.0rem',
          paddingBottom: '1.2rem',
          borderBottom:'solid 2px cyan',
          ".img" : {
            width:100,
            height:100,
            transition:'all .4s ease',
            "&:not(:first-child)": {
              marginLeft: '3.2rem',
            }
          },
        },
        h5 : {
          opacity: 0.7,
          textAlign:'center',
          transition: 'opacity .3s ease',
        }
      }
    },
    "@lgScreen":{
      ".textDesc":{
        p:{
          fontSize:'14px',
          fontWeight:300,
          marginBottom:'2rem',
          wordSpacing:'100%',
          lineHeight:'100%'
        }
      },
    },
    "@tablet": {
      ".tecDesc":{
        ".textDesc":{
            p:{
              maxWidth:"96%",
              lineHeight:"2.5rem"
            }
        }
      },
      ".right-container": {
        maxWidth: '65rem'
      }
    },
    "@tablet1": {
      
      ".container": {
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth:'98vw'
      },
      ".text-left": {
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '0rem',
        background: 'linear-gradient(180deg, rgba(0, 230, 230, 0.6) 40%, rgba(0, 250, 255, 0.2) 100%)',
        h4:{
          maxWidth:'95%',
          textAlign:'center'
        },
        ".imagemn":{
          transform:'rotate(88deg)'
        }
      },
      ".right-container": {
        maxWidth: '100%',
        width: '100%',
        ".item-playlist": {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          h5 :{
            textAlign: 'center'
          }
        }
      }
    },
    "@mobile": {
      ".tecDesc":{
        padding:'2rem 0rem',
        ".imagemM":{  
          ".mathIma":{
              width:'20rem'
          }
        }
      },
      ".right-container" : {
        flexDirection: 'column',
        alignItems: 'center',
        ".item-playlist": {
          "&:not(:last-child)": {
            marginBottom: '3rem',
          }
        }
      }
    }
})