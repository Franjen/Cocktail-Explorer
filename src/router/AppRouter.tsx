/*
|--------------------------------------------------------------------------
| AppRouter.tsx
|--------------------------------------------------------------------------
|
| Archivo encargado de controlar
| toda la navegación de la aplicación.
|
| Aquí se definen todas las rutas.
|
|--------------------------------------------------------------------------
*/


import {

    BrowserRouter,

    Routes,

    Route

} from "react-router-dom";





/*
Componentes globales
*/

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";







/*
Páginas
*/

import Home from "../pages/Home";

import Cocktails from "../pages/Cocktails";

import CocktailDetail from "../pages/CocktailDetail";

import Favorites from "../pages/Favorites";

import About from "../pages/About";

import NotFound from "../pages/NotFound";








function AppRouter() {



    return (




        <BrowserRouter>





            {/* Barra superior */}

            <Navbar />







            <Routes>





                {/* Página principal */}

                <Route

                    path="/"

                    element={<Home />}

                />








                {/* Explorador */}

                <Route

                    path="/cocktails"

                    element={<Cocktails />}

                />








                {/* Detalle */}

                <Route

                    path="/cocktails/:id"

                    element={<CocktailDetail />}

                />








                {/* Favoritos */}

                <Route

                    path="/favorites"

                    element={<Favorites />}

                />








                {/* Información */}

                <Route

                    path="/about"

                    element={<About />}

                />








                {/* Ruta inexistente */}

                <Route

                    path="*"

                    element={<NotFound />}

                />





            </Routes>








            {/* Pie de página */}

            <Footer>

            </Footer>







        </BrowserRouter>




    );



}





export default AppRouter;