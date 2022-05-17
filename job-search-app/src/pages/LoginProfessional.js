import { Link } from "react-router-dom";
import ButtonSubmit from "../components/button-submit";
import Input from "../components/input";
import { ReactComponent as ManImg } from "../assets/man.svg"

const LoginProfessional = () => {
  return (
    <section className="container-account">
      <div className="wrapper">
        <h3>Welcome back</h3>
        <h6>Login to your account as...</h6>
          <navbar className="nabvar-account text-button">
            <Link to="/login/professional"><button className="button-on">PROFESSIONAL</button></Link>
            <Link to="/login/employer"><button className="button-off">RECRUITER</button></Link>
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
          <div className="button-center">
            <ButtonSubmit>LOGIN</ButtonSubmit>
          </div>
        </form>
      </div>
      <div className="wrapper-img">
        <ManImg />
      </div>
    </section>
  );
}

export default LoginProfessional;