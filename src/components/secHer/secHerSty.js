import { styled } from "@/styles/Styindex"

import Divisor from '../../../public/assets/UT/line-divisor.svg'


import Desi from "@/assets/secHer/design.svg";
import Dev from "@/assets/secHer/developer.svg";
import Wit from  "@/assets/secHer/write.svg"

const line_divisor = Divisor.src

export const Des = styled(Desi,{

})

export const De = styled(Dev,{
  
})
export const Wi = styled(Wit,{
  
})


export const SecHe = styled('section',{

    backgroundColor:'rgba(5,55,55,0.2)',
    paddingTop: '8.3rem',
    paddingBottom: '11.7rem',
    ".container" :{
      display: 'flex',
      alignItems:'flex-start',
      justifyContent: 'space-between',
    },
    ".left-container": {
      flex: 1,
      maxWidth: '72.5rem',
      ".divCar":{
        overflow:'hidden',
        width: '100%',
        height: '100%',
        padding:"1rem",
        backgroundColor: 'rgba(0,0,0,0.5)',
        opacity: 1,
        transform:'translateX(0px)',
        transition: 'all 0.5s ease-in-out',
      },
      ".modal":{
        position:'fixed',
        top:0,
        left:0,
        height:'100vh',
        width:'65VW',
        zIndex:100
      },
      ".mod":{
        transition:'all .39s ease'
      },
      ".apareça":{
        opacity:1,
        transform:'translateX(0px)'
      },
      ".suma":{
        transform:'translateX(-1000px)',
        opacity:0,
      },
      ".pisk":{
        opacity:0,
        transform:'translateX(50px)'
      },
      ".carButs":{
        width:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"rigth",
        
        ".active":{ backgroundColor:"rgba(5,255,255,0.1)",},
        button:{
          margin:"0.2rem 2rem",
          backgroundColor:"rgba(0,0,0,0.5)",
          padding:"5px",
          borderRadius:"6px",
          border:"solid 1px cyan",
          "&:hover":{
            backgroundColor:"rgba(5,255,255,0.2)",
            ".ima":{
              scale:0.9,
            }
          }
        }
      },

      ".title": {
        marginBottom: '4.2rem',
        h2 :{
          marginTop: '1.4rem',
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
    ".right-container": {
      flex: 1,
      width:'100%',
      maxWidth: '40.4rem',
      marginTop: '10rem',
      height:'50vh',
      ".all": {
        marginTop: '4.2rem',
        ".item-post": {
          button:{
            textDecoration: 'none',
            fontSize: '2.2rem',
            textAlign: 'justify',
            fontWeight: 600,
            color: "$blaCyan"
          },
          position: 'relative',
          "&:not(:last-child)": {
            paddingBottom: '3.2rem',
            marginBottom: '3.2rem',      
            "&:after": {
              content: "",
              background: `url(${line_divisor}) no-repeat center center`,
              width: '100%',
              height: '2px',
              position: 'absolute',
              bottom: 0,
              left: 0,
            },

          }
        },
        ".but":{
          opacity:1,
          transform:"translateX(0px)",
          transition:"all 0.6s ease-in-out"
        },
        ".pisco1":{
            opacity:0,
            transform:"translateX(150px)"
        },
        ".pisco2":{
            opacity:0,
            transform:"translateX(300px)"
        },
        ".pisco3":{
          opacity:0,
          transform:"translateX(600px)"
        },
      }
    },
    "@lgScreen":{
      ".container" :{
          display: 'grid',
          gridTemplateColumns: '1fr 35rem',
          gridGap: '3rem',
        },
        ".txt-white":{
          fontSize:'1.7rem'
        }
    },
    "@tablet1" :{
      ".container": {
        gridTemplateColumns: '1fr',
        gridGap: '4rem',
      },
      ".left-container": {
        ".title": {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '4rem',
        },
        ".info": {
          h3: {
            maxWidth: '100%',
            textAlign: 'center',
          }
        }
      },
      ".right-container": {
        height:'100%',
        maxWidth: '100%',
        h4: {
          textAlign: 'center',
        },
        ".all": {
          ".item-post": {
            "&:not(:last-child)": {
                "&:after": {
                    backgroundSize: 'cover'
                }
            }
          }
        }
      }
    },
    "@mobile":{

      ".carButs":{
        display:"block"
      },


      ".container": {
        gridGap: 0
      },
      ".left-container": {
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        paddingBottom: '40px',
        ".info":{
          h3 :{
            fontSize: '2.4rem'
          }
        },
        ".title": {
          marginBottom: '3rem'
        }
      },
      ".right-container": {
        height:'100%',
        ".all":{
          marginTop: '3rem',
          ".item-post": {
            "&:not(:last-child)": {
              paddingBottom: '2rem',
              marginBottom: '2rem'
            }
          }
        }
      }
    },

    ".card-post-lg": {
      display: 'block',
      width: '100%',
      maxWidth: '72.8rem',
      "&:hover": {
        ".info": {
          h3 :{
            color: "cyan"
          }
        }
      },
      ".image": {
        width: '100%',
        borderRadius: '10px',
        overflow: 'hidden',
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginBottom: '3.5rem',
        
       
        ".img": {   
          objectFit: 'cover',    
          transition: 'transform .2s ease',
          width:"100%", 
          height:"100%"   
        }
      },
      ".info" :{
        ".top-info": {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin:'1rem 0rem',
          ul: {
            display: 'flex',
            alignItems: 'center',
            listStyleType: 'none',
            li: {
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              "&:not(:first-child)" :{
                marginLeft: '4rem',
                "&:after": {
                  content: "",
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#393C40',
                  position: 'absolute',
                  borderRadius: '50%',
                  left: '-20px'
                }
              },
              span :{
                fontWeight: 400,
                fontSize: '1.4rem',
                lineHeight: '150%',
                color: 'lime',
                marginLeft: '0.8rem',
              }
            }
          }
        },
        h3 :{
          fontSize:'16pt',
          maxWidth: '95%',
          transition: 'color .3s ease'
        }
      },
      '@mobile': {
        ".image": {
          height: 'calc(100% * 9 / 16)',
          width:'100%',
          marginBottom: '2rem',
        },
        ".info": {
          ".top-info": {
            justifyContent: 'center',
            ul:{
              display: 'none'
            }
          }
        }
      }
    },

    ".card-post-xs": {
      zIndex:'100',
      display: 'flex',
      alignItems: 'center',
      width: '110%',
      maxWidth: '39rem',
      height: '12rem',
      marginTop:'2rem',
      "&:hover": {
        ".image":{
          ".img" :{
            transform: 'scale(1.05)',
          }
        },
        ".info" :{
          h6: {
            color: '$cyberCy',
          }
        }
      },
      ".image": {
        width: '12.5rem',
        height: '10.4rem',
        borderRadius: '8px',
        overflow: 'hidden',
        border:"solid 0.1px rgba(5,255,255,0.5)",
        ".img" :{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform .3s ease',
        }
      },
      ".info":{
        flex: 1,
        marginLeft: '3.2rem',
        h6 :{
          textAlign:'left',
          marginTop: '1.2rem',
          marginBottom: '0.5rem',
          transition: 'color .3s ease',
        },
        ul:{
          display: 'flex',
          alignItems: 'center',
          listStyleType: 'none',
          li: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            "&:not(:first-child)": {
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
            span:{
              fontWeight: 400,
              fontSize: '1.4rem',
              lineHeight: '150%',
              color: 'lime',
            }
          }
        }
      },
   
      "@mobile": {
        span:{
          fontSize:'12pt',
          maxWidth:'90%'
        },
        h6:{
          fontSize:'10pt',
          maxWidth:'90%'
        },
        ".info": {
          flex: 1,
        }
      }
    }
    
})