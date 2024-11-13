"use client";
import React, { useState } from "react";
import Slider from "./Slider";

const images = [
  "https://picsum.photos/id/10/1000/500",
  "https://picsum.photos/id/20/1000/500",
  "https://picsum.photos/id/30/1000/500",
  "https://picsum.photos/id/40/1000/500",
  "https://picsum.photos/id/50/1000/500",
  "https://picsum.photos/id/60/1000/500",
  "https://picsum.photos/id/70/1000/500",
];
const GallerySection = () => {
  return (
    <section className="bg-beige-normal py-20">
      <h1 className="text-[40px] font-montserrat font-bold text-center">Galeria de fotos</h1>
      <h2 className="text-center text-lg font-roboto mt-2 mb-10 px-4 tablet:mb-16">Capturando Momentos, Transfomando Vidas</h2>

      <Slider images={images} />

    </section>
  );
};

export default GallerySection;
