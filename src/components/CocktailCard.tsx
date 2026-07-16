/*
|--------------------------------------------------------------------------
| CocktailCard.tsx
|--------------------------------------------------------------------------
|
| Este componente representa una tarjeta individual de un cóctel.
|
| Funciones:
| - Mostrar la imagen del cóctel.
| - Mostrar el nombre.
| - Mostrar la categoría.
| - Mostrar el tipo.
| - Agregar o quitar favoritos.
| - Ir a la página de detalles.
|
|--------------------------------------------------------------------------
*/

import { Link } from "react-router-dom";
import type { Cocktail } from "../types/Cocktail";

/* Hook para administrar favoritos */
import { useFavorites } from "../hooks/useFavorites";

/* -------------------------------------------------------------------------- */
/* Interface                                                                   */
/* -------------------------------------------------------------------------- */

interface Props {
    cocktail: Cocktail;
}

/* -------------------------------------------------------------------------- */
/* Componente                                                                  */
/* -------------------------------------------------------------------------- */

function CocktailCard({ cocktail }: Props) {

    /*
    Obtiene las funciones del Hook de favoritos.
    */
    const {
        toggleFavorite,
        isFavorite
    } = useFavorites();

    return (

        <article className="cocktail-card">

            {/* Imagen */}
            <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
            />

            <div className="card-content">

                {/* Nombre */}
                <h2>{cocktail.strDrink}</h2>

                {/* Categoría */}
                <p>
                    <strong>Categoría:</strong> {cocktail.strCategory}
                </p>

                {/* Tipo */}
                <p>
                    <strong>Tipo:</strong> {cocktail.strAlcoholic}
                </p>

                {/* Botón Favoritos */}
                <button
                    className="favorite-button"
                    onClick={() => toggleFavorite(cocktail.idDrink)}
                >
                    {
                        isFavorite(cocktail.idDrink)
                            ? "❤️ Quitar favorito"
                            : "🤍 Agregar favorito"
                    }
                </button>

                {/* Botón Detalles */}
                <Link
                    to={`/cocktails/${cocktail.idDrink}`}
                    className="btn-detail"
                >
                    Ver detalles
                </Link>

            </div>

        </article>

    );

}

export default CocktailCard;