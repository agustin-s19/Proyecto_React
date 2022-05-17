import { RiUserAddLine, RiUserReceived2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/gtj-logo.svg";
import ButtonNavbar from "./button-navbar";

const NavbarHeader = () => {
  return (
    <header className="navbar-header">
      <Link to="/"><Logo /></Link>
      <div className="buttons">
        <Link to="signup" style={{textDecoration: 'none'}}><ButtonNavbar>
          <RiUserAddLine size={20}/>SIGN UP</ButtonNavbar></Link>
        <Link to="/login" style={{textDecoration: 'none'}}><ButtonNavbar>
          <RiUserReceived2Line size={20}/>LOGIN</ButtonNavbar></Link>
      </div>
    </header>
  );
}

export default NavbarHeader;