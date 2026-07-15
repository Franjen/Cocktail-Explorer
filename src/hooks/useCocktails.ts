/*
useCocktails.ts

Hook personalizado encargado de:

- Obtener cócteles.
- Guardar información.
- Controlar carga.
- Controlar errores.
*/


import {
    useEffect,
    useState
} from "react";


import type {
    Cocktail
} from "../types/Cocktail";


import {
    searchCocktails
} from "../services/cocktailApi";





export function useCocktails() {



    /*
    Lista de cócteles
    */

    const [cocktails, setCocktails] =
        useState<Cocktail[]>([]);




    /*
    Estado de carga
    */

    const [loading, setLoading] =
        useState(false);




    /*
    Mensaje de error
    */

    const [error, setError] =
        useState("");





    /*
    Función para buscar cócteles
    */

    async function search(
        name: string
    ) {


        try {


            setLoading(true);


            setError("");



            const data =
                await searchCocktails(name);



            setCocktails(data);



        } catch (error) {


            setError(
                "Error al cargar cócteles"
            );


        } finally {


            setLoading(false);


        }


    }





    /*
    Carga inicial automática

    Cuando la página abre,
    buscamos cócteles con la letra a.
    */


    useEffect(() => {


        search("a");


    }, []);





    return {


        cocktails,

        loading,

        error,

        search


    };


}