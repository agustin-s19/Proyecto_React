import { Link } from "react-router-dom";

const LoginEmployer = () => {
  return (
    <div className="form-account" >
      <h3>Welcome back</h3>
      <h6>Login to your account as...</h6>
        <navbar className="nabvar-account text-button">
          <Link to="/login/professional"><button className="button-off">PROFESSIONAL</button></Link>
          <Link to="/login/employer"><button className="button-on">RECRUITER</button></Link>
        </navbar>
    </div>
  );
}

export default LoginEmployer;