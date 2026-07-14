import { styled } from "@/styles/Styindex"

export const BtnSeta =  styled('button',{
    position:'fixed',
    top: '15px',
    left: '2px',
    cursor:"pointer",
    width:30,
    height:'auto',
    opacity:0.5,
    display:'block',
    zIndex:2000,
    transition:'ease .5s all',
    "&.rodar":{
      transform:'rotate(-88deg)'  
    },
    "&.deactiveDisplay":{
        display:"none"
    },
    "&:hover":{
        opacity:1
    },
});


export const HedCont = styled('div',{
    
    width: "100vw",
    height: "6rem",
    padding:"0 2rem",
    display: "flex",
    alignItems: "space-betwen",
    background: "linear-gradient(180deg,rgba(0, 250, 255,0.4) 68.69%, rgba(0, 250, 255,0.8) 100%)",
    borderBottom:'solid 4px transparent',
    borderImage:"linear-gradient(90deg,rgba(0, 250, 255,0.4) 60%, rgba(0, 250, 255,0.8) 100%)",
    borderImageSlice:1,
    transition:'all .5s ease',
    backdropFilter: "blur(40px)",
    zIndex:20,
    "&.ativar":{
        backdropFilter: "none",
        border:'none',
        background: "linear-gradient(180deg,rgba(0, 200, 200,0.2) 20%, rgba(0, 250, 255,0.4) 100%)",
        position:'sticky',
        top: -500,
        ".container": {
            transition:'all 1s ease',
            position:'relative',
            left:-1000,
            top:0,
            "&.ativar2": {
                left:0
            },
        }
    },
    "&.ativar2":{
        top:0,
    },
    ".logsvg":{
        scale:2
    },
    ".viewPesContains":{
        backgroundColor:'rgba(0,0,0,0.8)',
        zIndex:'100',
        position:'fixed',
        top:'0%',
        left:'0%',    
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        height:'100vh',
        width:'100vw',
        ".btnFechaPes":{
            height:'10rem',
            width:'20rem',
            color:'lime',
        }
    },
    ".container": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ".logo":{
            width:"40%"
        },
        nav:{
            ul:{
                width:"80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }
        }
    },
    ".hamburger":{
        marginLeft: "2rem",
        display: "none",
        "&.is-active": {
            ".hamburger-inner": {
                backgroundColor:"white",
                "&::before":{
                    backgroundColor:"white",
                },
                "&::after":{
                    backgroundColor:"white",
                }
            }
        },
        ".hamburger-inner": {
            backgroundColor:"white",
            "&::before":{
                backgroundColor:"white",
            },
            "&::after":{
                backgroundColor:"white",
            }
        }
    },
    //menuMob
    ".menu-mobile":{
        zIndex:1000,
        position: "fixed",
        top: "5rem",
        width: "100%",
        height: "calc(100vh - 5rem)",
        backgroundColor: "rgba(0,20,50,0.9)",
        padding: "4rem 1.5rem",
        display:'none',
        transition: "all .3s ease",
        ul: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "4rem",
            li: {
                ".item-categorie":{
                    padding: "2rem 0rem",
                    ".img": {
                        width: "6rem",
                        height:"auto"
                    },
                    span: {
                        fontSize: "20px",
                    },
                },
            },
        },
        ".search": {
            maxWidth: "100%",
            height: "6rem",
            input: {
                fontSize:"1.6rem",
            },
            button: {
                height: "6rem",
                width: "6rem",
                img: {
                    width: "2.4rem"
                }
            }
        }
    },
    ".menu-opened":{
        display:'block'
    },
    nav:{
        display:"flex",
        alignItems:"center",
        justifyContent: "space-between",
        flex: 1,
        maxWidth: "83.2rem",
        ul :{
            display: "flex",
            alignItems: "center",
            li :{
                "&:not(:first-child)": {
                    marginLeft: "6.4rem",
                }
            }
        }
    },

    ".item-categorie" :{
        display: "flex",
        alignItems: "center",
        "&:hover":{
          span :{
            color: "cyan"
          }
        },
        span: {
          opacity: 0.7,
          color:"#FFFFFF",
          fontSize: "1.4rem",
          lineHeight: "150%",
          fontWeight: 400,
          marginLeft: "0.8rem",
          transition: "color .3s ease"
        }
    },


    ".search":{
        display: "flex",
        alignItems:"center",
        width: "100%",
        maxWidth: "28rem",
        height: "3.6rem",
        input:{
            flex: 1,
            height: "100%",
            backgroundColor: "transparent",
            border: "1px solid rgba(153, 149, 166, 0.25)",
            borderRadius: "4px 0 0 4px",
            padding:"0 1.6rem",
            color: "#ffffff",
            fontFamily: "'$AtypBLText', sans-serif",
            transition: "border .3s ease",
            "&::placeholder": {
                color: "rgba(255, 255, 255, 0.5)"
            },
            "&:focus": {
                border: "1px solid cyan"
            },
        },
        button:{
            width: "3.6rem",
            height: "3.6rem",
            backgroundColor: "cyan",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "2px",
            marginLeft: "-0.rem",
            transition: "filter .3s ease",
            "&:hover":{
                filter: "brightness(0.8)",
            }
        }
    },


    "@lgScreen1" :{
        height:'8rem',
        nav: {
            maxWidth: "100%",
            ".item-categorie" :{
                flexDirection:"column !important",
                span:{
                    marginLeft: "0.2rem",
                }
            }
        },
    },
    "@tablet": {
        height:"10rem",
        padding:"0 5rem",
        ".item-categorie" :{
            display:'none'
        },
        ".hamburger":{
            display: "block",
            marginRight:"2rem"
        },
        nav:{
            maxWidth: "100%",
            justifyContent: "flex-end",
            ul:{
                display: "none",
            },
            
        }
    },
    "@mobile": {       
        padding:"0 2rem",
        ".logo":{         
            maxWidth: "50%",
            scale:'0.8',
            transform:"translateX(-25px)"
            
        },
        nav: {
            ".search":{
                display: "none"
            },
           ".hamburger": {
                marginLeft: 0,
                padding: 0,
            }
        }
    },
})
