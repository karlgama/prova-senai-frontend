import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { listBooks } from "../../api/books";
import Button from "../Button";
import Book from "./Book";
import "./Books.css";

export default function Books() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const registerBook = async () => {
    navigate("/books/register");
  };
  const getBooks = async () => {
    try {
      const res = await listBooks();
      setBooks(res.data);
      console.log("books", books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <section className="books-section">
      <div className="bookHeader">
        <h1>Livros</h1>
        <Button
          className="btn btn-book"
          title="cadastrar novo livro"
          onClick={registerBook}
        />
      </div>
      <div className="books-container">
      {books.length === 0
        ? "Parece que não tem nenhum livro cadastrado ainda"
        : books.map((book) => <Book key={book.codeLivro} book={book} />)}
      </div>
    </section>
  );
}
