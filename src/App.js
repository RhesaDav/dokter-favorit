import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import LoginRegister from "./auth/LoginRegister";
import Main from "./dashboard/main/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
