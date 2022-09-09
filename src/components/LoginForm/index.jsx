import InputText from "..//InputText";
import InputPassword from "../InputPassword";
import Button from "../Button";
import { useState } from "react";
import { login } from "../../api/user";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="loginForm">
      <div className="form-container">
        <h1>Bem vindo a Livraria!</h1>
        <div className="inputs">
          <InputText
            label="E-mail"
            value={email}
            setValue={setEmail}
            placeholder="E-mail"
          />
          <InputPassword
            label="Senha"
            value={password}
            setValue={setPassword}
            type="password"
            placeholder="Senha"
          />
        </div>
        <Button className="btn" onClick={handleLogin} title="login" />
        <div className="link">
          Ainda não tem uma conta?
          <a href="/users/register" className="">
            Registre-se
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
