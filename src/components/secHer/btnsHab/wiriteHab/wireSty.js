import { styled } from "@/styles/Styindex";

export const DivInfo = styled('div',{
    zIndex:'1000',
    position:'fixed',
    top:"0%",
    left:'0%',
    height:'110vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:"column",
    backgroundColor:'rgba(0,0,0,0.8)',
    padding:"0.2rem 1rem 1rem 1rem",
    overflowY:'scroll',
    ".Sair":{
        width:'100%',
        height:'5%',
        display:'flex',
        alignItems:'center',
        justifyContent:'end',
        button:{
            width:"5%",
            height:"100%",
            color:'cyan',
            "&:hover":{
                border:"solid 1px cyan",
                backgroundColor:'rgba(0,255,25,0.5)',
            }
        }
    },
    ".contain":{
        height:'100%',
        width:'100%',
        display:'flex',
        padding:'0rem 2rem 2rem 2rem',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        ".inform":{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            height:'80%',
            width:"100%",
            ".texto":{
                width:"50%",
                height:'100%',
                display:'flex',
                justifyContent:'center',
                flexDirection:'column',
                h2:{
                    textAlign:'center',
                    margin:'1rem 0rem',
                },
                p:{
                    fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                    color:'lime',
                    textAlign:'center'
                },
            },
            ".imagem":{
                width:"50%",
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'

            },
        },

//campo de texto

        ".formu":{
            width:'100%',
            height:'50%',
            margin:'0rem 0rem 5rem 0rem',
            ".campoTexto":{
                zIndex:2000,
                color:'lime',
                padding:"0.2rem",
                backgroundColor:"rgba(0,0,0,0.2)",
                borderRadius:"6px",
                border:"solid 2px cyan",
                marginBottom:"0.5rem",
                outline:"none",
                "&:focus":{
                    border:"solid 3px",
                    borderImage: "linear-gradient(to left, azure, cyan)",
                    borderImageSlice: 1
                },
            },
            '.areaTex':{
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
            },
            h4:{
                margin:'1rem 0rem'
            },
            label:{
                fontSize:'11pt',
                color:'lime'
            },
            form:{
                padding:'2rem 0rem',
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                button:{
                    fontSize:'10pt',
                    fontWeight:'bold' ,
                    padding:"0.5rem",
                    width:'6rem',
                    height:"auto",
                    color:'black',
                    border:'solid 1px lime',
                    background:'linear-gradient(to left, azure, cyan)',
                    "&:hover":{
                        color:'blue',
                        fontSize:'9pt',
                        borderImage: "linear-gradient(to left, azure, cyan)"
                    }
                }

                
            }
        }

    },

    

//trabalhando responsividade menores de 990px
    "@hM1":{
        ".formu":{
            margin:'0px !important',
        },
        ".Sair":{
            marginTop:"1rem !important"
        }
    },  
    "@hM2":{
        ".Sair":{
            marginTop:"1rem !important"
        }
    },
    "@hM3":{
        ".contain":{
            marginBottom:'1rem'
        },
        
        ".formu":{
            form:{
                paddingTop:'1rem !important'
            }
        }
    },
    
    "@tablet":{
        width:"100vw",
        ".Sair":{
            button:{
                width:"10%",
            }
        },
        ".inform":{
            flexDirection:'column',
            ".imagem":{
                width:"90% !important",
            },
        },
        ".formNE":{
            flexDirection:'row'
        },
        ".texto":{
            width:'90vw !important',
            p:{
                fontSize:'12pt'
            },
        },
        ".formu":{
            ".areaTex":{
                alignItems:'start !important',
                justifyContent:'start',
                flexDirection:'column',
            },
        }
    },

//mobile 600px
    "@mobile":{
        ".Sair":{
            justifyContent:'start',
        },
        ".inform":{
            width:"80% !important",
        },
        ".formNE":{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row !important',
            "divTxt":{
                width:"auto"
            }
        },
        ".formu":{
            maxWidth:'80%',        
            ".areaTex":{
                textarea:{
                    maxWidth:'70% !important'
                }
            }
        }
    }
   
}) 