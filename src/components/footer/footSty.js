import { styled ,frames,keyframes} from "@/styles/Styindex";
import lineFot from "../../../public/assets/UT/line-footer1.svg"
import log from "../../../public/fotLogNav.png"

const rodando = keyframes(frames.roda)

export const FootSty = styled('footer', {
  position: 'relative',
  background: `url(${log.src}) no-repeat center center`,
  padding:"8rem 2rem 6.3rem 2rem",
  height:"600px",
  "&:before": {
    content: "",
    width: '100%',
    maxWidth: '121.6rem',
    height: '2px',
    background: `url(${lineFot.src}) no-repeat center center`,
    position: 'absolute',
    top: 0,
    left: '50%',
    marginLeft: '-60.8rem',
  },
  "#LOGOf":{
    transition:'scale .1s ease',
    "&:hover":{
      scale: 1.05
    }
  },
  ".container": {
    opacity:0,
    transition:'all 2s ease',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  ".container.ativo":{
    opacity:1
  },
  ".left-footer": {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    maxWidth: '82.9rem',
    strong: {
      fontWeight: 700,
      fontSize: '1.4rem',
      lineHeight: '150%',
      color: '#FFFFFF',
    },
    p :{
      flex: 1,
      fontWeight: 400,
      fontSize: '1.4rem',
      lineHeight: '150%',
      color: 'rgba(255, 255, 255, 0.8)',
      marginLeft: '8.4rem',
    }
  },
  '.right-footer': {
    display: 'flex',
    alignItems: 'center',
    ".group" :{
      display: 'flex',
      alignItems: 'center',
      marginRight: '7.1rem',
      span:{
        color: '#FFFFFF',
        fontSize: '1.6rem',
        marginRight: '1.6rem',
      }
    },
    button: {
      width: '3.7rem',
      height: '3.7rem',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'filter .3s ease',
      "&:hover": {
        filter: 'brightness(0.5)'
      }
    }
  },

  "@lgScreen": {
    padding: '6rem 0rem',
  },
  "@tablet": {
    ".left-footer" :{
      p:{
        marginLeft: '3rem',
        maxWidth: '70%',
      }
    }
  },
  '@tablet1': {
    "&:before" : {
      left: '0px',
      marginLeft: '0px',
      backgroundSize: 'cover',
    },
    ".container": {
      flexDirection: 'column',
      alignItems: 'center',
    },
    ".left-footer": {
      maxWidth: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '4rem',
      p :{
        maxWidth: '90%',
        textAlign: 'center',
        marginLeft: '0rem',
        marginTop: '2rem'
      }
    }   
  },
  "@mobile": {
    "#LOGOf":{
      width: '180px !important',
      height:'80px !important'
    },
    padding: '4rem 0',
    ".left-footer":{
      p :{
        maxWidth: '100%',
        fontSize: '1.6rem',
      }
    }
  },
  ".contato":{
    padding:'2rem',
    ul:{
      display: 'grid',
      gridTemplateColumns:'repeat(2,1fr)',
      gridGap:'10px',
      li:{
        padding:'5px',
        cursor:'pointer',
        backgroundColor:'rgba(0,0,0,0.3)',
        border:'solid 1px cyan',
        borderRadius:'8px',
        display:'flex',
        alignItems:'center',
        "&:hover":{
          strong:{
            scale:1.05,
            color:'cyan',
            a:{
              color:'cyan'
            }
          }
          
        }
      },
      "@tablet":{
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-between',
      }
    },
    strong:{
      color: 'rgba(255,255,255,0.8)',
      fontSize: '1.7rem',
      marginLeft:'2rem',
      paddingLeft:'0.5rem',
      borderLeft:'solid 1px cyan',
      transition:'scale 0.3s ease',
      a:{
        transition:'scale 0.3s ease',
        color: 'rgba(255,255,255,0.8)',
      }
    },
    ".C1":{
      transition:'all 0.5s ease',
      transitionDelay: '0.2s',
      transform:'translateX(-800px)'
    },
    ".C2":{
      transition:'all 0.5s ease',
      transitionDelay: '0.2s',
      transform:'translateX(800px)'
    },
    ".C3":{
      transition:'all 0.5s ease',
      transitionDelay: '0.6s',
      transform:'translateX(-1200px)'
    },
    ".C4":{
      transition:'all 0.5s ease',
      transitionDelay: '0.6s',
      transform:'translateX(1200px)'
    },
    ".C5":{
      transition:'all 0.5s ease',
      transitionDelay: '1s',
      transform:'translateX(-1600px)'
    },
    ".C6":{
      backgroundColor:'black', 
      transition:'all 0.5s ease',
      transitionDelay: '1s',
      transform:'translateX(1600px)',
      strong:{
        width:"100%",  
        display:"flex", 
        alignItems:"center", 
        justifyContent:"center",
        a:{
            color:'rgba(250,30,90,1)',
            fontWight:'bold',
            fontSize:'14pt',
            trasition:'scale .5s ease',
            "&:hover":{
                scale:1.1
            }
        },
      }
    },
    ".C1.ativo":{
      transform:'translateX(0px)'
    },
    ".C2.ativo":{
      transform:'translateX(0px)'
    },
    ".C3.ativo":{
      transform:'translateX(0px)'
    },
    ".C4.ativo":{
      transform:'translateX(0px)'
    },
    ".C5.ativo":{
      transform:'translateX(0px)'
    },
    ".C6.ativo":{
      transform:'translateX(0px)'
    },
    
  },
  "#Setinha":{
    transition:'all 0.5s linear',
  },
  ".rodar":{
    animationName:`${rodando}`,
    animationDuration:'2s',
    animationDelay:'0s',
    animationDirection:'normal',
    animationFillMode:'backwards',
    animationTimingFunction:'linear',
    animationIterationCount:'infinite',
  }
})