import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserBoard from "./components/board/UserBoard";
import AdminBoard from "./components/board/AdminBoard";
import StaffBoard from "./components/board/StaffBoard";

import './App.css';
import AuthService from "./components/auth/service/AuthService";
import Logout from "./components/auth/Logout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="signin" element={<Login />} />
      <Route path="signout" element={<Logout />} />
      <Route path="signup" element={<Register />} />
      <Route path="/" element={<UserBoard />} />
      <Route path="/staff" element={<StaffBoard />}/>
      <Route path="/admin" element={<AdminBoard />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
