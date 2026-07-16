/*
|--------------------------------------------------------------------------
| CocktailDetail.tsx
|--------------------------------------------------------------------------
|
| Página que muestra toda la información
| de un cóctel seleccionado.
|
| Funciones:
|
| - Obtener ID desde la URL.
| - Consultar información completa.
| - Mostrar ingredientes.
| - Mostrar preparación.
|
|--------------------------------------------------------------------------
*/


import {
    useEffect,
    useState
} from "react";


import {
    useParams
} from "react-router-dom";


import type {
    Cocktail
} from "../types/Cocktail";


import {
    getCocktailById
} from "../services/cocktailApi";


import "../styles/detail.css";





function CocktailDetail() {


    const {
        id
    } = useParams();



    const [
        cocktail,
        setCocktail
    ] = useState<Cocktail | null>(null);



    const [
        loading,
        setLoading
    ] = useState(true);





    useEffect(() => {


        async function loadCocktail() {


            if (!id) {
                return;
            }


            try {


                const data = await getCocktailById(id);


                setCocktail(data);


            } catch (error) {


                console.error(
                    "Error cargando cóctel:",
                    error
                );


            } finally {


                setLoading(false);


            }


        }



        loadCocktail();



    }, [id]);






    if (loading) {


        return (

            <h2>
                Cargando...
            </h2>

        );


    }







    if (!cocktail) {


        return (

            <h2>
                No existe el cóctel.
            </h2>

        );


    }







    return (


        <main className="detail-container">



            <h1>

                {cocktail.strDrink}

            </h1>





            <img

                src={cocktail.strDrinkThumb}

                alt={cocktail.strDrink}

            />







            <h3>

                Categoría

            </h3>


            <p>

                {cocktail.strCategory}

            </p>







            <h3>

                Tipo

            </h3>


            <p>

                {cocktail.strAlcoholic}

            </p>








            <h3>

                Preparación

            </h3>


            <p>

                {cocktail.strInstructions}

            </p>








            <h3>

                Ingredientes

            </h3>






            <ul>


                {

                    Array.from(
                        { length: 15 },
                        (_, index) => index + 1

                    ).map(i => {



                        const ingredient =

                            cocktail[
                            `strIngredient${i}` as keyof Cocktail
                            ];




                        const measure =

                            cocktail[
                            `strMeasure${i}` as keyof Cocktail
                            ];






                        if (!ingredient) {


                            return null;


                        }






                        return (



                            <li key={i}>


                                {measure ?? ""}


                                {" "}


                                {ingredient}



                            </li>



                        );




                    })


                }


            </ul>





        </main>



    );


}




export default CocktailDetail;