import ButtonSubmit from "../components/button-submit";
import { ReactComponent as GroupImg } from "../assets/employees-img.svg";
import { ReactComponent as LensImg } from "../assets/lens.svg"
import { Link } from "react-router-dom";
import NavbarHeader from "../components/navbar-header";


const HomePage = () => {
  return (
    <>
      <NavbarHeader />
      <section className="main-container">
        <h2>
          The best place to <span> get that job</span>
        </h2>
        <p>
          On Get That Job, you'll apply to exclusive jobs, which have been
          carefully selected in worldwide companies. On the other hand, if you
          are an employer, here you'll find the best talent for your company.
        </p>
        <Link to="/jobs" style={{textDecoration: 'none'}}>
          <ButtonSubmit>CREATE ACCOUNT NOW</ButtonSubmit>
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
          <LensImg />
        </div>
      </section>
    </>
  );
};

export default HomePage;
