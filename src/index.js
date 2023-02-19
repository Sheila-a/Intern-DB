import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import PaginatedItems from "./components/Pagination";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <PaginatedItems itemsPerPage={4} />,
//   document.getElementById("container")
// );
