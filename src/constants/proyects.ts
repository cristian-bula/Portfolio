import MindWell from '../assets/imgs/mindWell.webp'
import Css2Color from '../assets/imgs/css2Color.webp'
import Gotuuri from '../assets/imgs/gotuuri.webp'

export const PROYECTS=[
    {
        id:1,
        name:"Gotuuri",
        technologies:"Vite JS, Typescript, Tailwind CSS, Express, Mongo DB",
        img: Gotuuri,
        description:"Gotuuri es una plataforma que conecta a viajeros con guías locales, para ofrecer experiencias auténticas en cada destino.",
        url:"https://gotuuri.com",
    },
    {
        id:2,
        name:"Convert target color",
        technologies:"Vite JS, Typescript, Tailwind CSS",
        img: Css2Color,
        description:"Convertir un filtro de css en un color",
        url:"https://css2-color.vercel.app/"
    },
    {
        id:3,
        name:"Mind Well",
        technologies:"Next JS, Typescript, Node JS, Mongo DB",
        img: MindWell,
        description:"Chatbot con ia usando la api de Open Ai, enfocado en la salud mental, (diseñado para dispositivos moviles)",
        url:"https://mind-well.vercel.app/"
    }
    
]