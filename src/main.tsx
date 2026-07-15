/*
main.tsx es el punto de entrada de la aplicación.

Aquí React monta toda la aplicación
dentro del elemento "root".
*/

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// Estilos globales
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(

  // StrictMode ayuda a detectar errores durante el desarrollo
  <React.StrictMode>

    <App />

  </React.StrictMode>

);