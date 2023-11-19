import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/post/:id" element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
