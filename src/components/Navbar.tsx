/*
Navbar.tsx

Componente reutilizable.

Se muestra en todas las páginas
de la aplicación.

Su función es permitir
la navegación entre vistas.
*/


import {
    Link
} from "react-router-dom";

import "../styles/navbar.css";



function Navbar() {


    return (

        <nav className="navbar">

            <h2>

                🍹 Cocktail Explorer

            </h2>


            <ul>

                <li>

                    <Link to="/">Inicio</Link>

                </li>

                <li>

                    <Link to="/cocktails">Cócteles</Link>

                </li>

                <li>

                    <Link to="/about">Acerca</Link>

                </li>

            </ul>

        </nav>

    );

}


export default Navbar;