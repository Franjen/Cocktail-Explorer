/*
|--------------------------------------------------------------------------
| Cocktails.tsx
|--------------------------------------------------------------------------
|
| Página principal donde se muestran los cócteles.
|
| Flujo de funcionamiento:
|
| SearchBar
|      ↓
| useCocktails
|      ↓
| API TheCocktailDB
|      ↓
| CocktailCard
|
|--------------------------------------------------------------------------
*/

import SearchBar from "../components/SearchBar";
import CocktailCard from "../components/CocktailCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

import { useCocktails } from "../hooks/useCocktails";

import "../styles/cocktails.css";

/* -------------------------------------------------------------------------- */
/*                           Componente Principal                             */
/* -------------------------------------------------------------------------- */

function Cocktails() {

    /*
    Información obtenida desde el Hook personalizado.
    */
    const {

        cocktails,
        loading,
        error,
        search

    } = useCocktails();

    return (

        <main>

            {/* -------------------------------------------------------------- */}
            {/* Título de la página                                            */}
            {/* -------------------------------------------------------------- */}

            <h1>
                🍹 Explorar Cócteles
            </h1>

            {/* -------------------------------------------------------------- */}
            {/* Barra de búsqueda                                              */}
            {/* -------------------------------------------------------------- */}

            <SearchBar
                onSearch={search}
            />

            {/* -------------------------------------------------------------- */}
            {/* Indicador de carga                                             */}
            {/* -------------------------------------------------------------- */}

            {
                loading &&
                <Loading />
            }

            {/* -------------------------------------------------------------- */}
            {/* Mensaje de "no se encontraron resultados"                      */}
            {/* -------------------------------------------------------------- */}
            {!loading &&

                cocktails.length === 0 &&

                (

                    <p>

                        No se encontraron cócteles.

                    </p>

                )

            }

            {/* -------------------------------------------------------------- */}
            {/* Mensaje de error                                               */}
            {/* -------------------------------------------------------------- */}

            {
                error &&
                <ErrorMessage
                    message={error}
                />
            }

            {/* -------------------------------------------------------------- */}
            {/* Cantidad de resultados encontrados                             */}
            {/* -------------------------------------------------------------- */}

            {
                !loading &&
                !error &&
                Array.isArray(cocktails) &&
                (
                    <p className="results-count">

                        Se encontraron

                        <strong>
                            {" "}
                            {cocktails.length}
                            {" "}
                        </strong>

                        cócteles.

                    </p>
                )
            }

            {/* -------------------------------------------------------------- */}
            {/* Lista de cócteles                                              */}
            {/* -------------------------------------------------------------- */}

            <section className="cocktails-grid">

                {
                    Array.isArray(cocktails) &&
                    cocktails.map((cocktail) => (

                        <CocktailCard
                            key={cocktail.idDrink}
                            cocktail={cocktail}
                        />

                    ))
                }

            </section>

        </main>

    );

}

export default Cocktails;