/*
=========================================================
Home.tsx

Página principal del proyecto.

Es la primera pantalla que verá el usuario.
Desde aquí podrá acceder rápidamente
al explorador de cócteles.
=========================================================
*/

import { Link } from "react-router-dom";

import "../styles/home.css";

function Home() {

    return (

        <main className="home">

            <h1>

                🍹 Cocktail Explorer

            </h1>

            <p>

                Descubre cientos de cócteles utilizando
                una API pública.

                Aprende sus ingredientes,
                preparación y guarda tus bebidas favoritas.

            </p>

            <div className="buttons">

                <Link

                    to="/cocktails"

                    className="btn-home"

                >

                    Explorar

                </Link>

                <Link

                    to="/favorites"

                    className="btn-home"

                >

                    Favoritos

                </Link>

            </div>

        </main>

    );

}

export default Home;