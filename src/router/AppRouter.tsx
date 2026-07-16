/*
|--------------------------------------------------------------------------
| AppRouter.tsx
|--------------------------------------------------------------------------
|
| Controla toda la navegación de la aplicación.
|
|--------------------------------------------------------------------------
*/

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// Componentes globales
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Páginas
import Home from "../pages/Home";
import Cocktails from "../pages/Cocktails";
import CocktailDetail from "../pages/CocktailDetail";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

function AppRouter() {

    return (

        <BrowserRouter>

            {/* Barra de navegación */}
            <Navbar />

            {/* Rutas */}
            <Routes>

                {/* Página principal */}
                <Route
                    path="/"
                    element={<Home />}
                />

                {/* Lista de cócteles */}
                <Route
                    path="/cocktails"
                    element={<Cocktails />}
                />

                {/* Favoritos */}
                <Route
                    path="/favorites"
                    element={<Favorites />}
                />

                {/* Detalle del cóctel */}
                <Route
                    path="/cocktails/:id"
                    element={<CocktailDetail />}
                />

                {/* Acerca de */}
                <Route
                    path="/about"
                    element={<About />}
                />

                {/* Página 404 */}
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