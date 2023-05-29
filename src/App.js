import { Route, Routes } from "react-router";
import "./App.scss";
import Home from "./components/Home";
import Login from "./components/Login";
import SingUp from "./components/SingUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
      </Routes>
    </div>
  );
}

export default App;
