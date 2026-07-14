// Exemplo de carregamento sob demanda
import dynamic from 'next/dynamic';
import React,{Suspense} from 'react';

const SecHer = dynamic(() => import('@/components/secHer/secHerInd'));
const ArtP = dynamic(() => import( '@/components/artigos/artP'));
const ProjInd = dynamic(() => import( '@/components/projetos/projInd'));
const TecSec = dynamic(() => import('@/components/tecnologias/tecPage'));
const ArrowIndicator = dynamic(() => import('@/components/setinha/setaIndex'));


  



export default function Home() {
  return (
    <>
       <ArrowIndicator/>
        <SecHer/>
        <ArtP/>
        <ProjInd/>
        <TecSec/>
    </>
  );
}