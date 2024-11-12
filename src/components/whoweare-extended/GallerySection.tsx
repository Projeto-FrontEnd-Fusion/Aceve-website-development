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
    <section >
      <h1 className="text-[40px] font-montserrat font-bold text-center">Galeria de fotos</h1>
      <h2 className="text-center text-lg font-roboto">Capturando Momentos, Transfomando Vidas</h2>

      <Slider images={images} />

    </section>
  );
};

/* const GallerySection = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array de 10 elementos
  const [startIndex, setStartIndex] = useState(0); // Índice inicial da janela de exibição
  const [clickCount, setClickCount] = useState(0); // Contador de cliques

  // Lógica para exibir 4 elementos com base no índice inicial
  const visibleItems = images.slice(startIndex, startIndex + 4);

  const handleNext = () => {
    setClickCount((prevCount) => prevCount + 1);

    // Somente quando `clickCount` for 3 (ou seja, após o quarto clique),
    // tentamos avançar a "janela" para os próximos 4 elementos
    if (clickCount === 3) {
      // Verifica se ainda há 4 elementos para exibir antes de avançar
      if (startIndex + 4 < images.length) {
        setStartIndex((prevIndex) => prevIndex + 4);
      }
      setClickCount(0); // Reinicia o contador de cliques
    }
  };

  return (
    <div>
      <h2>Elementos Visíveis:</h2>
      <ul className="flex gap-4">
        {visibleItems.map((item, index) => (
          <li key={index}>
            <img src={item} alt="" />
          </li>
        ))}
      </ul>
      <img src={images[startIndex + clickCount]} alt="" />
      <p>Número atual: {startIndex + clickCount}</p> 
      <button onClick={handleNext}>Próximo</button>
    </div>
  );
};
*/
export default GallerySection;
