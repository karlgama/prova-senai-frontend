import Button from "../../Button";
import "./Book.css";

const Book = ({ book }) => {
  return (
    <div className="book">
      <div className="imgGrd">
        <img src={book.imgGrd} alt="" />
      </div>
      <h3>{book.titulo}</h3>
      <p>{book.preco}</p>
      <Button className="btn" title="editar" />
      <p>{book.detalhes}</p>
    </div>
  );
};

export default Book;
