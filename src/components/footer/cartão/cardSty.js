import { styled } from "@/styles/Styindex";
import limeLine from "../../../../public/assetsCard/Lb.svg"
import leftCont from "../../../../public/assetsCard/back.svg"
import lD from "../../../../public/assetsCard/dashLef.svg"
import rD from "../../../../public/assetsCard/dashRig.svg"
import cc1 from "../../../../public/assetsCard/circ1.svg"
import cc2 from "../../../../public/assetsCard/circ2.svg"
import cc3 from "../../../../public/assetsCard/circ3.svg"
import cc4 from "../../../../public/assetsCard/circ4.svg"
import tit from "../../../../public/assetsCard/titiRect.svg"

let C1 = cc1.src
let C2 = cc2.src
let C3 = cc3.src
let C4 = cc4.src
let Tit = tit.src
let RD  =  rD.src
let LD = lD.src
let LB = limeLine.src
let Lc = leftCont.src 

export const PagCartão = styled("div", {
    width:'100vw',
    height:'100vh',
    backgroundColor:'transparent',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    "#paraPrim":{
        fontSize:'8pt',
        transition:"ease 1s all",
        position:"absolute",
        top:"0",
        left:"0",
    },
    "#cartao":{
        backgroundColor:'rgba(0,0,0,0.6)',
        width:'700px',
        height:'400px',
        borderRadius:'10px',
        border:'solid 2px lime',
        transition:"all ease 1s",
        opacity:'0',
        transform:"scale(0.1)",
        "&.active":{
            opacity:"1",
            transform:"scale(1)"
        },
        '.cabeça':{
            display:"flex",
            backgroundColor:'rgba(0,0,0,0.5)',
            width:'100%',
            height:'75%',
            ".CLe":{
                width:'67%',
                height:'100%',
               ".Tcont":{
                width:"100%",
                height:'80%',
                paddingTop:'2rem',
                paddingLeft:'1.5rem',
                ".panel":{
                    height:'100%',
                    width:'86%',
                    backgroundColor:"rgba(0,0,0,0.5)",
                    display:'flex',
                    border:'solid lime 1px',
                    flexDirection:'column',
                    justifyContent:'center',
                    marginTop:'1.5rem',
                    "ul":{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        justifyContent:'space-between',
                        height:"80%",
                        ".itemL":{
                            cursor:'pointer',
                            background : "linear-gradient(90deg, rgba(250,0,100,0.5)20%, rgba(0, 200, 200,0.1)   80%)",
                            width:"80%",
                            height:"20%",
                            display:'flex',
                            alignItems:"center",
                            "span":{
                                width:"80%",
                                color:'rgba(0, 250, 255,1)',
                                paddingLeft:'1rem',
                                fontFamily: `$mono`,
                            },
                            ".imaSeta":{
                                marginLeft:'4rem',
                                transition:'all .5s ease',
                                transform:'rotate(90deg)'
                            },
                           "div":{
                                "p":{
                                    opacity:'0',
                                    textAlign:'center',
                                    transition:'all .5s ease',
                                    transform:'translateX(-15rem)',
                                    position:'absolute',
                                    fontSize:'9pt',
                                    fontFamily:'$fira',
                                    borderTop:'solid 1px rgba(250,0,100,0.5)',
                                    background:"linear-gradient(180deg, rgba(25,100,100,0.5)20%, rgba(0, 200, 200,0.1)   80%)",
                                    paddingTop:'1rem',
                                    color:"lime",
                                    paddingRight:'8rem',
                                    paddingBottom:'1rem',
                                    width:"auto",
                                    maxWidth:'31.8rem',
                                    height:'auto',
                                }
                           },
                           "&:hover":{
                                ".imaSeta":{
                                    transform:'rotate(0deg)'
                                },
                                "div":{
                                    "p":{
                                        opacity:'1',
                                        transform:'translateX(-31.8rem)',
                                    }
                                }
                           }
                        },
                    }
                }
               },
               ".Bcont":{
                    width:'100%',
                    height:'20%',
                    display:'flex',
                    ".Rcont":{
                        width:'20%',
                        height:'480%',
                        transform:'translate(0rem, -23rem)' ,
                        backgroundImage:`url(${RD})`,
                        backgroundPosition:'center',
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'contain',
                    },
                    ".Lcont":{
                        backgroundImage:`url(${LD})`,
                        backgroundPosition:'center',
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'contain',
                        width:'120%',
                        height:'200%', 
                        transform:'translate(1rem,-1rem )',
                        display:'flex',
                        justifyContent:'center',
                        'div':{
                            background:"linear-gradient(180deg,rgba(0, 0, 0, 0) 20%, rgba(0, 250, 25,0.2) 100%)",
                            marginTop:'2.5rem',
                            marginLeft:'9rem',
                            display:'flex',
                            alignItems:'end',
                            justifyContent:'end',
                            height:'25%',
                            width:'70%',
                            ".relogs":{
                                cursor:'pointer',
                                margin:'0rem 4rem 0rem 0rem',
                                padding:'0.2rem 0rem 0.3rem 0.9rem',
                                border:'solid 1px lime',
                                borderRadius:"50%",
                                width:'15%',
                                height:'100%',
                                transition:"all ease .1s",
                                background:"linear-gradient(-180deg, rgba(0, 250, 25,0.2) 20%, rgba(0, 0, 0, 0) 100%)",
                                ".imaRL":{
                                    width:'auto',
                                    height:'100%'
                                },
                                "&:hover":{
                                    scale:"1.05"
                                }
                            }
                        },
                       
                    }
               }

            },
            ".CRi":{
                padding:'0.5rem 1rem 0rem 1rem',
                width:'28rem',
                height:'28rem',
                ".circ":{
                    height:"65%",
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
                },
                ".rec":{
                    height:"18%",
                    width:'100%',
                    padding:'0.2rem 0rem 0.5rem 0.5rem',
                    transition:'all 1s ease',  
                    backgroundImage:`url(${Tit})`,
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'contain',
                    transform:'translateY(-0.6rem)',
                    opacity:0.4,
                    display:"flex",
                    justifyContent:'center',
                    flexDirection:"column",
                    "strong":{
                        fontSize:'8pt',
                        transition:'all .1s ease',  
                        margin:0,
                        color:'cyan',
                        fontFamily: '$fira',
                        textAlign:  'justify',
                        fontWeight:'$semibold',
                        
                    },
                    "span":{
                        fontSize:'9pt',
                        transition:'all .1s ease',  
                        margin:0,
                        textAlign:  'justify',
                        fontFamily: '$roboto',
                        fontWeight:'$medium',
                        color:'lime',
                    },
                   "&:hover":{
                        opacity:0.8,
                        "strong":{
                            scale:1.2,
                            transform:'translateX(2rem)'
                        },
                        "span":{
                            scale:1.2,
                            transform:'translateX(1.5rem)'
                        },

                   }
                }
            },
            "@tablet1":{
                flexDirection:"column-reverse",
                ".CLe":{
                    width:'100%',
                    height:'29%',
                    ".Tcont":{
                        display:'none'
                    },
                    ".Bcont":{
                        ".Rcont":{
                            display:'none',
                        },
                        ".Lcont":{
                            width:'90%',
                            transform: 'translate(2rem, -2rem)',
                            "div":{
                                height:"60%",
                                marginTop:'-1rem',
                                width:'72%',
                                marginLeft:'8.5rem',
                                ".relogs":{
                                    width: '33%',
                                    margin:  '0rem 2rem 0rem 1rem',
                                    padding: '0.3rem 0rem 0.3rem 1.3rem'
                                }
                            }
                        }
                    },
                },
                ".CRi":{
                    width: '100%',
                    height: '72%',
                    ".circ":{
                        height: '75%',
                        margin: '0.5rem 0rem'
                    },
                    ".rec":{
                        height:'15%',
                        padding:'0rem 0rem 0rem 5rem',
                        "span":{fontSize:'12pt'},
                        "strong":{fontSize:'11pt'}
                    }
                }
            }

        },
        ".pé": {
            width:'100%',
            height:"25%",
            display:'flex',
            ".lLPe":{
                width:'60%',
                height:"100%",
                ".LPe":{
                    backgroundImage:`url(${LB})`,
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'contain',
                    width:'162%',
                    height:"65%",
                    transform:'translate(-46px,20px)',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'column',
                    "h5":{
                        color:'lime',
                        fontSize:'9pt',
                        fontFamily:'$segoeUI',
                        marginLeft:'5rem',
                        "&:not(:last-child)":{
                            marginBottom:'2rem',
                            marginRight:'26rem',
                            "@tablet1":{
                                paddingTop:'7rem',
                                marginBottom:'0'
                            }
                        }
                    }
                }
            },
            ".rRPe":{
                width:'40%',
                height:"100%",
                ".RPe":{
                    backgroundImage:`url(${Lc})`,
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'contain',
                    width:'90%',
                    height:"140%",
                    transform:'translate(40px,-65px)',
                    display:'flex',
                    justifyContent:"center",
                    padding:'1rem 2rem',
                    ".text":{
                        "h4":{
                            paddingLeft:"1rem",
                            fontSize:'11pt',
                            maxWidth:'50%',
                            fontFamily:'$mono',
                            color:'rgba(20,40,20,1)',
                        },
                        "@tablet1":{
                            maxWidth:'51.5%',
                            "h4":{
                                paddingTop:'2rem',
                                paddingLeft:"3rem",
                            }
                        }
                    },
                    ".code":{   
                        width:'100%',
                        height:"100%",
                        "@tablet1":{
                            width:'78%',
                            height:"90%",
                        }
                    },
                    "@tablet1":{
                        padding:'25px 5px 0px 0px',
                        transform:'translate(30px,-25px)',
                    }
                },
                "@tablet1":{
                    width:'95%',
                    height:"100%",

                }
            },
            "@tablet1":{
                flexDirection:"column-reverse",
                ".lLPe":{
                    width:'80%',
                    height:'auto',
                    ".LPe":{
                        height:"89%",
                        width:"125%",
                        transform:'translate(0px, 0px)'
                    }
                }
            },
        },

        "@tablet1":{
            width:'400px',
            height:'700px',
        },
    },

})