import Input from "./components/Input";
import Button from "./components/Button"
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <h1>Bem vindo a livraria</h1>
      </div>
      <div>
        <Input label="E-mail"
          value={email}
          setValue={setEmail}
          placeholder="Digite seu e-mail para se logar" />

        <Input label="Senha"
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Digite sua senha" />

        <Button title="login"/>
        <p>Ainda não tem conta?<a href="#">cadastre-se</a></p>
      </div>
    </div>
  );
}

export default App;
