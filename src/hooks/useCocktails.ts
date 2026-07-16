/*
|--------------------------------------------------------------------------
| useCocktails.ts
|--------------------------------------------------------------------------
|
| Hook personalizado encargado de administrar
| la información de los cócteles.
|
| Funciones:
|
| - Obtener cócteles desde la API.
| - Guardar resultados.
| - Controlar estado de carga.
| - Controlar errores.
| - Ejecutar búsquedas.
|
|--------------------------------------------------------------------------
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



/*
|--------------------------------------------------------------------------
| Hook useCocktails
|--------------------------------------------------------------------------
*/

export function useCocktails() {


    /*
    ----------------------------------------------------------------------
    Estado donde se almacenan los cócteles encontrados.
    ----------------------------------------------------------------------
    */

    const [
        cocktails,
        setCocktails
    ] = useState<Cocktail[]>([]);



    /*
    ----------------------------------------------------------------------
    Estado para controlar el indicador de carga.
    ----------------------------------------------------------------------
    */

    const [
        loading,
        setLoading
    ] = useState(false);



    /*
    ----------------------------------------------------------------------
    Estado para guardar mensajes de error.
    ----------------------------------------------------------------------
    */

    const [
        error,
        setError
    ] = useState("");




    /*
    ----------------------------------------------------------------------
    Función encargada de buscar cócteles.
    
    Recibe:
    - name: texto ingresado por el usuario.

    Realiza:
    - Consulta a la API.
    - Actualiza estados.
    ----------------------------------------------------------------------
    */


    async function search(
        name: string
    ) {


        /*
        Evita enviar búsquedas vacías.
        */

        if (!name.trim()) {

            setCocktails([]);

            return;

        }



        try {


            /*
            Activamos cargando.
            */

            setLoading(true);



            /*
            Limpiamos errores anteriores.
            */

            setError("");



            /*
            Solicitud a la API.
            */

            const data =
                await searchCocktails(name);



            /*
            Guardamos resultados.
            */

            setCocktails(data);



        } catch {


            /*
            En caso de error mostramos mensaje.
            */

            setError(
                "No fue posible cargar los cócteles."
            );


        } finally {


            /*
            Siempre apagamos el estado loading.
            */

            setLoading(false);


        }


    }





    /*
    ----------------------------------------------------------------------
    Carga inicial automática.

    Cuando el usuario entra por primera vez
    se muestran resultados utilizando la letra "a".
    ----------------------------------------------------------------------
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