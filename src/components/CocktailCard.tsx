/*
CocktailCard

Componente encargado de mostrar
un solo cóctel.

Recibe la información mediante Props.
*/


/*
CocktailCard

Componente encargado de mostrar
un solo cóctel.

Recibe la información mediante Props.
*/
import type { Cocktail } from "../types/Cocktail";



interface Props {


    cocktail: Cocktail;


}



function CocktailCard({
    cocktail
}: Props) {



    return (

        <article className="cocktail-card">


            <img

                src={cocktail.strDrinkThumb}

                alt={cocktail.strDrink}

            />


            <h2>

                {cocktail.strDrink}

            </h2>



            <p>

                {cocktail.strCategory}

            </p>



            <p>

                {cocktail.strAlcoholic}

            </p>



        </article>

    );

}



export default CocktailCard;