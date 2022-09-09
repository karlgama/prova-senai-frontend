import InputText from "../InputText";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../Button";
import {save} from "../../api/books";
const BookRegister = (props) => {
  const [imgPeq, setImgPeq] = useState("");
  const [imgGrd, setImgGrd] = useState("");
  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState();
  const [detalhes, setDetalhes] = useState("");

  const navigate = useNavigate();

  const saveBook = async () => {
    const book = { imgPeq, imgGrd, titulo, preco, detalhes };
    await save(book);
    navigate("/books");
  };

  return (
    <div className=" bookRegister">
      <h1 className="title">Registre um novo livro</h1>
      <InputText
        label="Titulo"
        value={titulo}
        setValue={setTitulo}
        placeholder="Digite o titulo do livro"
      />{" "}
      <InputText
        label="Detalhes"
        value={detalhes}
        setValue={setDetalhes}
        placeholder="Digite uma descrição"
      />{" "}
      <InputText
        label="Preço"
        value={preco}
        setValue={setPreco}
        placeholder="Digite seu nome"
      />{" "}
      {/* <InputText
        label="Nome"
        value={name}
        setValue={setName}
        placeholder="Digite seu nome"
      />{" "}
      <InputText
        label="Nome"
        value={name}
        setValue={setName}
        placeholder="Digite seu nome"
      /> */}
      <Button onClick={saveBook} title="salvar" />
    </div>
  );
};

export default BookRegister;
