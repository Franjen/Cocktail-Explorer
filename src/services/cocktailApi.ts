/*
cocktailApi.ts

Este archivo contiene las funciones
que se comunican con TheCocktailDB.

Aquí hacemos las peticiones HTTP
usando Axios.
*/


import axios from "axios";

import type { Cocktail } from "../types/Cocktail";



/*
URL principal de la API
*/

const API_URL =
    "https://www.thecocktaildb.com/api/json/v1/1";



/*
Buscar cócteles por nombre.

Ejemplo:

margarita

La API responde:

{
 drinks:[]
}

Nosotros solamente devolvemos
el arreglo drinks.
*/


export async function searchCocktails(

    name: string

): Promise<Cocktail[]> {


    const response = await axios.get(

        `${API_URL}/search.php?s=${name}`

    );



    /*
    Verificamos si la API encontró datos.

    Si existe drinks:
        devolvemos el arreglo.

    Si no existe:
        devolvemos un arreglo vacío.
    */


    return response.data.drinks || [];

}




/*
Obtener un cóctel específico
por su identificador.
*/


export async function getCocktailById(

    id: string

): Promise<Cocktail | null> {



    const response = await axios.get(

        `${API_URL}/lookup.php?i=${id}`

    );



    return response.data.drinks

        ? response.data.drinks[0]

        : null;


}