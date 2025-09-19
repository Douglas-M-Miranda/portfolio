import html from '../../assets/imageLogo/html_logo.svg'
import css from '../../assets/imageLogo/css_logo.svg'
import js from '../../assets/imageLogo/javascript_logo.svg'
import ts from '../../assets/imageLogo/typescript_logo.svg'
import react from '../../assets/imageLogo/react_logo.svg'
import sass from '../../assets/imageLogo/sass_logo.svg'
import git from '../../assets/imageLogo/git_icon.svg'

const Technologybank = [
    {
        id: 1,
        name: "html",
        history: "HTML foi minha porta de entrada no mundo da programação. Comecei com o curso de HTML + CSS do Gustavo Guanabara, e foi muito legal ver como era possível criar um site do zero. Eu vivia abrindo o inspecionar elemento para entender a estrutura do HTML e como as tags semânticas eram usadas. Claro que também percebia o quanto ainda tinha pra aprender — às vezes batia aquela ansiedade de pensar se eu conseguiria chegar no nível dos sites mais complexos. Mas, no fundo, isso só me deixava mais animado para continuar evoluindo.",
        image: html
    },
    {
        id: 2,
        name: "css",
        history: "CSS pra mim foi — e talvez ainda seja — um grande bicho de sete cabeças. O HTML deixava os sites bem simples, mas com o CSS meus projetos começaram a se parecer mais com os grandes, como YouTube ou Netflix. Eu ficava impressionado vendo programadores recriando sites só com HTML e CSS, e sentia que era um grande avanço nos meus estudos. Ao mesmo tempo, também era uma dor de cabeça: tanta coisa pra aprender que eu ficava meio perdido. Foi aí que percebi que não precisava saber tudo de uma vez, e sim aprender conforme a necessidade. Desde então, cada projeto virou um aprendizado, e assim fui evoluindo de forma mais leve.",
        image: css
    },
    {
        id: 3,
        name: "javaScrpit",
        history: "JavaScript foi minha primeira linguagem de programação e também onde tive minha primeira crise. No começo, nada fazia sentido: parecia que eu só copiava e colava soluções sem realmente entender. Cheguei a pensar que programação não era pra mim. Mas não quis desistir. Resolvi ir com calma, aprendendo tópico por tópico. Até que, em um exercício de converter graus Celsius para Fahrenheit, consegui resolver sozinho e ver funcionando. Foi ali que senti meu avanço de verdade — um grande virar de chave que me mostrou que eu podia sim seguir nessa profissão.",
        image: js
    },
    {
        id: 4,
        name: "react",
        history: "Por um tempo fiquei só no HTML, CSS e JavaScript. Quando senti que meu conhecimento em JS estava mais firme, decidi avançar e escolhi o React. Logo de cara, levei um choque: ver HTML e JavaScript no mesmo arquivo e ainda tudo dividido em componentes foi algo revolucionário pra mim. Ao mesmo tempo era tudo novo, mas também tinha uma sensação familiar — bem parecida com meu primeiro contato com JavaScript. A diferença é que, com JS, eu pensava que 'precisava' aprender, já com React foi um 'eu quero' aprender. Insisti, persisti, e hoje já consigo usar o React de uma forma bem mais profissional.",
        image: react
    },
    {
        id: 5,
        name: "typescript",
        history: "TypeScript foi uma das tecnologias com que tive menos contato, mas foi graças a ele que me aprofundei mais no conceito de tipos de dados. Achei incrível como ele ajuda a evitar erros que poderiam passar batido no JavaScript. Por isso, sempre que posso, prefiro usar TypeScript — além de me dar mais segurança, sinto que me torna mais proficiente e profissional.",
        image: ts
    },
    {
        id: 6,
        name: "git",
        history: "Sempre usei o GitHub para guardar meus projetos, mesmo os mais simples. No início só usava os comandos do VS Code, sem conhecer muito sobre versionamento ou colaboração. Hoje estou me aprofundando mais em Git para entender melhor branches, merges e boas práticas.",
        image: git
    },
    // { Assim que eu aprender mais eu adiciono
    //     id: 7,
    //     name: "sass",
    //     history: "sasssasssasssasssasssasssasssasssasssasssasssasssasssasssasssasssasssass",
    //     image: sass
    // },
]

export default Technologybank;
