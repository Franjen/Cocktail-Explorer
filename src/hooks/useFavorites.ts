/*
=========================================================
useFavorites.ts

Hook encargado de administrar
los cócteles favoritos utilizando
localStorage.

Además sincroniza automáticamente
todos los componentes de la aplicación.
=========================================================
*/

import { useEffect, useState } from "react";

export function useFavorites() {

    /*
    Estado con los IDs favoritos.
    */
    const [favorites, setFavorites] = useState<string[]>([]);

    /*
    Cargar favoritos al iniciar.
    */
    useEffect(() => {

        const saved = localStorage.getItem("favorites");

        if (saved) {

            setFavorites(JSON.parse(saved));

        }

        /*
        Escuchar cambios realizados
        desde otros componentes.
        */

        const updateFavorites = () => {

            const data = localStorage.getItem("favorites");

            if (data) {

                setFavorites(JSON.parse(data));

            } else {

                setFavorites([]);

            }

        };

        window.addEventListener("favoritesUpdated", updateFavorites);

        return () => {

            window.removeEventListener(
                "favoritesUpdated",
                updateFavorites
            );

        };

    }, []);

    /*
    Agregar o quitar favorito.
    */
    function toggleFavorite(id: string) {

        let updated: string[];

        if (favorites.includes(id)) {

            updated = favorites.filter(item => item !== id);

        } else {

            updated = [...favorites, id];

        }

        setFavorites(updated);

        localStorage.setItem(
            "favorites",
            JSON.stringify(updated)
        );

        /*
        Notificar al resto
        de componentes.
        */
        window.dispatchEvent(
            new Event("favoritesUpdated")
        );

    }

    /*
    Verificar si es favorito.
    */
    function isFavorite(id: string) {

        return favorites.includes(id);

    }

    return {

        favorites,

        toggleFavorite,

        isFavorite

    };

}