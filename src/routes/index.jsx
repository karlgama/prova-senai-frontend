import { Routes, Route, useParams } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Books from "../components/Books";
import Register from "../components/Register";
import BookRegister from "../components/BookRegister";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<LoginForm />} />
      <Route path="/books" exact element={<Books />} />
      <Route path="/users/register" exact element={<Register />} />
      <Route path="/books/register" exact element={<BookRegister />} />
    </Routes>
  );
}
