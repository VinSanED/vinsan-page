import { createStitches } from "@stitches/react";

const fontFace = `
  @font-face {
    font-family: 'Atyp BL Text';
    src: url('../fonts/AtypBLText-Regular.woff2') format('woff2'),
         url('../fonts/AtypBLText-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Atyp BL Text';
    src: url('../fonts/AtypBLText-Medium.woff2') format('woff2'),
         url('../fonts/AtypBLText-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Atyp BL Text';
    src: url('../fonts/AtypBLText-Bold.woff2') format('woff2'),
         url('../fonts/AtypBLText-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Atyp BL Text';
    src: url('../fonts/AtypBLText-Semibold.woff2') format('woff2'),
         url('../fonts/AtypBLText-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
  }
`;

const monosp = `
    font-family: 'Space Mono', monospace;
    src: url('/fonts/space_mono/SpaceMono-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
`;
const firaCode = `
    font-family: 'Fira Code', monospace;
    src: url('/fonts/fira/static/FiraCode-Medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
`;
const segoe_UI = `
  font-family: 'Segoe UI, system-ui, sans-serif';
  src: url("/fonts/segoe_UI/SegoeUI.ttf") format('truetype'); 
  font-weight: normal;
  font-style: normal;
`;

const RobotoMono = `
  font-family: 'Roboto Mono', monospace;
  src: url("/fonts/roboto_mono/static/RobotoMono-Regular.ttf") format('truetype'); 
  font-weight: normal;
  font-style: normal;
`



const a = 500;


export const frames={
  texAni:{
    '0%':{
      transform: 'translate(0rem, 0rem)'
    },
    '25%':{
      transform: 'translate(25rem, -5rem)'
    },
    '50%':{
      transform: 'translate(50rem, -8rem)'
    },
    '75%':{
      transform: 'translate(75rem, -10rem)'
    },
    '100%':{
      transform: 'translate(100rem, -12rem)',
      opacity:'0'
    }
  },
  roda:{
    '0%':{
      transform: 'rotate(0deg)'
    },
    '25%':{
      transform:'rotate(90deg)'
    },
    '50%':{
      transform:'rotate(180deg)'
    },
    '75%':{
      transform:'rotate(270deg)'
    },
    '100%':{
      transform:'rotate(360deg)'
    },
  }
}

export const {css, styled,  globalCss, keyframes, getCssText, theme} = 
createStitches({ 
  globalCss:{
    '@font-face':firaCode,
    '@font-face':segoe_UI,
    '@font-face':RobotoMono,
    '@font-face':monosp,
  },
  theme: {
    colors: {
      cyberCy:"#00ffffff",
      blaCyan:"rgba(5,210,255,1)",
      pink: "green",
      gray_scale_01:  '#050110',
      gray_scale_02: '#0F0C1B',
      gray_scale_03: '#3F3D49',
      gray_scale_04: '#57555F',
      gray_scale_05: '#9995A6',
      gray_scale_06: '#ACB4BF',
    },

    fonts: {
      segoeUI: 'Segoe UI, system-ui, sans-serif',
      fira: "'Fira Code', monospace",
      roboto: "'Roboto Mono', monospace",
      mono: " 'Space Mono', monospace"
    },

    fontWeights: {
      regular: 'normal',
      medium: a,
      bold: 'bold',
      semibold: 600,
    }
  },
  media: {
    hM1:"(max-height:815px) and (max-width:991px)",
    hM2:"(max-height:720px) and (max-width:991px)",
    hM3:"(max-height:670px) and (max-width:450px)",
    lgScreen:"(max-width:1250px)",
    lgScreen1:"(max-width:1100px)",
    tablet:"(max-width:991px)",
    tablet1:"(max-width:768px)",
    mobile:"(max-width:620px)",
    mobile1:"(max-width:410px)",
  },    
});