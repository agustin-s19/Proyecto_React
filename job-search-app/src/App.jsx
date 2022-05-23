import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage"
import LoginProfessional from "./pages/LoginProfessional";
import LoginEmployer from "./pages/LoginEmployer";
import SignUp from "./pages/Signup";
import JobOffers from "./pages/JobEmployerPage";
import CreateJob from "./pages/CreateJobPage";
import JobDetail from "./pages/JobDetail";
import FindJobs from "./pages/FindJobsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/login" element={<LoginProfessional />}></Route>
          <Route path="/login/professional" element={<LoginProfessional />}></Route>
          <Route path="/login/employer" element={<LoginEmployer />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/jobs/all" element={<FindJobs />}></Route>
          <Route path="/jobsdetails" element={<JobDetail />}></Route>
          <Route path="/jobs/:id" element={<JobOffers />}></Route>
          <Route path="/jobs/new" element={<CreateJob />}></Route>
          <Route path="*" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
