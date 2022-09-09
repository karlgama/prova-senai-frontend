import Button from "../../Button"

const Book = ({book}) =>{
    return(
        <div>
            <h3>{book.titulo}</h3>
            <p>{book.preco}</p>
            <p>{book.detalhes}</p>
            <Button title="editar"/>
        </div>
    )
}

export default Book