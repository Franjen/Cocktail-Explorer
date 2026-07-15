/*
Página principal de cócteles.

Aquí conectamos:

SearchBar
      ↓
useCocktails
      ↓
API
      ↓
CocktailCard
*/


import SearchBar from "../components/SearchBar";

import CocktailCard from "../components/CocktailCard";

import Loading from "../components/Loading";

import ErrorMessage from "../components/ErrorMessage";


import { useCocktails } from "../hooks/useCocktails";



import "../styles/cocktails.css";





function Cocktails() {



    /*
    Extraemos la información
    que entrega nuestro Hook.
    */

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




            <section className="cocktails-grid">


                {


                    Array.isArray(cocktails) && cocktails.map((cocktail) => (


                        <CocktailCard


                            key={
                                cocktail.idDrink
                            }


                            cocktail={
                                cocktail
                            }


                        />


                    ))


                }


            </section>



        </main>

    );

}



export default Cocktails;