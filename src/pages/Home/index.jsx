
// se o export que estiver na função ei temos que import dentro de chaves import {capslok} from "./capslok.js"
//import {capslok} from "./capslok.js"
import {Card} from "../components/Card/Card"
import "./style.css"
//sempre que agebte for renderizar um componente ele tem que ter só um elemento
export function Home (){
   return ( 
    <div className="container"> 
    <h1> Tarefas do Aranha </h1>
    <input type="text" placeholder="Qual a tarefa do dia?"></input>
    <button type="button">Adicionar</button>
    <Card name="Piter" time="15:30"/>
    <Card name="Potter" time="17:30"/>
    <Card name="Pepa" time="15:40"/>
    </div>
   )
}
// PROPS são propriedades <input type="text" placeholder="Qual a tarefa do dia?"></input> tem duas props o text e placeholder 



// <>..</> dentre deste cara podemos colocar mais de um elemento isso se chama FRAGMENT ou tag vazia ou div