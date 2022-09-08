
// se o export que estiver na função ei temos que import dentro de chaves import {capslok} from "./capslok.js"
//import {capslok} from "./capslok.js"

//sempre que agebte for renderizar um componente ele tem que ter só um elemento
export function Home (){
   return ( 
    <> 
    <h1> Tarefas do Aranha </h1>
    <input type="text" placeholder="Qual a tarefa do dia?"></input>
   
    </>
   )
}

// <>..</> dentre deste cara podemos colocar mais de um elemento isso se chama FRAGMENT ou tag vazia ou div