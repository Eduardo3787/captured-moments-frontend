import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { Login } from "./pages/Auth/Login";
import { SignUp } from "./pages/Auth/SignUp";

export function App() {
 

  return (
    <Router>
    <Routes>
    <Route path="/" element={<Root />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
    </Router>
  )
}

const Root = () => {
  const isAithenticated = !!localStorage.getItem('cm:token');

  return isAithenticated ? <Navigate to="/home" /> : <Navigate to="/login" />
}

