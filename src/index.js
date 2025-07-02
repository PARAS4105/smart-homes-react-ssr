// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";



const data = window.__INITIAL_DATA__ || {};
// console.log("📦 Hydration received data:", data); // You should see real data here

hydrateRoot(
  document.getElementById("root"),
  <HelmetProvider>
    <BrowserRouter>
      <App data={data} />
    </BrowserRouter>
  </HelmetProvider>
);

if (typeof window !== "undefined") {
  delete window.__INITIAL_DATA__;
}