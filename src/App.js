import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserBoard from "./components/board/UserBoard";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="signin" element={<Login />} />
      <Route path="signup" element={<Register />} />
      <Route path="/" element={<UserBoard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
