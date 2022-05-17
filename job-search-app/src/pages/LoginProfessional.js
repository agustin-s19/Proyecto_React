import { Link } from "react-router-dom";

const LoginProfessional = () => {
  return (
    <div className="form-account" >
      <h3>Welcome back</h3>
      <h6>Login to your account as...</h6>
        <navbar className="nabvar-account text-button">
          <Link to="/login/professional"><button className="button-on">PROFESSIONAL</button></Link>
          <Link to="/login/employer"><button className="button-off">RECRUITER</button></Link>
        </navbar>
    </div>
  );
}

export default LoginProfessional;