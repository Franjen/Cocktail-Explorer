/*
|--------------------------------------------------------------------------
| About.tsx
|--------------------------------------------------------------------------
|
| Página informativa del proyecto.
|
| Explica:
|
| - Qué es Cocktail Explorer.
| - Tecnologías utilizadas.
| - Fuente de información.
|
|--------------------------------------------------------------------------
*/


import "../styles/about.css";





function About() {



    return (



        <main className="about">





            <h1>

                🍹 Acerca de Cocktail Explorer

            </h1>







            <p>

                Cocktail Explorer es una aplicación web

                desarrollada con React y TypeScript

                que permite consultar información

                sobre diferentes cócteles.

            </p>








            <p>

                La aplicación utiliza la API pública

                TheCocktailDB para obtener datos como:

                ingredientes, preparación, categoría

                e imágenes.

            </p>








            <h2>

                Tecnologías utilizadas

            </h2>





            <ul>


                <li>

                    React

                </li>



                <li>

                    TypeScript

                </li>



                <li>

                    React Router

                </li>



                <li>

                    Axios

                </li>



                <li>

                    TheCocktailDB API

                </li>



            </ul>






        </main>



    );


}




export default About;