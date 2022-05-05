import { useState } from "react";
const Navbar = () => {
    const [filterVisible, setFilterVisible] = useState(false);

    return(
        <nav>
            <ul>
         
                <li onClick={() => setFilterVisible(!filterVisible)} >Inicia sesión</li>
                    <ul isVisible={filterVisible} className="opciones">
                        <li>Profesionales</li>
                        <li>Empleadores</li>
                    </ul>
                
                <li onClick={() => setFilterVisible(!filterVisible)}>Regístrate</li>
                    <ul isVisible={filterVisible} className="opciones">
                        <li>Profesionales</li>
                        <li>Empleadores</li>
                    </ul>
            </ul>
        </nav>
    );
}

export default Navbar