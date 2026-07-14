

import { styled, frames, keyframes } from "@/styles/Styindex";
import Icon from '@/assets/olhoCarrega.svg'

const animatioText = keyframes(frames.texAni) 
const rodando = keyframes(frames.roda)
 

export const AnimatedYea = styled(Icon,{
 
  margin:'auto auto',
  '& > g:first-of-type':{
    transformOrigin:'center',
    animationName:`${rodando}`,
    animationDuration:'1s',
    animationDelay:'0s',
    animationDirection:'normal',
    animationFillMode:'backwards',
    animationTimingFunction:'linear',
    animationIterationCount:'infinite',
  }
})

export const ArtSty = styled('section',{
    
    background: "linear-gradient(180deg,rgba(0, 250, 255,0.2) 88.69%, rgba(0, 250, 255,0.5) 100%)",
    paddingTop: "11.7rem",
    paddingBottom: '12rem',
    borderBottom: '2px solid #1C162E',
    
    ".animaTex":{
      color:'lime',
      position:'absolute',
      animationName:`${animatioText}`,
      animationDuration:'6s',
      animationDelay:'0s',
      animationDirection:'initial',
      animationFillMode:'backwards',
      animationTimingFunction:'linear',
      animationIterationCount:'unset',
    },
    ".icon":{
      "#g7":{
      }
    },
    ".btnFech":{
      marginTop:'1rem',
      height:'4rem',
      width:'20rem',
      color:'lime',
      backgroundColor:"rgba(0,200,200,0.5)",
      padding:'0.5rem 0rem 2rem 0rem',
      fontSize:'14pt',
      border:'solid 1px cyan',
      transition:'all .1s ease',
      "&:hover":{
        fontSize:'13pt',
        color:'cyan',
        border:'solid 2px lime',
        backgroundColor:'rgba(0,200,50,0.5)'
      }
    },
    "#view":{
      zIndex:10001,
    },
    
    ".Eviewer":{
      position:"fixed",
      top:0,
      left:0,
      width:'100vw',
      height:'100vh',
      display:"flex",
      alignItems:"start",
      justifyContent:'start',
      flexDirection:'column',
      backgroundColor:'rgba(0,0,0,0.8)',
      zIndex:10000
    },
    ".epub-view":{
      padding:'1rem 0rem 6rem 0rem',
      height:"100vh !important",
      width:"100vw !important",
      overflow:"auto !important"
    },
    ".top":{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '4rem',
        p :{
          display: 'flex',
          alignItems: 'center',
          color: 'var(--gray-scale-06)',
          ".img":{
              marginLeft: '1.6rem'
          }
        }
    },
    ".all": {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '4rem 3.2rem',
        marginBottom: '8rem'
    },
    button:{
        display: 'block',
        margin: '0 auto',
    },
    ".btn-primary": {
      padding: '1.6rem 3.2rem',
      fontWeight: 600,
      fontSize: '1.6rem',
      lineHeight: '100%',
      color: 'rgba(122, 203, 246, 1)',
      fontFamily: "'Atyp BL Text', sans-serif",
      border: '1px solid rgba(122, 203, 246, 0.55)',
      borderRadius: '8px',
      transition: 'all .3s ease',
      "&:hover" :{
        backgroundColor: 'rgba(0, 255, 255, 0.6)',
        color: 'white',
      },
    },
    "@lgScreen1": {
      ".all":{
        gridGap: '2rem',
        marginBottom: '4rem',
      },
    },
    "@tablet1": {
    ".all":{
      gridTemplateColumns: '1fr 1fr',
    }
  },
  "@mobile": {
    ".top": {
      flexDirection: 'column',
      alignItems: 'center',
      h2:{
        marginBottom: '2rem',
      }
    },
    ".all":{
      gridTemplateColumns: '1fr',
      gridGap: '3.2rem',
    },
    ".btn-prymary":{
      width: '100%',
      padding: '2.5rem 0px',
      fontSize: '1.9rem',
      backgroundColor:"cyan"
    }
  }, 
})

export const CardPost = styled('button',{
  
  textDecoration: "none",
  fontSize: '1.8rem',
  fontWeight: 600,
  color: '$blaCyan',
  display: 'block',
  "&:hover" : {
    ".image" :{
      ".img" :{
        transform: 'scale(1.05)',
      }
    },
    ".info": {
      h6:{
        color: 'var(--pink)',
      }
    }
  },
  ".image": {
    position: 'relative',
    width: '100%',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '1.6rem',
    "&:after":{
      content: "",
      width: '100%',
      height: '100%',
      background: 'linear-gradient(180deg, rgba(15, 17, 22, 0.025) 45.77%, rgba(11, 8, 20, 0.25) 92.14%)',
      position: 'absolute',
      bottom: 0,
      left: 0,
      zIndex: 1,
    },
    ".img": {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform .3s ease',
    }
  },
  ".info": {
    display:'flex',
    alignItems:'center',
    justifyContent:"space-between",
    flexDirection:'column',
    height:'12rem',
    h6 :{
      marginTop: '0.8rem',
      marginBottom: '0.5rem',
      transition: 'color .3s ease',
    },
    ul :{
      display: 'flex',
      alignItems: 'center',
      listStyleType: 'none',
      li :{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        "&:not(:first-child)" :{
          marginLeft: '2.4rem',
          "&:after" :{
            content: "",
            width: '6px',
            height: '6px',
            backgroundColor: '#393C40',
            position: 'absolute',
            borderRadius: '50%',
            left: '-15px',
          }
        },
        span :{
          fontWeight: 400,
          fontSize: '1.4rem',
          lineHeight: '150%',
          color: 'var(--gray-scale-05)',
        }
      },
      ".categorie": {
        fontWeight: 600,
        fontSize: '1.4rem',
        lineHeight: '105%',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: 'cyan',
      }
    }
  },
  "@lgScreen1":{
    ".info": {
      h6 :{
        fontSize:'12pt'
      },
      ".categorie": {
        fontSize: '13pt',
      },
    }
  },
  "@tablet":{
    ".info": {
    height:'14rem',
      h6 :{
        fontSize:'11pt'
      },
      ".categorie": {
        fontSize: '12pt',
      },
    }
  }
})