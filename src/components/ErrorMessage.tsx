/*
Componente para mostrar errores.

Recibe un mensaje mediante Props.
*/


interface Props {


    /*
    Texto del error.
    */
    message: string;


}



/*
Recibimos la Prop message.
*/

function ErrorMessage({
    message
}: Props) {


    return (

        <div>

            <h2>
                ⚠️ {message}
            </h2>


        </div>

    );


}


export default ErrorMessage;