import React from "react";
import { Header } from "./";

const Layout = ({ Children }) => {
  return (
    <>
      <Header />
      {Children}
    </>
  );
};

export default Layout;
