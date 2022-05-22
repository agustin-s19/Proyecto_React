import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage"
import NavbarHeader from "./components/navbar2";
import LoginProfessional from "./pages/LoginProfessional";
import LoginEmployer from "./pages/LoginEmployer";
import SignUp from "./pages/Signup";
import JobOffers from "./pages/JobEmployersPage";
import JobDetail from "./pages/JobDetail";

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
        <Route path="/jobs" element={<JobOffers />}></Route>
        <Route path="/jobsdetails" element={<JobDetail />}></Route>
        {/* "/jobs/:id" */}
        <Route path="*" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
