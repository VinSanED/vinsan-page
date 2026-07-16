import { createStitches } from "@stitches/react";

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
  theme: {
    colors: {
      background: "#f7f9fb",
      backgroundAlt: "#eef4f6",
      surface: "#ffffff",
      surfaceSoft: "#f1f6f8",
      surfaceMuted: "#e5edf0",
      text: "#102027",
      textMuted: "#5a6a72",
      heading: "#07151b",
      border: "#d7e2e6",
      borderStrong: "#9db4bd",
      accent: "#006d77",
      accentStrong: "#004f58",
      accentSoft: "#d8f0f2",
      accentWash: "#edfafa",
      positive: "#2f855a",
      shadow: "rgba(16, 32, 39, 0.12)",
      cyberCy:"#d8f0f2",
      blaCyan:"#006d77",
      pink: "#2f855a",
      gray_scale_01:  "#f7f9fb",
      gray_scale_02: "#ffffff",
      gray_scale_03: "#d7e2e6",
      gray_scale_04: "#9db4bd",
      gray_scale_05: "#5a6a72",
      gray_scale_06: "#102027",
    },

    fonts: {
      body: "Inter, Segoe UI, Roboto, Arial, system-ui, sans-serif",
      heading: "Inter, Segoe UI, Roboto, Arial, system-ui, sans-serif",
      segoeUI: "Segoe UI, system-ui, sans-serif",
      fira: "'Fira Code', monospace",
      roboto: "'Roboto Mono', monospace",
      mono: " 'Space Mono', monospace"
    },

    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
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
