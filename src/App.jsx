import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes/index";
function App() {
  return (
    <div className="app">
      <header className="App-header"></header>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
