/*
|--------------------------------------------------------------------------
| CocktailCard.tsx
|--------------------------------------------------------------------------
|
| Este componente representa una tarjeta individual de un cóctel.
|
| Funciones principales:
| - Mostrar la imagen del cóctel.
| - Mostrar el nombre.
| - Mostrar la categoría.
| - Mostrar el tipo (Alcohólico o No alcohólico).
| - Permitir agregar o quitar el cóctel de favoritos.
| - Permitir acceder a la página de detalles.
|
| Este componente recibe un objeto Cocktail mediante Props.
|
|--------------------------------------------------------------------------
*/

/* Importa el componente Link para navegar entre páginas */
import { Link } from "react-router-dom";

/* Importa el tipo Cocktail */
import type { Cocktail } from "../types/Cocktail";

/* Importa el Hook personalizado que administra los favoritos */
import { useFavorites } from "../hooks/useFavorites";

/* -------------------------------------------------------------------------- */
/*                              Interface de Props                            */
/* -------------------------------------------------------------------------- */

/*
Esta interfaz define los datos que recibirá
el componente desde el componente padre.
*/
interface Props {
    cocktail: Cocktail;
}

/* -------------------------------------------------------------------------- */
/*                         Componente CocktailCard                            */
/* -------------------------------------------------------------------------- */

function CocktailCard({ cocktail }: Props) {

    /*
    Se obtiene desde el Hook:

    toggleFavorite()
        Agrega o elimina un cóctel de favoritos.

    isFavorite()
        Verifica si un cóctel ya está guardado.
    */
    const {
        toggleFavorite,
        isFavorite
    } = useFavorites();

    /* ---------------------------------------------------------------------- */
    /*                              Renderizado                               */
    /* ---------------------------------------------------------------------- */

    return (

        <article className="cocktail-card">

            {/* -------------------------------------------------------------- */}
            {/* Imagen del cóctel                                              */}
            {/* -------------------------------------------------------------- */}

            <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
            />

            <div className="card-content">

                {/* ---------------------------------------------------------- */}
                {/* Nombre del cóctel                                          */}
                {/* ---------------------------------------------------------- */}

                <h2>{cocktail.strDrink}</h2>

                {/* ---------------------------------------------------------- */}
                {/* Categoría                                                  */}
                {/* ---------------------------------------------------------- */}

                <p>
                    <strong>Categoría:</strong>{" "}
                    {cocktail.strCategory}
                </p>

                {/* ---------------------------------------------------------- */}
                {/* Tipo                                                       */}
                {/* ---------------------------------------------------------- */}

                <p>
                    <strong>Tipo:</strong>{" "}
                    {cocktail.strAlcoholic}
                </p>

                {/* ---------------------------------------------------------- */}
                {/* Botón de Favoritos                                         */}
                {/* ---------------------------------------------------------- */}

                <button
                    className="favorite-button"

                    /*
                    Cuando el usuario hace clic:

                    - Si el cóctel ya está en favoritos,
                      se elimina.

                    - Si no existe,
                      se agrega.
                    */
                    onClick={() =>
                        toggleFavorite(cocktail.idDrink)
                    }
                >

                    {
                        /*
                        Si el cóctel está guardado,
                        se muestra el corazón rojo.

                        Caso contrario,
                        se muestra el corazón blanco.
                        */
                        isFavorite(cocktail.idDrink)
                            ? "❤️ Quitar favorito"
                            : "🤍 Agregar favorito"
                    }

                </button>

                {/* ---------------------------------------------------------- */}
                {/* Botón para abrir la página de detalles                     */}
                {/* ---------------------------------------------------------- */}

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

/* Exporta el componente */
export default CocktailCard;