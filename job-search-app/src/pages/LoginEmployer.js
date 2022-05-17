import { Link } from "react-router-dom";
import Input from "../components/input";

const LoginEmployer = () => {
  return (
    <section className="container-login">
      <div>
        <h3>Welcome back</h3>
        <h6>Login to your account as...</h6>
          <navbar className="nabvar-account text-button">
            <Link to="/login/professional"><button className="button-off">PROFESSIONAL</button></Link>
            <Link to="/login/employer"><button className="button-on">RECRUITER</button></Link>
          </navbar>
        <form className="style-form">
          <Input
            id = "email"
            type = "email"
            label = "EMAIL"
            placeholder = "user@email.com"
          />
          <Input
            id = "password"
            type = "password"
            label = "PASSWORD"
            placeholder = "******"
          />
        </form>
      </div>
    </section>
  );
}

export default LoginEmployer;