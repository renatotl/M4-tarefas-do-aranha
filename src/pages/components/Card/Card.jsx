import "./Card.css"

// nosso componente Card
export function Card(props) {//vamos passar um PROPS aqui PROPS = propriedade
    return (
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}
// passando o valor por propriedade no props


// as props pega o valor lá do <Card/> no index.jsx