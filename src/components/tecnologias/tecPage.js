import Image from "next/image";
import tecno from "../../../public/assets/tecno.png"
import htmlIcon from "../../../public/assets/UT/icon-html-xs.svg"
import cssIcon from "../../../public/assets/UT/icon-css.svg"
import sass from "../../../public/assets/UT/iconsTech/sass.svg"

import jsIcon from "../../../public/assets/UT/icon-js.svg"
import swiperIcon from "../../../public/assets/UT/iconsTech/swiper.svg"
import gulp from "../../../public/assets/UT/iconsTech/gulp.svg"
import d3js from "../../../public/assets/UT/iconsTech/d3js.svg"

import reactIcon from "../../../public/assets/UT/icon-react-xs.svg"
import nextjs from "../../../public/assets/UT/iconsTech/nextjs.svg"

import nodejs from "../../../public/assets/UT/iconsTech/nodejs.svg"

import git from "../../../public/assets/UT/iconsTech/git.svg"
import github from "../../../public/assets/UT/iconsTech/github.svg"


import vscode from "../../../public/assets/UT/iconsTech/vscode.svg"

import libreofficeWriter from "../../../public/assets/UT/iconsTech/libreoffice-writer.svg"
import calibre from "../../../public/assets/UT/iconsTech/calibre.svg"
import scribus from "../../../public/assets/UT/iconsTech/scribus.svg"

import libreofficeCalc from "../../../public/assets/UT/iconsTech/libreoffice-calc.svg"
import libreofficeMath from "../../../public/assets/UT/iconsTech/libreoffice-math.svg"
import libreofficeDB from "../../../public/assets/UT/iconsTech/libreofficeDB.svg"
import grafana from "../../../public/assets/UT/iconsTech/grafana.svg"

import libreofficeDraw from "../../../public/assets/UT/iconsTech/libreoffice-draw.svg"
import gimp from "../../../public/assets/UT/iconsTech/gimp.svg"
import inkscape from "../../../public/assets/UT/iconsTech/inkscape.svg"
import krita from "../../../public/assets/UT/iconsTech/krita.svg"
import libreofficeImpress from "../../../public/assets/UT/iconsTech/libreoffice-impress.svg"

import HTMLDesc from "./descTec/1htmlDesc";
import CSSDesc from "./descTec/2cssDesc";
import SCSSDesc from "./descTec/3sassDesc";
import JSDesc from "./descTec/4jsDesc";
import GulpDesc from "./descTec/5gulpDesc";
import SwiDesc from "./descTec/6swiperDesc";
import D3Desc from "./descTec/7d3jsDesc";
import ReactDesc from "./descTec/8reactjsDesc";
import NextDesc from "./descTec/9nextjsDesc";
import NodeDesc from "./descTec/10nodeDesc";
import GitDesc from "./descTec/11gitDesc";
import GitHubDesc from "./descTec/12githubDesc";
import VSDesc from "./descTec/13vscodeDesc";
import WriDesc from "./descTec/14writeDesc";
import CaliDesc from "./descTec/15calibreDesc";
import ScriDesc from "./descTec/16scribusDesc";
import CalcDesc from "./descTec/17calcDesc";
import MathDesc from "./descTec/18mathDesc";
import BaseDesc from "./descTec/19dbaseDesc";
import GrafaDesc from "./descTec/20grafaDesc";
import DrawDesc from "./descTec/21drawDesc";
import InksDesc from "./descTec/22inksDesc";
import GIMPDesc from "./descTec/23gimpDesc";
import KritDesc from "./descTec/24kritDesc";
import ImpreDesc from "./descTec/25impreDesc";

import React, { useEffect,useState } from 'react';

import { TecSty } from '@/components/tecnologias/tecSty'

import Aos from "aos";
import 'aos/dist/aos.css'
import "swiper"
import Swiper from "swiper";


