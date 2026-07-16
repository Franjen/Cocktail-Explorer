/*
|--------------------------------------------------------------------------
| useFavorites.ts
|--------------------------------------------------------------------------
|
| Hook personalizado para administrar favoritos.
|
| Funciones:
|
| - Guardar favoritos en localStorage.
| - Recuperar favoritos al iniciar.
| - Agregar favoritos.
| - Eliminar favoritos.
| - Sincronizar componentes.
|
|--------------------------------------------------------------------------
*/


import {
    useEffect,
    useState
} from "react";




/*
|--------------------------------------------------------------------------
| Nombre utilizado en localStorage.
|--------------------------------------------------------------------------
*/

const STORAGE_KEY = "favorites";





export function useFavorites() {


    /*
    ----------------------------------------------------------------------
    Estado donde se guardan los IDs favoritos.
    ----------------------------------------------------------------------
    */

    const [
        favorites,
        setFavorites
    ] = useState<string[]>([]);





    /*
    ----------------------------------------------------------------------
    Cargar favoritos al iniciar la aplicación.
    ----------------------------------------------------------------------
    */

    useEffect(() => {


        const saved =
            localStorage.getItem(STORAGE_KEY);



        if (saved) {


            setFavorites(
                JSON.parse(saved)
            );


        }




        /*
        Escuchar cambios realizados
        desde otros componentes.
        */

        function updateFavorites() {


            const data =
                localStorage.getItem(STORAGE_KEY);



            setFavorites(

                data
                    ? JSON.parse(data)
                    : []

            );


        }



        window.addEventListener(

            "favoritesUpdated",

            updateFavorites

        );




        return () => {


            window.removeEventListener(

                "favoritesUpdated",

                updateFavorites

            );


        };


    }, []);







    /*
    ----------------------------------------------------------------------
    Agregar o eliminar favorito.
    
    Recibe:
    - id del cóctel.
    ----------------------------------------------------------------------
    */


    function toggleFavorite(
        id: string
    ) {



        const updated = favorites.includes(id)


            ? favorites.filter(

                item => item !== id

            )


            : [

                ...favorites,

                id

            ];





        /*
        Actualizamos estado.
        */

        setFavorites(updated);




        /*
        Guardamos en navegador.
        */

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(updated)

        );




        /*
        Avisamos a otros componentes.
        */

        window.dispatchEvent(

            new Event(

                "favoritesUpdated"

            )

        );


    }






    /*
    ----------------------------------------------------------------------
    Verificar si un cóctel está marcado.
    ----------------------------------------------------------------------
    */


    function isFavorite(
        id: string
    ) {


        return favorites.includes(id);


    }







    return {


        favorites,

        toggleFavorite,

        isFavorite


    };


}