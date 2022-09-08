  export function capslok(props){// javaScript
    const text = props.text.toUperCase();// nosso text tem o valor do parametro props e tranformando a 1º em maiuscula
   
    return (//html 
       <>  
       <div> Texto do props: {props.text} </div>
        <div>{ text }</div>
        </>

    )
 }