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

            {/* Título principal */}

            <h1>

                🍹 Cocktail Explorer

            </h1>

            {/* Descripción */}

            <p>

                Descubre cientos de cócteles,
                conoce sus ingredientes,
                aprende cómo prepararlos
                y encuentra nuevas bebidas
                para cualquier ocasión.

            </p>

            {/* Imagen principal */}

            <img

                src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"

                alt="Cocktail"

            />

            {/* Botón */}

            <Link

                to="/cocktails"

                className="btn-home"

            >

                Explorar Cócteles

            </Link>

        </main>

    );

}

export default Home;