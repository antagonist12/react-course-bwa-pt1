import React from "react";

import Header from "../parts/Header";

import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";
import PageErrorMessage from "../parts/PageErrorMessage";

export default function Notfound() {
  return (
    <>
      <Header theme="black" position="inline" />

      <PageErrorMessage />

      <Sitemap />
      <Footer />
    </>
  );
}
