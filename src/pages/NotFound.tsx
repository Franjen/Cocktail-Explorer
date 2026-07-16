/*
|--------------------------------------------------------------------------
| NotFound.tsx
|--------------------------------------------------------------------------
|
| Página mostrada cuando el usuario
| accede a una ruta inexistente.
|
|--------------------------------------------------------------------------
*/


import {

    Link

} from "react-router-dom";



function NotFound() {



    return (



        <main>




            <h1>

                ❌ Error 404

            </h1>





            <p>

                La página que buscas

                no existe.

            </p>







            <Link to="/">

                Volver al inicio

            </Link>





        </main>



    );


}





export default NotFound;