// components/EpubReader.js

import React, { useEffect, useRef, useState} from 'react';
import Epub from 'epubjs';

import { AnimatedYea } from '../artPsty';

const ICCViewer = ({ epubFilePath }) => {
  const epubContainerRef = useRef(null);
  const bookRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const loadEpub  = async ()=>{
      try{
        setIsLoading(true)
        bookRef.current = Epub(`https:/vinsan-page.vercel.app/${epubFilePath}`);
        const rendition = bookRef.current.renderTo(epubContainerRef.current, {
          width: '100vw',
          height: "100vh",
          layout: 'reflowable',
          flow:'scrolled-continuous',
          allowScriptedContent: true,
        });
        
        await rendition.display()
      }catch(e){
        console.error(e)
        setError(e)
      }finally{
        setIsLoading(false)
      }
    }
    if (epubFilePath) {
      loadEpub()
    }

    return () => {
      if (bookRef.current) {
        bookRef.current.destroy();
      }
    };
  }, [epubFilePath]);

  if(error){
    return(
      <>erro ao carregar epub:{error.message}</>
    )
  }
  return(
    <>
      {isLoading && <AnimatedYea height={100} width={100}/>}
      <div  ref={epubContainerRef} />
    </>
  );
};

export default ICCViewer;