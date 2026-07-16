/*
|--------------------------------------------------------------------------
| CocktailCard.tsx
|--------------------------------------------------------------------------
|
| Tarjeta individual de un cóctel.
|
| Funciones:
|
| - Mostrar imagen.
| - Mostrar información básica.
| - Agregar favoritos.
| - Acceder al detalle.
|
|--------------------------------------------------------------------------
*/


import {

    Link

} from "react-router-dom";


import type {

    Cocktail

} from "../types/Cocktail";



import {

    useFavorites

} from "../hooks/useFavorites";







interface Props {


    cocktail: Cocktail;


}








function CocktailCard({

    cocktail

}: Props) {





    const {

        toggleFavorite,

        isFavorite

    } = useFavorites();







    return (


        <article className="cocktail-card">



            <img

                src={cocktail.strDrinkThumb}

                alt={cocktail.strDrink}

            />





            <div className="card-content">



                <h2>

                    {cocktail.strDrink}

                </h2>





                <p>

                    <strong>

                        Categoría:

                    </strong>

                    {" "}

                    {cocktail.strCategory}

                </p>





                <p>

                    <strong>

                        Tipo:

                    </strong>

                    {" "}

                    {cocktail.strAlcoholic}

                </p>





                <button


                    type="button"


                    className="favorite-button"



                    onClick={() =>

                        toggleFavorite(

                            cocktail.idDrink

                        )

                    }


                >


                    {

                        isFavorite(

                            cocktail.idDrink

                        )


                            ? "❤️ Quitar favorito"

                            : "🤍 Agregar favorito"


                    }


                </button>





                <Link


                    to={

                        `/cocktails/${cocktail.idDrink}`

                    }



                    className="btn-detail"


                >

                    Ver detalles


                </Link>





            </div>


        </article>


    );


}




export default CocktailCard;