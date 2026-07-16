import { useEffect, useState } from "react";

import "../styles/search.css";

interface Props {

    onSearch: (value: string) => void;

}

function SearchBar({

    onSearch

}: Props) {

    const [value, setValue] = useState("");

    /*
    Cada vez que cambia el texto
    esperamos 500 ms antes
    de realizar la búsqueda.
    */

    useEffect(() => {

        const timer = setTimeout(() => {

            onSearch(value);

        }, 500);

        return () => clearTimeout(timer);

    }, [value]);

    return (

        <div className="search-form">

            <input

                type="text"

                placeholder="Buscar cóctel..."

                value={value}

                onChange={(e) =>

                    setValue(e.target.value)

                }

            />

        </div>

    );

}

export default SearchBar;