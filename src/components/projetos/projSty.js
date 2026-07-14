import { styled } from "@/styles/Styindex";


export const ProjPSty = styled('section', {

    padding: '12rem 4rem 12rem 5rem',
    borderBottom: '2px solid #1C162E',
    backgroundColor:'rgba(5,55,55,0.2)',
    ".fechar":{
      display:'none'
    },
    ".top": {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '4rem',
      ".ctrl-slide": {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        maxWidth: '18.4rem',
        ".swiper-pagination" :{
          position: 'relative',
          bottom: 0,
          width: 'auto',
          ".swiper-pagination-bullet": {
            width: '2.4rem',
            height: '0.3rem',
            backgroundColor: 'cyan',
            borderRadius: 0,
            opacity: 0.25,
            transition: 'background-color .3s ease',
            "&-active":{
              opacity: 1
            },
          }
        },
        ".ctrl": {
          display: 'flex',
          alignItems: 'center',
          ".btn":{
            "&.swiper-button-disabled": {
              opacity: 0.5,
              pointerEvents: 'none',
            },
            "&-prev": {
              transform: 'rotate(180deg)',
              marginRight: '1.7rem',
            }
          }
        }
      }
    },
    ".slide-podcast" :{
      position: 'relative',
      overflow: 'hidden',
    },
    "@lgScreen1": {
      ".container": {
        padding: 0
      },
      ".top": {
        padding: '0 15px',
        ".ctrl-slide" : {
          justifyContent: 'flex-end',
          ".swiper-pagination": {
            display: 'none',
          }
        }
      },
      ".slide-podcast": {
        padding: '0px 15px',
      },
    },
    "@mobile": {
      ".top": {
        marginBottom: '2rem',
      }
    }
})

export const CardPodcast = styled('div' , {
  position: 'relative',
  display:'block',
  width: '100%',
  maxWidth: '28rem',
  height: '42rem',
  overflow: 'hidden',
  borderRadius:'8px',
  transition:'all .1s ease',
 //estilos especificos de cada botão
  '&.pro01':{
    border:'1px solid cyan',
    '&:hover': {
      border:'2px solid cyan',
      borderImage:'linear-gradient(180deg , cyan 50%, azure 100%)',
      borderImageSlice:1,
    }
  },
  '&.pro02':{
    border:'1px solid  rgba(200,10,150,0.8)',
    '&:hover': {
      border:'2px solid  rgba(200,10,150,0.8) ',
      borderImage:'linear-gradient(180deg, rgba(200,10,150,0.8) 50%, #F67ACB 100%)',
      borderImageSlice:1,
    }
  },
  '&.pro03':{
    border:'1px solid #5B1FA6',
    '&:hover': {
      border:'2px solid #5B1FA6',
      borderImage:'linear-gradient(180deg, #5B1FA6 50%, #57555F 100%)',
      borderImageSlice:1,
    }
  },
  '&.pro04':{
    border:'1px solid rgba(80,144,204,0.8)',
    '&:hover': {
      border:'2px solid rgba(80,144,204,0.8)',
      borderImage:'linear-gradient(180deg,rgba(80,144,184,1) 50%, rgba(166,211,100,0.8) 100%)',
      borderImageSlice:1,
    }
  },
  '&.pro05':{
    border:"1px lime solid",
    '&:hover': {
      border:'2px lime solid',
      borderImage:'linear-gradient(180deg,lime 50%, cyan 100%)',
      borderImageSlice:1,
    }
  },
  '&.pro06':{
    border:'1px solid rgba(200,25,25,0.8)',
    '&:hover': {
      border:'2px solid rgba(200,25,25,0.8)',
      borderImage:'linear-gradient(180deg,rgba(200,25,25,0.8) 50%, azure 100%)',
      borderImageSlice:1,
    }
  },
  
  '&:hover': {
    ".image":{
      ".img":{
        transform: 'scale(1.05)',
      },
      '&:after': {
        content: "",
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, rgba(5, 1, 16, 0.2) 20%, #050110 70.06%)',
        position: 'absolute',
        bottom: 0,
        left: 0,
      },
    },
    ".info": {
      bottom: '2rem',
      ".play": {
        opacity: 1,
        display:'block',
      }
    }
  },
  ".image": {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    overflow:'hidden',
    zIndex: 0,
    '&:after': {
      content: "",
      width: '100%',
      height: '100%',
      background: 'linear-gradient(180deg, rgba(5, 1, 16, 0.1) 15.77%, #050110 90.06%)',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
    ".img" :{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform .3s ease',
    }
  },
  ".info": {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: '0 2.4rem 1rem 2.4rem',
    zIndex: 1,
    transition: 'all .3s ease',
    ".time": {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.8rem',
      ".tag-ep" :{
        display: 'inline-block',
        padding: '0.6rem 1rem',
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(32px)',
        borderRadius: '8rem',
        fontWeight: 600,
        fontSize: '1.3rem',
        lineHeight: '105%',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: 'cyan',
        marginRight: '1.6rem',
      },
      '.read': {
        display: 'flex',
        alignItems: 'center',
        span :{
          fontWeight: 400,
          fontSize: '1.3rem',
          lineHeight: '150%',
          color: 'rgba(255, 255, 255, 0.7)',
          marginLeft: '0.8rem',
        }
      }
    },
    ".play": {
      display: 'flex',
      flexDirection:'column',
      marginTop: '1.6rem',
      display:'none',
      opacity: 0,
      transition: 'opacity .3s ease',
      span :{
        fontWeight: '600',
        fontSize: '1.4rem',
        lineHeight: '120%',
        color: '$pink',
        marginLeft: '0.8rem',
      },
      ".refa":{
        display:'flex',
        alignItems:'center',
        "&:hover":{
          span:{
            borderBottom:'solid 1px rgba(0,255,2,0.4) ',
            color:'lime'
          }
        }

      }
    }
  },
  "@lgSreen1": {
    maxWidth: '100%',
    ".info" :{
      bottom: '4rem',
      ".play" :{
        opacity: 1
      }
    }
  }
})