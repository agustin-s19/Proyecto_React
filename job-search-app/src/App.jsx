import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage"
import NavbarHeader from "./components/navbar2";
import LoginProfessional from "./pages/LoginProfessional";
import LoginEmployer from "./pages/LoginEmployer";
import SignUpProfessional from "./pages/SignupProfessional";
import SignUpEmployer from "./pages/SignupEmployer";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavbarHeader />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<LoginProfessional />}></Route>
        <Route path="/login/professional" element={<LoginProfessional />}></Route>
        <Route path="/login/employer" element={<LoginEmployer />}></Route>
        <Route path="/signup" element={<SignUpProfessional />}></Route>
        <Route path="/signup/professional" element={<SignUpProfessional/>}></Route>
        <Route path="/signup/employer" element={<SignUpEmployer/>}></Route>
        <Route path="*" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
