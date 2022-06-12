import React from "react";

import Header from "../parts/Header";
import Hero from "../parts/Homepage/Hero";
import Browseroom from "../parts/Homepage/Browseroom";
import Justarrived from "../parts/Homepage/Justarrived";
import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

// import untuk custom hooks
import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useModalDOM from "../helpers/hooks/useModalDOM";

export default function Homepage(props) {
  // custom hooks
  useScrollAnchor();
  useModalDOM();

  return (
    //   ini fragment ( di browser tidak akan menulis markup )
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <Browseroom />
      <Justarrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
