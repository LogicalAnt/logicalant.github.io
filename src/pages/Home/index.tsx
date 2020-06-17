import React from "react";
import { Navbar } from "../../components/Navbar";
import { Particle } from "../../components/Particle";
import { HomeContent } from "./content";

export const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContent />
      <Particle />
    </>
  );
};
