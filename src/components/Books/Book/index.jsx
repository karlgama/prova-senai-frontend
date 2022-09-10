import Button from "../../Button";
import "./Book.css";

const Book = ({ book }) => {
  return (
    <div className="book">
      <h3>{book.titulo}</h3>
      <p>{book.preco}</p>
      <p>{book.detalhes}</p>
      <Button className="btn" title="editar" />
    </div>
  );
};

export default Book;
