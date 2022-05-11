import { useState, setstate} from "react";
const Navbar = () => {
    const [state, setstate] = useState(false);
    
    const showDropdown=()=>{
        setstate(true);
    }    

    const hideDropDown=()=>{
        setstate(false);
    }
    return(
        <nav className="nav"> 
            <div>
         
                <li className="nav-item1" onClick={showDropdown} onMouseLeave={hideDropDown} >Inicia sesión</li>
                {state  ?( <ul onClick={showDropdown}>
                        <li>Profesionales</li>
                        <li>Empleadores</li>
                    </ul>):null}
            </div>
            {/* <div>
                <li className="nav-item2" onMouseEnter={showDropdown} onMouseLeave={hideDropDown}>Regístrate</li>
                    
                    {state  ?( <ul onMouseEnter={showDropdown}>
                        <li>Profesionales</li>
                        <li>Empleadores</li>
                    </ul>):null}
           </div> */}
        </nav>
    );
}

export default Navbar