/*
CocktailCard.tsx

Este componente representa una tarjeta
que muestra la información resumida
de un cóctel.

Recibe un objeto Cocktail mediante Props.
*/

import { Link } from "react-router-dom";
import type { Cocktail } from "../types/Cocktail";

interface Props {
    cocktail: Cocktail;
}

function CocktailCard({ cocktail }: Props) {

    return (

        <article className="cocktail-card">

            {/* Imagen del cóctel */}
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

                {/* Botón para abrir el detalle */}
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