import ButtonSubmit from "../components/button-submit";
import Input from "../components/input";
import { ReactComponent as WomanImg } from "../assets/woman.svg"

const SignUp = () => {
  return (
    <section className="container-account">
      <div className="wrapper">
        <h3>Good choice!</h3>
        <h6>Create a new account here...</h6>
        <form className="style-form">
          <Input
            id = "name"
            label = "NAME"
            placeholder = "John Doe"
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
            id = "role"
            label = "ROLE"
            placeholder = "Employer"
          />
          <div className="button-center">
            <ButtonSubmit>CREATE AN ACCOUNT</ButtonSubmit>
          </div>
        </form>
      </div>
      <div className="wrapper-img">
        <WomanImg />
      </div>
    </section>
  )
}

export default SignUp;