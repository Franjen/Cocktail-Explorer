/*
|--------------------------------------------------------------------------
| ErrorMessage.tsx
|--------------------------------------------------------------------------
|
| Componente reutilizable para mostrar
| mensajes de error al usuario.
|
|--------------------------------------------------------------------------
*/


import "../styles/error.css";





interface Props {


    /*
    Mensaje que será mostrado.
    */

    message: string;


}






function ErrorMessage({

    message

}: Props) {



    return (


        <div className="error">


            <h2>

                ⚠️

            </h2>



            <p>

                {message}

            </p>



        </div>


    );


}



export default ErrorMessage;