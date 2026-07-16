/*
|--------------------------------------------------------------------------
| Favorites.tsx
|--------------------------------------------------------------------------
|
| Página donde aparecen los cócteles favoritos.
|
|--------------------------------------------------------------------------
*/


import {

    useEffect,

    useState

} from "react";


import CocktailCard from "../components/CocktailCard";


import type {

    Cocktail

} from "../types/Cocktail";


import {

    getCocktailById

} from "../services/cocktailApi";


import {

    useFavorites

} from "../hooks/useFavorites";







function Favorites() {





    const {

        favorites

    } = useFavorites();







    const [

        cocktails,

        setCocktails

    ] = useState<Cocktail[]>([]);








    useEffect(() => {





        async function loadFavorites() {



            const result: Cocktail[] = [];






            for (const id of favorites) {



                const cocktail =

                    await getCocktailById(id);





                if (cocktail)

                    result.push(cocktail);



            }






            setCocktails(result);



        }






        loadFavorites();





    }, [favorites]);








    return (




        <main>



            <h1>

                ❤️ Mis Favoritos

            </h1>





            {

                cocktails.length === 0

                    ?

                    <p>

                        No tienes favoritos todavía.

                    </p>


                    :



                    <section className="cocktails-grid">


                        {

                            cocktails.map(cocktail => (


                                <CocktailCard

                                    key={cocktail.idDrink}

                                    cocktail={cocktail}

                                />


                            ))

                        }


                    </section>



            }





        </main>



    );





}



export default Favorites;