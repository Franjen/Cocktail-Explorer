/*
|--------------------------------------------------------------------------
| Cocktails.tsx
|--------------------------------------------------------------------------
|
| Página principal del explorador.
|
| Flujo:
|
| Usuario escribe búsqueda
|          ↓
| SearchBar
|          ↓
| useCocktails
|          ↓
| API TheCocktailDB
|          ↓
| CocktailCard
|
|--------------------------------------------------------------------------
*/


import SearchBar from "../components/SearchBar";
import CocktailCard from "../components/CocktailCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";


import {

    useCocktails

} from "../hooks/useCocktails";


import "../styles/cocktails.css";







function Cocktails() {





    const {

        cocktails,

        loading,

        error,

        search


    } = useCocktails();







    return (



        <main>





            <h1>

                🍹 Explorar Cócteles

            </h1>







            <SearchBar

                onSearch={search}

            />







            {

                loading &&

                <Loading />

            }








            {

                error &&

                <ErrorMessage

                    message={error}

                />

            }








            {

                !loading &&

                !error &&

                <p className="results-count">


                    Se encontraron


                    {" "}

                    <strong>

                        {cocktails.length}

                    </strong>


                    {" "}

                    cócteles.


                </p>


            }







            <section className="cocktails-grid">



                {


                    cocktails.map(

                        cocktail => (



                            <CocktailCard


                                key={cocktail.idDrink}


                                cocktail={cocktail}


                            />



                        )

                    )


                }



            </section>






        </main>



    );


}



export default Cocktails;