const TecSec = ()=>{
   
    const[tecPage , setTecPage]= useState('')

    useEffect(()=>{
       const isFirefox = navigator.userAgent.toLowerCase().includes('firefox') 
       console.log(isFirefox, "ISFIREIEF")
       let swiOpt = {
            slidesPerView:'auto',
            spaceBetween: 40,
            centeredSlides: isFirefox ? false: true,
            speed: 600,
            slidesOffsetAfter:5,
            grabCursor:true,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                snapOnRelease:false,
            },
            mousewheel: {
                invert: true,
                snapOnRelease:false,
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false,
                snapOnRelease:false,
            },
            pagination: {
            el: ".container",
            clickable: false,
            },
            effect: isFirefox ? 'slide' : 'coverflow',
            coverflowEffect: {
            rotate: -5,
            stretch:2,
            depth:200,
            modifier:1,
            slideShadows: true,
            },
            breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            500: {
                slidesPerView: 2.5,
            },
            768: {
                slidesPerView: 3.3
            },
            991: {
                slidesPerView: 2.8
            },
            1100: {
                slidesPerView: 4.2,
                spaceBetween: 32,
            },
            1200: {
                slidesPerView: 4.5,
                spaceBetween: 32,
            }
            },
        }
       new Swiper(".slide-container", swiOpt);
    }, [])
   
    function DescF(i) {
        if(i===1){
            setTecPage(HTMLDesc)
        }
        if(i===2){
            setTecPage(CSSDesc)
        }
        if(i===3){
            setTecPage(SCSSDesc)
        }
        if(i===4){
            setTecPage(JSDesc)
        }
        if(i===5){
            setTecPage(GulpDesc)
        }
        if(i===6){
            setTecPage(SwiDesc)
        }
        if(i===7){
            setTecPage(D3Desc)
        }
        if(i===8){
            setTecPage(ReactDesc)
        }
        if(i===9){
            setTecPage(NextDesc)
        }
        if(i===10){
            setTecPage(NodeDesc)
        }
        if(i===11){
            setTecPage(GitDesc)
        }
        if(i===12){
            setTecPage(GitHubDesc)
        }
        if(i===13){
            setTecPage(VSDesc)
        }
        if(i===14){
            setTecPage(WriDesc)
        }
        if(i===15){
            setTecPage(CaliDesc)
        }
        if(i===16){
            setTecPage(ScriDesc)
        }
        if(i===17){
            setTecPage(CalcDesc)
        }
        if(i===18){
            setTecPage(MathDesc)
        }
        if(i===19){
            setTecPage(BaseDesc)
        }
        if(i===20){
            setTecPage(GrafaDesc)
        }
        if(i===21){
            setTecPage(DrawDesc)
        }
        if(i===22){
            setTecPage(InksDesc)
        }
        if(i===23){
            setTecPage(GIMPDesc)
        }
        if(i===24){
            setTecPage(KritDesc)
        }
        if(i===25){
            setTecPage(ImpreDesc)
        }  

        const tecDes = document.querySelector('.tecDesc')
        console.log('eis uma das tecnologias que domino')
        if(tecDes!==null){ tecDes.classList.remove('fechado');console.log('exec 2')}
    }
    return(
        <TecSty className="s-playlist">
            <>{tecPage}</>
            <div className="container">
                <div
                    data-aos="fade-down"
                    data-aos-easing="linear" 
                    className="text-left"
                >
                    <Image src={tecno} className="imagemn" height={100} width={100} alt=""/>
                    <h4>Eis algumas das tecnologias a que tenho algum dominio</h4>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="50" 
                    className="right-container slide-container"
                >
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=1 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={htmlIcon} alt=""/>
                                </div>
                                <h5>HTML5</h5>
                            </button>
                        </div>    
                        <div className="swiper-slide" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <button onClick={()=>{let i=2 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={cssIcon} alt=""/>
                                </div>
                                <h5>CSS3</h5>
                            </button>
                        </div> 
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=3 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={sass} alt=""/>
                                </div>
                                <h5>SASS</h5>
                            </button>
                        </div> 
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=4 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={jsIcon} alt=""/>
                                </div>
                                <h5>Java Script</h5>
                            </button>
                        </div> 
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=5 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={gulp} alt=""/>
                                </div>
                                <h5>GulpJS</h5>
                            </button>
                        </div> 
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=6 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={swiperIcon} alt=""/>
                                </div>
                                <h5>SwiperJS</h5>
                            </button>
                        </div> 
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=7 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={d3js} alt=""/>
                                </div>
                                <h5>D3JS</h5>
                            </button>
                        </div> 
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=8 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={reactIcon} alt=""/>
                                </div>
                                <h5>ReactJS</h5>
                            </button>
                        </div>
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=9 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={nextjs} alt=""/>
                                </div>
                                <h5>NextJS</h5>
                            </button>
                        </div>
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=10 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={nodejs} alt=""/>
                                </div>
                                <h5>NodeJS</h5>
                            </button>
                        </div>

                        <div className="swiper-slide">
                            <button onClick={()=>{let i=11 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={git} alt=""/>
                                </div>
                                <h5>Git</h5>
                            </button>
                        </div>
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=12 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={github} alt=""/>
                                </div>
                                <h5>Git Hub</h5>
                            </button>
                        </div>
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=13 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={vscode} alt=""/>
                                </div>
                                <h5>Visual Code</h5>
                            </button>
                        </div>
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=14 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={libreofficeWriter} alt=""/>
                                </div>
                                <h5>Office Writer</h5>
                            </button>
                        </div>
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=15 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={calibre} alt=""/>
                                </div>
                                <h5>Calibre</h5>
                            </button>
                        </div>
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=16 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={scribus} alt=""/>
                                </div>
                                <h5>Scribus</h5>
                            </button>
                        </div>
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=17 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={libreofficeCalc} alt=""/>
                                </div>
                                <h5>Office Calc</h5>
                            </button>
                        </div>
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=18 ;DescF(i)}}  className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={libreofficeMath} alt=""/>
                                </div>
                                <h5>Office Math</h5>
                            </button>
                        </div>
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=19 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={libreofficeDB} alt=""/>
                                </div>
                                <h5>Office DBase</h5>
                            </button>
                        </div>
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=20 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={grafana} alt=""/>
                                </div>
                                <h5>Grafana</h5>
                            </button>
                        </div>
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=21 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={libreofficeDraw} alt=""/>
                                </div>
                                <h5>Office Draw</h5>
                            </button>
                        </div> 
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=22 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={inkscape} alt=""/>
                                </div>
                                <h5>Inkscape</h5>
                            </button>
                        </div> 
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=23 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={gimp} alt=""/>
                                </div>
                                <h5>Gimp</h5>
                            </button>
                        </div> 
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=24 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={krita} alt=""/>
                                </div>
                                <h5>Krita</h5>
                            </button>
                        </div> 
                        <div className="swiper-slide">
                            <button onClick={()=>{let i=25 ;DescF(i)}} className="item-playlist">
                                <div className="icon">
                                    <Image className='img' src={libreofficeImpress} alt=""/>
                                </div>
                                <h5>Office Impress</h5>
                            </button>
                        </div>    
                    </div>
                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        </TecSty>
    )
}

export default TecSec;