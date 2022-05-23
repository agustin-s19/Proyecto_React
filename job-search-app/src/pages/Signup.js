import ButtonSubmit from "../components/button-submit";
import Input from "../components/input";
import { ReactComponent as WomanImg } from "../assets/woman.svg"
import InputSelect from "../components/input-select";
import NavbarHeader from "../components/navbar-header";

const SignUp = () => {
  return (
    <>
      <NavbarHeader />
      <section className="container-account">
        <div className="wrapper">
          <h3>Good choice!</h3>
          <h6>Create a new account here...</h6>
          <form className="style-form">
            <Input
              id = "name"
              label = "NAME OR COMPANY NAME"
              placeholder = "Name or Company name"
            />
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
            <Input
              id = "password"
              type = "password"
              label = "PASSWORD CONFIRMATION"
              placeholder = "******"
            />
            <InputSelect
              id = "role"
              label = "ROLE"
              options = {["Applicant", "Employer"]}
            />
            <div className="button-center">
              <ButtonSubmit>CREATE ACCOUNT</ButtonSubmit>
            </div>
          </form>
        </div>
        <div className="wrapper-img">
          <WomanImg />
        </div>
      </section>
    </>
  )
}

export default SignUp;