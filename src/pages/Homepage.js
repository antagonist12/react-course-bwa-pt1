import React from "react";

import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Browseroom from "../parts/Homepage/Browseroom";
import Justarrived from "../parts/Homepage/Justarrived";
import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

export default function Homepage(props) {
  return (
    //   ini fragment ( di browser tidak akan menulis markup )
    <>
      <Header />
      <Hero />
      <Browseroom />
      <Justarrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
