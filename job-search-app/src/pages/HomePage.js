import ButtonSubmit from "../components/button-submit";
import { ReactComponent as GroupImg } from "../assets/employees-img.svg";
import { ReactComponent as Lens } from "../assets/lens.svg"
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section className="main-container">
        <h2>
          The best place to <span> get that job</span>
        </h2>
        <p>
          On Get That Job, you'll apply to exclusive jobs, which have been
          carefully selected in worldwide companies. On the other hand, if you
          are a employer, here you'll find the best talent for your company.
        </p>
        <Link to="signup" style={{textDecoration: 'none'}}>
          <ButtonSubmit>CREATE AN ACCOUNT NOW</ButtonSubmit>
        </Link>
        <GroupImg />
      </section>
      <section className="secondary-container">
        <div className="container-text">
          <h3>Find your next job</h3>
          <p>
            We have a job for you! No matter your background or previous
            experience. We have different filters for each type of profile.
            Join us!
          </p>
        </div>
        <div className="container-image">
          <Lens />
        </div>
      </section>
    </>
  );
};

export default HomePage;
