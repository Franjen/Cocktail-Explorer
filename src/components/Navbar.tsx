/*
|--------------------------------------------------------------------------
| Navbar.tsx
|--------------------------------------------------------------------------
|
| Barra de navegación principal.
|
| Se muestra en todas las páginas.
|
| Además muestra la cantidad de
| cócteles agregados a favoritos.
|
|--------------------------------------------------------------------------
*/

import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";
import "../styles/navbar.css";

function Navbar() {

    /* Obtiene la lista de favoritos */
    const { favorites } = useFavorites();

    return (

        <nav className="navbar">

            <h2>
                🍹 Cocktail Explorer
                {" "}
                ({favorites?.length ?? 0})
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

                <li>

                    <Link to="/favorites">

                        Favoritos

                    </Link>

                </li>

            </ul>

        </nav>

    );

}

export default Navbar;