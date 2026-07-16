/*
|--------------------------------------------------------------------------
| cocktailApi.ts
|--------------------------------------------------------------------------
|
| Servicio encargado de comunicarse con la API
| pública TheCocktailDB.
|
| Todas las peticiones HTTP se realizan mediante Axios.
|
|--------------------------------------------------------------------------
*/

import axios from "axios";
import type { Cocktail } from "../types/Cocktail";

/*
|--------------------------------------------------------------------------
| URL base de la API
|--------------------------------------------------------------------------
*/

const API_URL =
    "https://www.thecocktaildb.com/api/json/v1/1";

/*
|--------------------------------------------------------------------------
| Buscar cócteles por nombre
|--------------------------------------------------------------------------
|
| Recibe:
| - name: nombre del cóctel.
|
| Devuelve:
| - Un arreglo de cócteles.
|
|--------------------------------------------------------------------------
*/

export async function searchCocktails(
    name: string
): Promise<Cocktail[]> {

    const response = await axios.get(

        `${API_URL}/search.php`,

        {
            params: {
                s: name
            }
        }

    );

    return response.data.drinks ?? [];

}

/*
|--------------------------------------------------------------------------
| Obtener un cóctel mediante su ID
|--------------------------------------------------------------------------
|
| Recibe:
| - id del cóctel.
|
| Devuelve:
| - El cóctel encontrado.
| - null si no existe.
|
|--------------------------------------------------------------------------
*/

export async function getCocktailById(
    id: string
): Promise<Cocktail | null> {

    const response = await axios.get(

        `${API_URL}/lookup.php`,

        {
            params: {
                i: id
            }
        }

    );

    return response.data.drinks
        ? response.data.drinks[0]
        : null;

}