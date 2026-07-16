import { globalCss, styled } from "./Styindex";

export const GlobalStyles = globalCss({
    "*": {
        padding:0,
        margin:0,
        boxSizing: "border-box",
        textDecoration: "none",
        listStyle:"none",
        listStyleType: "none",
    },
    input:{outline: 'none'},
    html: {
        fontSize: "62.5%",
        scrollBehavior: "smooth",
        backgroundColor: "$background",
    },
    body: {      
        minHeight: "100vh",
        overflowX:"hidden",
        fontFamily: "$body",
        fontSize: "1.6rem",
        backgroundColor: "$background",
        color: "$text",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
    },
    "::selection": {
      backgroundColor: "$accentSoft",
      color: "$accentStrong",
    },
    ".overN":{
      overflow:"hidden"
    },
    ".img": {
        maxWidth:"100%",
        display: "block"
    },
    button: {
        border: 0,
        backgroundColor: "transparent",
        cursor:"pointer",
    },
    img: {
      maxWidth: "100%",
    },

    h1: {
        fontSize: "clamp(4.2rem, 8vw, 8.8rem)"
      },
      
      h2: {
        fontSize: "clamp(3.2rem, 5vw, 5.8rem)"
      },
      
      h3: {
        fontSize: "clamp(2.4rem, 3vw, 3.4rem)"
      },
      
      h4: {
        fontSize: "2.4rem"
      },
      
      h5:{
        fontSize: "2rem"
      },
      
      h6: {
        fontSize: "1.8rem"
      },
      
      p :{
        fontSize: "1.7rem",
        lineHeight: 1.7,
      },
      
      a :{
        textDecoration: "none",
        display: "inline-block",
        fontSize: "1.6rem",
        fontWeight: 600,
        color: "$accent",
      },
      
      ul: {
        li :{
          fontSize: "1.6rem"
        }
      },
      
      
      "h1,h2,h3,h4,h5,h6": {
        fontWeight: 600,
        color: "$heading",
        letterSpacing: 0,
        lineHeight: 1.05,
      },
      
      "p, li" :{
        fontWeight: 400,
        color: "$textMuted",
      },
      

    section :{
        "@lgScreen" :{
            padding: "60px 0px"
        },
        "@tablet": {
            padding: "50px 0"
        },
        "@mobile":{
            padding: "40px 0px"
        }
    }
})

export const Conteiner = styled("div" , {
    width: "100%" ,
    maxWidth: "121.6rem",
    margin:"0 auto",
    padding: "0 2.4rem",

    "@mobile": {
      padding: "0 1.8rem",
    },

})
