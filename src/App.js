import React from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SearchVendors from "./components/SearchVendors";
import DiscoverProjects from "./components/DiscoverProjects";
import SimpleProcess from "./components/SimpleProcess";
import AlliedServices from "./components/AlliedServices";
import ComakeJourney from "./components/ComakeJourney";
import Footer from "./components/Footer";

export default function app() {
  return (
    <div>
      <Navbar />
      <Banner />
      <SearchVendors />
      <DiscoverProjects />
      <SimpleProcess />
      <AlliedServices />
      <ComakeJourney />
      <Footer />
    </div>
  );
}
