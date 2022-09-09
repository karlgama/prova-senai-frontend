import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { save } from "../../api/user";
import Button from "../Button";
import InputPassword from "../InputPassword";
import InputText from "../InputText";

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
    <div>
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
      <Button onClick={saveUser} title="salvar" />
    </div>
  );
};

export default Register;
