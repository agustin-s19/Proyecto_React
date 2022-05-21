import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage"
import NavbarHeader from "./components/navbar2";
import LoginProfessional from "./pages/LoginProfessional";
import LoginEmployer from "./pages/LoginEmployer";
import SignUp from "./pages/Signup";
import Creado from "./pages/Creado"

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <NavbarHeader /> */}
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<LoginProfessional />}></Route>
        <Route path="/login/professional" element={<LoginProfessional />}></Route>
        <Route path="/login/employer" element={<LoginEmployer />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/creado" element={<Creado />}></Route>
        <Route path="*" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
