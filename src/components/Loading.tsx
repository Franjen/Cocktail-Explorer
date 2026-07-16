/*
|--------------------------------------------------------------------------
| Loading.tsx
|--------------------------------------------------------------------------
|
| Componente encargado de mostrar
| un indicador mientras se cargan datos.
|
|--------------------------------------------------------------------------
*/


import "../styles/loading.css";




function Loading() {


    return (


        <div className="loading">


            <div className="spinner"></div>



            <p>

                Cargando cócteles...

            </p>



        </div>


    );


}



export default Loading;