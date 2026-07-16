/*
|--------------------------------------------------------------------------
| Navbar.tsx
|--------------------------------------------------------------------------
|
| Barra de navegación principal.
|
| Este componente aparece en todas las páginas.
|
| Funciones:
|
| - Mostrar nombre de la aplicación.
| - Navegar entre páginas.
| - Mostrar cantidad de favoritos guardados.
|
|--------------------------------------------------------------------------
*/


import {
    Link
} from "react-router-dom";


import {
    useFavorites
} from "../hooks/useFavorites";


import "../styles/navbar.css";





function Navbar() {


    /*
    Obtiene la lista de favoritos
    desde el hook personalizado.
    */

    const {
        favorites
    } = useFavorites();




    return (


        <nav className="navbar">


            {/* Nombre de la aplicación */}

            <h2>

                🍹 Cocktail Explorer

                {" "}

                (

                {favorites.length}

                )

            </h2>





            <ul>


                <li>

                    <Link to="/">

                        Inicio

                    </Link>

                </li>



                <li>

                    <Link to="/cocktails">

                        Cócteles

                    </Link>

                </li>



                <li>

                    <Link to="/favorites">

                        Favoritos

                    </Link>

                </li>



                <li>

                    <Link to="/about">

                        Acerca

                    </Link>

                </li>


            </ul>



        </nav>


    );


}



export default Navbar;