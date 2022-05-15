import Navbar from "./components/NavBar";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import UserPage from "./pages/UserPage"
import Registro from "./pages/Registro"

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/signup_profesional" element={<Registro/>}></Route>
        <Route path="/signup_empleador" element={<UserPage/>}></Route>
        <Route path="*" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
