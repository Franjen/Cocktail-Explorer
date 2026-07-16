/*
|--------------------------------------------------------------------------
| SearchBar.tsx
|--------------------------------------------------------------------------
|
| Barra de búsqueda de cócteles.
|
| Funciones:
|
| - Capturar texto escrito.
| - Esperar 500ms después de escribir.
| - Ejecutar búsqueda.
|
|--------------------------------------------------------------------------
*/


import {
    useEffect,
    useState
} from "react";


import "../styles/search.css";






interface Props {


    /*
    Función recibida desde la página
    Cocktails.tsx.
    */

    onSearch:

    (
        value: string
    ) => void;


}








function SearchBar({

    onSearch

}: Props) {



    const [

        value,

        setValue

    ] = useState("");






    /*
    ----------------------------------------------------------------------
    Debounce

    Evita realizar demasiadas peticiones
    mientras el usuario escribe.
    ----------------------------------------------------------------------
    */


    useEffect(() => {



        const timer = setTimeout(() => {



            onSearch(value);



        }, 500);





        return () => {


            clearTimeout(timer);


        };



    }, [

        value,

        onSearch

    ]);







    return (


        <div className="search-form">


            <input


                type="text"


                placeholder="Buscar cóctel..."


                value={value}



                onChange={

                    (event) =>

                        setValue(

                            event.target.value

                        )

                }


            />



        </div>


    );


}




export default SearchBar;