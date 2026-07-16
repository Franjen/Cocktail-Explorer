/*
|--------------------------------------------------------------------------
| Cocktail.ts
|--------------------------------------------------------------------------
|
| Interface que representa un cóctel obtenido desde
| la API pública TheCocktailDB.
|
| TypeScript utiliza esta interface para conocer
| la estructura exacta de cada objeto recibido.
|
|--------------------------------------------------------------------------
*/

export interface Cocktail {

    /* Identificador único */
    idDrink: string;

    /* Nombre del cóctel */
    strDrink: string;

    /* Imagen */
    strDrinkThumb: string;

    /* Categoría */
    strCategory: string;

    /* Tipo */
    strAlcoholic: string;

    /* Vaso recomendado */
    strGlass: string;

    /* Preparación */
    strInstructions: string;

    /*
    ------------------------------------------------------------------------
    Ingredientes

    La API puede devolver hasta 15 ingredientes.
    Todos son opcionales porque algunos cócteles
    utilizan menos ingredientes.
    ------------------------------------------------------------------------
    */

    strIngredient1?: string;
    strIngredient2?: string;
    strIngredient3?: string;
    strIngredient4?: string;
    strIngredient5?: string;
    strIngredient6?: string;
    strIngredient7?: string;
    strIngredient8?: string;
    strIngredient9?: string;
    strIngredient10?: string;
    strIngredient11?: string;
    strIngredient12?: string;
    strIngredient13?: string;
    strIngredient14?: string;
    strIngredient15?: string;

    /*
    ------------------------------------------------------------------------
    Cantidades de cada ingrediente.
    ------------------------------------------------------------------------
    */

    strMeasure1?: string;
    strMeasure2?: string;
    strMeasure3?: string;
    strMeasure4?: string;
    strMeasure5?: string;
    strMeasure6?: string;
    strMeasure7?: string;
    strMeasure8?: string;
    strMeasure9?: string;
    strMeasure10?: string;
    strMeasure11?: string;
    strMeasure12?: string;
    strMeasure13?: string;
    strMeasure14?: string;
    strMeasure15?: string;

}