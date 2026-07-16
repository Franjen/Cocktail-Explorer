/*
|--------------------------------------------------------------------------
| Home.tsx
|--------------------------------------------------------------------------
|
| Página principal de la aplicación.
|
| Es la primera pantalla que verá el usuario.
|
| Funciones:
|
| - Presentar la aplicación.
| - Explicar su funcionamiento.
| - Dirigir al explorador de cócteles.
|
|--------------------------------------------------------------------------
*/


import {

    Link

} from "react-router-dom";


import "../styles/home.css";





function Home() {



    return (



        <main className="home">





            <h1>

                🍹 Cocktail Explorer

            </h1>





            <p>

                Descubre cientos de cócteles,

                conoce sus ingredientes,

                preparación y guarda tus favoritos.

            </p>





            <div className="buttons">





                <Link

                    to="/cocktails"

                    className="btn-home"

                >

                    Explorar cócteles

                </Link>





                <Link

                    to="/favorites"

                    className="btn-home"

                >

                    Mis favoritos

                </Link>





            </div>





        </main>



    );


}



export default Home;