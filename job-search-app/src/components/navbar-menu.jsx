import { Link } from 'react-router-dom';
import { RiLogoutCircleLine } from "react-icons/ri";
import { ReactComponent as Logo } from "../assets/gtj-logo.svg";


const Navbarmenu = ( {title1, title2, icon1, icon2, link1, link2} ) => {
  return (
    <div className='container'>
      <div>
        <Link to="/"><Logo className="logo"/></Link>
      </div>
      <ul>
        <li className="list">
          <Link to={link1} className="navbar-items">
            {icon1}
            {title1}
          </Link>
        </li>
        <li className="list">
          <Link to={link2} className="navbar-items">
            {icon2}
            {title2}
          </Link>
        </li>
        <li className="list">
          <Link to="/home" className="navbar-items">
            <RiLogoutCircleLine className="icons"/>
            Log out</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbarmenu;