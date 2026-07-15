/*
AppRouter.tsx

Este archivo controla toda la navegación
de nuestra aplicación.

Aquí definimos:
- Las rutas disponibles.
- Qué página se muestra en cada ruta.
- Componentes globales como Navbar y Footer.
*/


import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


// Componentes que aparecen en todas las páginas
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


// Páginas
import Home from "../pages/Home";
import Cocktails from "../pages/Cocktails";
import CocktailDetail from "../pages/CocktailDetail";
import About from "../pages/About";
import NotFound from "../pages/NotFound";



function AppRouter() {


    return (

        <BrowserRouter>


            {/* Barra superior de navegación */}
            <Navbar />



            {/* Aquí React mostrará la página correspondiente */}
            <Routes>


                {/* Página de inicio */}
                <Route

                    path="/"

                    element={<Home />}

                />



                {/* Página donde aparecen los cócteles */}
                <Route

                    path="/cocktails"

                    element={<Cocktails />}

                />



                {/* 
        Ruta dinámica

        Ejemplo:

        /cocktails/11007

        El número corresponde
        al ID del cóctel.
        */}

                <Route

                    path="/cocktails/:id"

                    element={<CocktailDetail />}

                />



                {/* Información del proyecto */}
                <Route

                    path="/about"

                    element={<About />}

                />



                {/* 
        Cualquier ruta que no exista
        mostrará la página 404
        */}

                <Route

                    path="*"

                    element={<NotFound />}

                />


            </Routes>



            {/* Pie de página */}
            <Footer />


        </BrowserRouter>

    );

}



export default AppRouter;