/*
|--------------------------------------------------------------------------
| main.tsx
|--------------------------------------------------------------------------
|
| Punto de entrada principal de la aplicación.
|
| Funciones:
| - Importar React.
| - Importar ReactDOM.
| - Importar los estilos globales.
| - Renderizar el componente App.
|
|--------------------------------------------------------------------------
*/

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

/* Estilos globales */
import "./styles/global.css";

/*
|--------------------------------------------------------------------------
| Renderizado principal
|--------------------------------------------------------------------------
|
| React monta toda la aplicación dentro del elemento
| HTML con id="root".
|
| StrictMode ayuda a detectar posibles problemas
| durante el desarrollo.
|
|--------------------------------------------------------------------------
*/

ReactDOM.createRoot(
  document.getElementById("root")!
).render(

  <React.StrictMode>

    <App />

  </React.StrictMode>

);