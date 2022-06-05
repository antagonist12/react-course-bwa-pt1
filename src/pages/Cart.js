import React from "react";

import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";

import Shoppingcart from "../parts/Cart/Shoppingcart";
import Shippingdetails from "../parts/Cart/Shippingdetails";

import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

export default function Cart(props) {
  return (
    //   ini fragment ( di browser tidak akan menulis markup )
    <>
      <Header theme="black" position="inline" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping cart" },
        ]}
      />

      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <Shoppingcart />
            <Shippingdetails />
          </div>
        </div>
      </section>

      <Sitemap />
      <Footer />
    </>
  );
}
