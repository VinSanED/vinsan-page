import { Hed, BtnSeta, HedCont } from "./headerSty";
import { Conteiner } from "@/styles/globalSty";
import { PgPesSty } from "./pgesSty"
import Image from "next/image";

import { Main } from "next/document";

import VinL from "../../public/assets/VinSanLog3.svg";
import Icon_tecnologia from "../../public/assets/artigos.svg";
import Icon_react from "../../public/assets/projetos.svg";
import Icon_html from "../../public/assets/call.svg";
import Icon_lupa from "../../public/assets/UT/icon-lupa.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = ()=>{
  const [carregar, setCarregar] = useState('carregando')

  const [openMenu, setOpenMenu] = useState(false);

  const menOpen = () => {
    const btnMobile = document.getElementById('js-btn-mobile');
    const menuMob = document.querySelector(".menu-mobile")
    const arrowOpenMen = document.querySelector("#arrowOpenMen")
    btnMobile.classList.toggle('is-active');
    menuMob.classList.toggle('menu-opened');
    arrowOpenMen.classList.toggle('deactiveDisplay')
  }

  const [valueInput1, setValueInput1] = useState('')
  const [pes, setPes] = useState('')

  const changeValue = (e)=>{
    setValueInput1(e.target.value)
  }
  
  const [PesArray, setPesArray] = useState('cuDaSai')
  
  useEffect(()=>{
    
    const handlerPesquisaMob = (event)=>{
      event.preventDefault()
      setCarregar('não carregando');
      menOpen()
    }
    const handlerPesquisaDesk = (event)=>{
      event.preventDefault()
      setCarregar('não carregando')
    }

    const paginaPesquisa = (
      <div className="viewPesContains">
          <PgPesSty>
                <div className="pesBar">
                    <form action="" className="search">
                    <input className="pesquisa2" onChange={changeValue} value={valueInput1} type="text" placeholder="Pesquise "/>
                        <button type="submit">
                            <Icon_lupa className="img" width={50} height={30} alt="Icone de lupa"/>
                        </button>
                    </form> 
                </div>  
          </PgPesSty>
        <button className="btnFechaPes" onClick={()=>{setCarregar('carregando')}}>fechar</button>
      </div>
    )
    setPes(paginaPesquisa)
      
    const pesqBarMob = (
              <form action="" key={0} className="search">
                <input className="pesquisa1" type="text" onChange={changeValue} placeholder="Pesquise por artigo ou tema"/>
                <button type="submit"onClick={handlerPesquisaMob}>
                  <Icon_lupa className="img" width={30} height={30} alt="Icone de lupa"/>
                </button>
              </form>
    )
    const pesqBarDesk = (
            <form action="" className="search">
              <input type="text" onChange={changeValue}  placeholder="Pesquise "/>
              <button type="submit" onClick={handlerPesquisaDesk}>
                <Icon_lupa className="img" width={50} height={30} alt="Icone de lupa"/>
              </button>
            </form>
    )

    const arrH = [
      (
        <Conteiner key={0} className="container">
          <a href="#" target="_blank"  className="logo">
            <VinL viewBox="0 0 180 40" width={300} className="logsvg"/>
          </a>
          <nav>
            <ul>
              <li>
                <Link
                   spy="true"
                   smooth="true"
                   duration="500"
                   href='/#artig' className="item-categorie">
                  <Icon_tecnologia className="img" width={30} height={30}  alt="Icone de tecnologia"/>
                  <span>Artigos</span>
                </Link>
              </li>
              <li>
                <Link
                  spy="true"
                  smooth="true"
                  duration="500"
                  href="/#projet" className="item-categorie">
                  <Icon_react className="img" width={30} height={30} alt="Icone de tecnologia"/>
                  <span>Projetos</span>
                </Link>
              </li>
              <li>
                <Link
                 spy="true"
                 smooth="true"
                 duration="500" 
                 href="/#fote" className="item-categorie">
                  <Icon_html className="img" width={30} height={30} alt="Icone de tecnologia"/>
                  <span>Contato</span>
                </Link>
              </li>
            </ul>

            <button onClick={()=>{menOpen()}} className="hamburger hamburger--vortex-r" id="js-btn-mobile" type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </nav>
        </Conteiner>
      ),
      (
            <div key={1} className="menu-mobile">
              <ul>
                <li>
                  <Link href='/#artig' className="item-categorie">
                    <Icon_tecnologia className="img" width={30} height={30} alt="Icone de tecnologia"/>
                    <span>Artigos</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#projet" className="item-categorie">
                    <Icon_react className="img" width={30} height={30} alt="Icone de tecnologia"/>
                    <span>Projetos</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#fote" className="item-categorie">
                    <Icon_html className="img" width={30} height={30} alt="Icone de tecnologia"/>
                    <span>Contato</span>
                  </Link>
                </li>

              </ul>
            </div>
      )
    ]
    setPesArray(arrH)
  },[valueInput1])

  const rolar = ()=>{
    const header = document.getElementById('Hed')
    console.log(window)
    if(header){
      if (window.scrollY > 70) {
        header.classList.add('ativar') 
        console.log("header fixo foi ativado ")
      } else {
        console.log('desativado')
        header.classList.remove('ativar')
      }
    }
  }
  const openMenuFunction = ()=>{
    const header = document.getElementById('Hed')
    const headerC = document.querySelector('.container')
    const arrowOpenMen = document.querySelector("#arrowOpenMen")
    arrowOpenMen.classList.toggle('rodar')
    console.log(headerC)
    if(openMenu){
      headerC.classList.remove('ativar2')
      setTimeout(()=>{
        header.classList.remove('ativar2') 
      },600)
      setOpenMenu(false)
    }else{
      header.classList.add('ativar2')
      setTimeout(()=>{
        headerC.classList.add('ativar2') 
      },500)
      setOpenMenu(true)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', rolar);
    window.addEventListener('touchmove', rolar);
    return () => {
      window.removeEventListener('touchmove', rolar);
      window.removeEventListener('scroll', rolar);
    };
  },[])
    return( 
      <HedCont id="Hed">
          <BtnSeta id="arrowOpenMen" onClick={()=>{openMenuFunction()}}>
          <svg id="openMenuArrow" 
              width="30" height="30"
              viewBox="0 0 30 30"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
          >
            <polyline points="5,5 15,25"/>
            <polyline points="15,25 25,5"/>
          </svg>
        </BtnSeta>
          {carregar==='carregando' ? PesArray[0]: pes}
          {carregar==='carregando' ? PesArray[1]: pes}
      </HedCont>
    )
}

export default Header;