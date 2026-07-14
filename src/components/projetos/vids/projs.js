import thumbMar from "../../../../public/assets/imaProjetos/marvel/marvelThumb.png"
import thumbComp from "../../../../public/assets/imaProjetos/comptwave/compThum.png"
import thumbMilk from "../../../../public/assets/imaProjetos/milkShake/milkThum.png"
import thumbBlog from "../../../../public/assets/imaProjetos/blogExam/thumbBlog.png"
import thumbRick from "../../../../public/assets/imaProjetos/siteRick/thumb.jpg"
import thumbSys from "../../../../public/assets/imaProjetos/systemInf/thumbSys.png"

import BackMar from "../../../../public/assets/imaProjetos/marvel/marvelBack.png"
import BackComp from "../../../../public/assets/imaProjetos/comptwave/backComp.png"
import BackMilk from "../../../../public/assets/imaProjetos/milkShake/milkBack.png"
import BackBlog from "../../../../public/assets/imaProjetos/blogExam/blogExamBack.png"
import BackRick from "../../../../public/assets/imaProjetos/siteRick/rickBack.png"
import BackSys from "../../../../public/assets/imaProjetos/systemInf/sysBack.png"

export const projetos = {
    proj01:{
        text:{
            title:"Comptwave",
            p1:"Este é um simples projeto de página estática, criado a partir de HTML e CSS, voltado a uma organização fictícia de nome “Computwave”. Uma interface moderna, de cores frias, semelhante a maioria das pagina estáticas presentes na web. Pouca interatividade, poucos recursos estilísticos e sem nenhuma funcionalidade.",
            p2:"O propósito é criar uma pagina de apresentação e redirecionamento, onde os usuários possam descobrir a existência da organização que está por trás da página, conhecendo brevemente as suas principais características e canais de comunicação. Dando aos usuários a opção de clicar n’um botão link de redirecionamento para conhecer mais afundo sobre a organização, seus objetivos, serviços e canais de comunicação."
        },
        backIma:BackComp.src,
        thumbIma:thumbComp.src,
        vidUrl:"u9XcDq4NEh8"
    },
    proj02:{
        text:{
            title:"The Milk Shaker's",
            p1:"Eis um exemplo simples de página estática produzida a partir de códigos HTML e SASS. Com foco na exibição de textos, imagens e botões de redirecionamento. Com uma interface divertida, em tons de rosa/pink, elementos posicionados de forma familiar, a pagina tem o único propósito de sugerir ao usuário que clique no botão, sem mais funcionalidades.",
            p2:"The Milk Shakers é uma empresa fictícia, mas que pelo sugestivo nome, deve ter sido implementado por algum do ramo de sorveteria. Quis integrar algo divertido ao meu portfólio (os milkshakes pareceram-me dignos deste propósito), então tive o trabalho de codificar esta pagina estática de redirecionamento, ilustrar alguns ícones e compor algumas imagens. Poupei-me dos textos persuasivos, postergando-os para trabalhos posteriores., adicionei ‘lorem’ e textos demonstrativos nos elementos de texto, sem quebrar a estética da página."
        },
        backIma:BackMilk.src,
        thumbIma:thumbMilk.src,
        vidUrl:"Z9l7FJikaWE"
    },
    proj03:{
        text:{
            title:"Blog example",
            p1:"Inspiração para minha pagina pessoal, este projeto bem ilustra um templete elegante para blogs modernos, com interatividade nos botões e imagens, feito em duas paginas ilustrativas, com abertura a mais paginas. Codificado em HTML, CSS e JS, faz uso da biblioteca Swiper.",
            p2:"Apenas o templete do projeto foi construído, com textos e imagens demonstrativas. Funcionalidades como: resultado de pesquisa; carregar mais; post’s semelhantes ; post’s por categoria; post’s mais vistos; navegação por tópicos; tempo de leitura; conexão com banco de dados para alimentar o blog com artigos e podcast’s e painel para gerenciamento de arquivos, podem ser adicionadas."
        },
        backIma:BackBlog.src,
        thumbIma:thumbBlog.src,
        vidUrl:"iMt0JqK8-Lc"
    }, 
    proj04:{
        text:{
            title:"Rick and Morty",
            p1:"Eis um exemplo simples de projeto ReactJS. O projeto de site para a série animada Rick and Morty, é codificado em HTML, CSS, JS e JSX, por cima da biblioteca de interfaces ReactJS. Sendo feito em três paginas, que podem ser acessadas pelo menu presente no cabeçalho da página.",
            p2:"A primeira pagina é uma breve apresentação da série, separada em três seções, que podem rapidamente serem acessadas por um menu lateral de navegação entre seções. A segunda página exibe todos os personagens de Rick and Morty, em cards posicionados em grade, que alimentados por uma API. A terceiro página é um simples exemplo de formulário de cadastro."
        },
        backIma:BackRick.src,
        thumbIma:thumbRick.src,
        vidUrl:"gG5hHvtYMPo"
    },
    proj05:{
        text:{
            title:"System Infor",
            p1:"System Infor é um projeto de web-aplicação dedicado à análise e monitoramento de recursos computacionais, foi codificado em HTML, CSS, JS, por cimado do framework NextJS, fazendo uso, principalmente da lib System Information, D3.JS e do módulo express, é complementado pelo aplicativo Grafana, na parte de exibição de dados, que coleta os dados disponibilizados por system Infor em um objeto JSON armazenado em um servidor local",
            p2:"Um aplicativo de página única, dividido em três seções, que podem ser acessadas pelo menu disponível no cabeçalho da aplicação. A primeira seção é uma mera apresentação ao ‘monitoramento de recursos’ e aos dois principais componentes de processamento do computador, isto é; RAM e CPU. A segunda seção é um painel de exibição de dados: no topo um gráfico de barras, que exibe a carga de trabalho da CPU, no centro três widGets posicionados; no canto superior esquerdo do centro, há um medidor Gauge, que exibe a velocidade da CPU, logo abaixo alguns medidores em barra(de acordo com o número de núcleos, no meu caso 4), que exibem a carga de trabalho por núcleo de processamento, ao lado direito um painel de exibição tabular, que mostra alguns dados sobre as tarefas em execução no sistema do usuário. E na base do painel, dois medidores em barras, que exibem o uso de SWAP e RAM."
        },
        backIma:BackSys.src,
        thumbIma:thumbSys.src,
        vidUrl:"qMF2wR8qpIU"
    },
    proj06:{
        text:{
            title:"Marvel",
            p1:"Eis um exemplo simples de um projeto de web-Site construído em nextJS. Com rotas dinâmicas e componentes gerenciáveis. O projeto de aplicação que exibe os personagens da Marvel é construído a partir do padrão; HTML, CSS e JS, feito por cima do framework NextJS e usando o CMS Prismic para gerenciar características dos componentes da página.",
            p2:"O projeto possui três paginas, para cada personagem exibido uma nova rota URL é criada para acessar os detalhes do personagem em uma nova página, neste caso são apenas dois personagens presentes, então a primeira pagina exibe algumas informações sobre a Marvel e dois cards de personagem, as outras duas paginas são de detalhes sobre os personagens."
        },
        backIma:BackMar.src,
        thumbIma:thumbMar.src,
        vidUrl:"PFHiBESAsUQ"
    }
}