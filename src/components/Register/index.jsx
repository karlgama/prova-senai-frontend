import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { save } from "../../api/user";
import Button from "../Button";
import InputPassword from "../InputPassword";
import InputText from "../InputText";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const saveUser = async () => {
    const user = { email, password, name };
    console.log("user", user);
    await save(user);
    navigate("/");
  };
  return (
    <div className="register-form">
      <h1>Crie sua conta</h1>
      <div className="register-form-inputs">
        <InputText
          label="Nome"
          value={name}
          setValue={setName}
          placeholder="Digite seu nome"
        />
        <InputText
          label="E-mail"
          value={email}
          setValue={setEmail}
          placeholder="Digite seu e-mail"
        />
        <InputPassword
          label="Senha"
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Digite sua senha"
        />
      </div>
      <Button className="btn" onClick={saveUser} title="salvar" />
    </div>
  );
};

export default Register;
