
import { DivInfo } from "../wireSty";
import Image from "next/image";
import post01 from "../../../../../../public/assets/UT/modaPost/PostGhost.jpg"
import xizinho from "../../../../../../public/assets/UT/xizinho.svg"
import {useState } from "react";


const ModalWire2 = ({setSair})=>{


  const [opinion, setOpinion] = useState('');
  const [userEmail , setUserEmail] = useState('');
  const [userName , setUserName] = useState('');

  const [label , setLabel]= useState('Faça um orçamento!');

  const nameRegex  = /^[A-Za-z\s]+$/;
  const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar o comportamento padrão de submit do formulário  
    // Implementação da lógica para enviar o formulário    
    if (opinion.trim() !== '' && userEmail.trim() !== '' && userName!== '') {
      if(emailRegex.test(userEmail)){
        if(nameRegex.test(userName)){
          setLabel('mensagem enviada')
          const data = { opinion, userEmail, userName };
    
          try {
            const response = await fetch('/api/sendOpinion', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
              timeout: 15000,
            });
            
            if (response.status === 200) { // Verifique o status da resposta para determinar se a requisição foi bem-sucedida
              console.log('Opinião enviada com sucesso!');
            } else {
              console.log(response.status)
              console.error('Erro ao enviar a opinião.');
            }
          } catch (error) {
            console.error('Erro na requisição:', error);
          }
        }else{
          setLabel('nome invalido')
        }
      }else{
        setLabel('email Inválido')
      }
    } else {
      console.log('o Campo de opinião, email ou nome estão vazio.');
      setLabel('Campo de opinião, email ou nome vazio.'); 
    }
   };
    return(
        <DivInfo id="modaDev1" className="mod">
            <div className="Sair">
                <button onClick={(e)=>{e.preventDefault();setSair('sair')}}><Image src={xizinho} style={{width:'100%', height:"100%"}} alt="x de fechar"/></button>
            </div>
            <div className="contain">
                <div className="inform">
                    <div className="imagem">
                        <Image style={{borderRadius:'6px', width:'100%', height:'auto'}}  alt="imagem ifografico" src={post01}/>
                    </div>
                    <div className="texto">
                        <h2>Escrita Fantasma</h2>
                        <p>O Ghostwriting é mais do que a simples transcrição de pensamentos; é a habilidade de capturar a essência de uma voz, traduzindo-a em uma sinfonia textual, dando Voz às Ideias no Silêncio Literário</p>
                    </div>
                </div>
                <div className="formu">
                    <div className="areaTex">
                        <h4>{label}</h4>
                        <label>
                            <textarea
                            placeholder="com relação ao desenvolvimento de textos de autoria fantasma, como posso lhe ajudar...?"
                            className="campoTexto"
                            spellCheck="false" 
                            onChange={(e)=>{setOpinion("tratado-se de escrita fantastama",e.target.value);}}
                            rows={4}
                            cols={50}                     
                            />
                        </label>
                    </div>
                    <form className="formNE" onSubmit={handleSubmit}>
                        <div className="divTxt">
                          <label > 
                            <input
                              className="campoTexto"
                              placeholder="Seu nome..."
                              onChange={(e) =>{setUserName(e.target.value)}}
                              type="name"
                            />
                          </label>

                          <label>
                            <input 
                              className="campoTexto"
                              type="Email" 
                              placeholder="Seu Email..."
                              onChange={(e) => {setUserEmail(e.target.value)}}
                            />
                          </label>
                        </div>
                    
                        <button  type="submit">Enviar</button>
                    </form>
                </div>  
            </div>
        </DivInfo>
    )
} 

export default ModalWire2;