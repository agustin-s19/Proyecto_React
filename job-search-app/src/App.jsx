import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage"
import NavbarHeader from "./components/navbar2";
import LoginProfessional from "./pages/LoginProfessional";
import LoginEmployer from "./pages/LoginEmployer";
import SignUp from "./pages/Signup";
<<<<<<< HEAD
import Creado from "./pages/Creado"
=======
import JobOffers from "./pages/JobEmployersPage";
>>>>>>> 988e6bb7352dce44ea8a48bc3fb565aec610057a

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
<<<<<<< HEAD
        <Route path="/creado" element={<Creado />}></Route>
=======
        <Route path="/jobs/:id" element={<JobOffers />}></Route>
>>>>>>> 988e6bb7352dce44ea8a48bc3fb565aec610057a
        <Route path="*" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
