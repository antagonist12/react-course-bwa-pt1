import React from "react";

import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
import Productdetails from "../parts/Details/Productdetails";
import Suggestions from "../parts/Details/Suggestions";

import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

export default function Details(props) {
  return (
    //   ini fragment ( di browser tidak akan menulis markup )
    <>
      <Header theme="black" position="inline" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      <Productdetails />
      <Suggestions />

      <Sitemap />
      <Footer />
    </>
  );
}
