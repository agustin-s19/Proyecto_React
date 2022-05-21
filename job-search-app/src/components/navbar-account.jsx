import { Link } from "react-router-dom";

const NavbarAccount = () => {
  return (
    <navbar className="nabvar-account text-button">
      <Link to="/login/professional"><button className="button-off">PROFESSIONAL</button></Link>
      <Link to="/login/employer"><button className="button-on">RECRUITER</button></Link>
    </navbar>
  );
}

export default NavbarAccount;