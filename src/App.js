import { Header } from "./component/header/Header";
import { Login } from "./component/login/Login";
import { Profile } from "./component/profile/Profile";
import { SignUp } from "./component/signup/SignUp";
import { Todos } from "./component/todos/Todos";
import "./styles.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <SignUp />
      <Login />
      <Profile />
      <Todos /> */}
    </div>
  );
}
