import { useState, setstate} from "react";
import styled from "styled-components";
import {NavLink, Link} from "react-router-dom";
import "./navbar.css";
import { navItems } from "./navItems"
import Dropdown from "./Dropdown";

const Navbar = () =>{
    const [dropdown, setDropdown] = useState(false);

 return(
    <>
    <nav className="navbar">
        <ul className="nav-items">
            {navItems.map(item=>{
                if(item.title === "Registrate"){
                    return(
                        <li key={item.id} className={item.cName}
                        onMouseEnter={()=> setDropdown(true)} 
                        onMouseLeave={()=> setDropdown(false)}>
                            <Link to={item.path}>
                                {item.title}</Link>
                        { dropdown && <Dropdown/>}  
                        </li>
                    ) 
                    
                }
                else if(item.title === "Ingresar"){
                    return(
                        <li key={item.id} className={item.cName}
                        onMouseEnter={()=> setDropdown(true)} 
                        onMouseLeave={()=> setDropdown(false)}>
                            <Link to={item.path}>
                                {item.title}</Link>
                        { dropdown && <Dropdown/>}  
                        </li>
                    ) 
                    
                }
        })}
        
        </ul>

    </nav>
 
    </>
    
 )
}


export default Navbar















































// const Navbar = () => {
//     const [state, setstate] = useState(false);
    
//     const showDropdown=()=>{
//         setstate(true);
//     }    

//     const hideDropDown=()=>{
//         setstate(false);
//     }
//     return(
//         <nav className="nav"> 
//             <div>
         
//                 <li className="nav-item1" onClick={showDropdown} onMouseLeave={hideDropDown} >Inicia sesión</li>
//                 {state  ?( <ul onClick={showDropdown}>
//                         <li>Profesionales</li>
//                         <li>Empleadores</li>
//                     </ul>):null}
//             </div>
//             {/* <div>
//                 <li className="nav-item2" onMouseEnter={showDropdown} onMouseLeave={hideDropDown}>Regístrate</li>
                    
//                     {state  ?( <ul onMouseEnter={showDropdown}>
//                         <li>Profesionales</li>
//                         <li>Empleadores</li>
//                     </ul>):null}
//            </div> */}
//         </nav>
//     );
// }

// export default Navbar