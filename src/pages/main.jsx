import React from "react";
import Head from "../layouts/head/Head";
import "../assets/styles/main.css";
import Body from "../components/Body";
import Pagination from "../components/Pagination.jsx";
import BasicModal from "../util/modal";
function Main() {
  return (
    <div>
      <Head />
      {/* <Pagination /> */}
      <Body />
      {/* <BasicModal /> */}
    </div>
  );
}

export default Main;
