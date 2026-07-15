/*
SearchBar

Componente reutilizable encargado
de capturar el texto que escribe
el usuario.

No realiza búsquedas directamente.

Solamente comunica el texto
a la página padre mediante Props.
*/


import { useState } from "react";



interface Props {


    /*
    Función que recibirá el texto
    escrito por el usuario.
    */

    onSearch: (value: string) => void;


}



function SearchBar({
    onSearch

}: Props) {



    /*
    Estado local del input.

    Guarda temporalmente lo que
    escribe el usuario.
    */

    const [value, setValue] =
        useState("");




    /*
    Controla el envío del formulario.
    */

    function handleSubmit(
        e: React.FormEvent
    ) {


        /*
        Evita que la página
        se recargue.
        */

        e.preventDefault();



        /*
        Enviamos el texto
        al componente padre.
        */

        onSearch(value);



    }



    return (

        <form onSubmit={handleSubmit}>


            <input

                type="text"

                placeholder="Buscar cóctel..."

                value={value}


                /*
                Cada vez que cambia el texto
                actualizamos el estado.
                */

                onChange={(e) =>
                    setValue(e.target.value)
                }


            />


            <button>

                Buscar

            </button>


        </form>

    );

}



export default SearchBar;