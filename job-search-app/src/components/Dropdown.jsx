import React, {useState} from 'react'
import { UserDropdown, UserDropdown2} from './navItems'
import { Link } from 'react-router-dom'
import "./dropdown.css"

const Dropdown = () => {

    const [dropdown, setDropdown] = useState(false);

  return (
    <>
    <ul className={dropdown ? "submenu clicked " : "submenu"} 
    onClick={() => setDropdown(!dropdown)}>
        {UserDropdown.map((item) =>{
            return(
                <li key={item.id} >
                    <Link to={item.path} className={item.className} 
                    onClick={() => setDropdown(false)}>
                        {item.title}
                    </Link>
                </li>
            )
        })}
    </ul>
    </>
  )
}

export default Dropdown