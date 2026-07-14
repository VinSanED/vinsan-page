import Card from "@/components/footer/cartão/card";
import Head from "next/head";

export default function cardPage() {

    return(
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                <meta name="description" content="pagina do cartão pessoal/proficional de Vinicius Sanches, editor e desenvolvedor de conteúdo web-informacional." />
                <meta name="author" content="Vinicius Sanches"/>
                <meta name="keywords" content="cartão de programador, cartão proficional, tecnologia, cartão tecnologico, programador freelancer,content freelancer,design freelancer,vinsan,freelancer, vinicius sanches, vincius, sanches, Vinicius Sanches, pagina proficional,vinsan-page, manipulação de textos, manipulação de imagens, desenvolvimento de sistemas, webdev, desenvolvimento web, escritor, programador, vindaed, vinsanED, VinSanEd, VinSanED, vinsan.ed" />
                <title>VinSan-Card</title>
            </Head>

            <div style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',}}
            > 
                <video style={{
                                width: '100vw',
                                height: '100vh',
                                objectFit: 'cover',
                                position: 'fixed',
                                top: 0,
                                left: 0, 
                                zIndex: -1
                            }} disablePictureInPicture autoPlay muted loop
                >
                    <source src="/videos/tecVid.mp4" type="video/mp4" />
                </video>
                <Card/>
            </div>
        </>
    )
}