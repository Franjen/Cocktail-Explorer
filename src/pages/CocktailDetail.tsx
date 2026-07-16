/*
CocktailDetail.tsx

Esta página muestra toda la información
de un cóctel seleccionado.
*/

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { Cocktail } from "../types/Cocktail";
import { getCocktailById } from "../services/cocktailApi";

import "../styles/detail.css";

function CocktailDetail() {

    /*
    useParams obtiene el parámetro :id
    definido en AppRouter.
    */
    const { id } = useParams();

    /*
    Estado donde guardaremos
    el cóctel obtenido.
    */
    const [cocktail, setCocktail] = useState<Cocktail | null>(null);

    /*
    Estado de carga.
    */
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadCocktail() {

            if (!id) return;

            const data = await getCocktailById(id);

            setCocktail(data);

            setLoading(false);

        }

        loadCocktail();

    }, [id]);

    if (loading) {
        return <h2>Cargando...</h2>;
    }

    if (!cocktail) {
        return <h2>No se encontró el cóctel.</h2>;
    }

    return (

        <main className="detail-container">

            <h1>{cocktail.strDrink}</h1>

            <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
            />

            <h3>Categoría</h3>

            <p>{cocktail.strCategory}</p>

            <h3>Tipo</h3>

            <p>{cocktail.strAlcoholic}</p>

            <h3>Vaso recomendado</h3>

            <p>{cocktail.strGlass}</p>

            <h3>Preparación</h3>

            <p>{cocktail.strInstructions}</p>

            <h3>Ingredientes</h3>

            <ul>

                {[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                    11, 12, 13, 14, 15
                ].map((i) => {

                    const ingredient =
                        cocktail[`strIngredient${i}` as keyof Cocktail];

                    const measure =
                        cocktail[`strMeasure${i}` as keyof Cocktail];

                    if (!ingredient) return null;

                    return (

                        <li key={i}>

                            {measure} {ingredient}

                        </li>

                    );

                })}

            </ul>

        </main>

    );

}

export default CocktailDetail;