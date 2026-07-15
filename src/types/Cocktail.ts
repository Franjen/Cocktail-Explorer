/*
Interface Cocktail

Esta interface representa la información
que recibiremos desde la API TheCocktailDB.

TypeScript utiliza las interfaces para saber
qué datos existen dentro de un objeto.
*/


export interface Cocktail {


    /*
    Identificador único del cóctel.

    Lo utilizaremos para abrir
    la página de detalles.
    */
    idDrink: string;



    /*
    Nombre del cóctel.
    Ejemplo:
    "Margarita"
    */
    strDrink: string;



    /*
    Imagen principal del cóctel.
    */
    strDrinkThumb: string;



    /*
    Categoría del cóctel.

    Ejemplo:
    Cocktail
    Ordinary Drink
    */
    strCategory: string;



    /*
    Indica si contiene alcohol.

    Ejemplo:
    Alcoholic
    Non alcoholic
    */
    strAlcoholic: string;



    /*
    Tipo de vaso utilizado.
    */
    strGlass: string;



    /*
    Preparación del cóctel.
    */
    strInstructions: string;



    /*
    Ingredientes.

    La API separa los ingredientes
    en varios campos:

    strIngredient1
    strIngredient2
    etc.

    Por eso usamos propiedades opcionales.
    */


    strIngredient1?: string;
    strIngredient2?: string;
    strIngredient3?: string;
    strIngredient4?: string;
    strIngredient5?: string;


    /*
    Cantidades de cada ingrediente.
    */


    strMeasure1?: string;
    strMeasure2?: string;
    strMeasure3?: string;
    strMeasure4?: string;
    strMeasure5?: string;

}