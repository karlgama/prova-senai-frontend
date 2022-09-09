import InputText from "..//InputText";
import InputPassword from "../InputPassword";
import Button from "../Button";
import { useState } from "react";
import {  login } from "../../api/user";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      var user = { email, password };
      const res = await login(user);
      navigate("/books");
    } catch (error) {
      console.log(error);
      alert("algo deu errado");
    }
  };
  
  const userRegister = async (e) => {
    try {
      navigate("/users/register");
    } catch (error) {
      console.log(error);
      alert("usuário ou senha incorretos");
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div>
        <h1>Bem vindo a livraria</h1>
      </div>
      <InputText
        label="E-mail"
        value={email}
        setValue={setEmail}
        placeholder="Digite seu e-mail para se logar"
      />

      <InputPassword
        label="Senha"
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Digite sua senha"
      />

      <Button onClick={handleLogin} title="login" />
      <Button onClick={userRegister} title="cadastre-se" />
    </div>
  );
};

export default LoginForm;
