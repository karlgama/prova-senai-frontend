import InputText from "../InputText";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../Button";
import { save } from "../../api/books";
import "./BookRegister.css";
import Dropzone from "react-dropzone";
import { DropContainer, UploadMessage } from "./styles";
import ImagePreview from "../ImagePreview";

const BookRegister = (props) => {
  // const [imgPeq, setImgPeq] = useState(null);
  // const [imgGrd, setImgGrd] = useState(null);
  const [uploadFiles, setUploadFiles] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState();
  const [detalhes, setDetalhes] = useState("");
  const [previews, setPreviews] = useState([]);
  const navigate = useNavigate();

  const handleUpload = async (files) => {
    let images = [];
    if (files[0]) {
      const imgP = {
        img: files[0],
        preview: URL.createObjectURL(files[0]),
      };
      images.push(imgP);
    }
    if (files[1]) {
      const imgP = {
        img: files[1],
        preview: URL.createObjectURL(files[1]),
      };
      images.push(imgP);
    }
    setUploadFiles([files[0], files[1]]);
    setPreviews(images);
  };

  const saveBook = async () => {
    const book = { uploadFiles, titulo, preco, detalhes };
    console.log("salvar", book);
    await save(book);
    navigate("/books");
  };
  const renderDragMessaget = (isDragActive, isDragReject) => {
    if (!isDragActive)
      return <UploadMessage>Arraste arquivos aqui...</UploadMessage>;
    if (isDragReject)
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  };
  return (
    <div className="book-register">
      <h1 className="title">Registre um novo livro</h1>
      <div className="inputs">
        <InputText
          label="Titulo"
          value={titulo}
          setValue={setTitulo}
          placeholder="Digite o titulo do livro"
        />
        <InputText
          label="Detalhes"
          value={detalhes}
          setValue={setDetalhes}
          placeholder="Digite uma descrição"
        />
        {/* criar input number */}
        <InputText
          label="Preço"
          value={preco}
          setValue={setPreco}
          placeholder="Digite o preço do livro"
        />
        <Dropzone accept="image/*" onDropAccepted={handleUpload}>
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <DropContainer
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} />
              {renderDragMessaget(isDragActive, isDragReject)}
            </DropContainer>
          )}
        </Dropzone>
        <div className="images-preview">
          {previews.map((preview) => (
            <ImagePreview src={preview.preview} />
          ))}
        </div>
      </div>

      <Button className="btn" onClick={saveBook} title="salvar" />
    </div>
  );
};

export default BookRegister;
