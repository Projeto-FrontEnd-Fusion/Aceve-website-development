"use client";

import { GlobalButton } from "@/components/GlobalButton/GlobalButton";
import { SingleCard } from "./SingleCard";
import { ModalBase } from "@/components/ModalBase/ModalBase";
import { useState } from "react";

interface SingleEventProps {
  title: string;
}

export function SingleEvent({ title }: SingleEventProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  function handleOpenModal(src: string, alt: string) {
    setSelectedImage({ src, alt });
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedImage(null);
  }

  return (
    <>
      <article>
        <h2 className="text-md font-semibold">{title}</h2>

        <div
          className="mt-4 grid gap-4 grid-cols-5"
          aria-label={`Fotos do evento ${title}`}
        >
          <SingleCard
            imageSrc="/"
            imageAlt="Foto do evento"
            description="Descrição da foto."
            onImageClick={handleOpenModal}
          />
          <SingleCard
            imageSrc="/"
            imageAlt="Foto do evento"
            description="Descrição da foto."
            onImageClick={handleOpenModal}
          />
          <SingleCard
            imageSrc="/"
            imageAlt="Foto do evento"
            description="Descrição da foto."
            onImageClick={handleOpenModal}
          />
          <SingleCard
            imageSrc="/"
            imageAlt="Foto do evento"
            description="Descrição da foto."
            onImageClick={handleOpenModal}
          />
          <SingleCard
            imageSrc="/"
            imageAlt="Foto do evento"
            description="Descrição da foto."
            onImageClick={handleOpenModal}
          />
        </div>

        <div className="mt-6 flex justify-center">
          <GlobalButton
            variant={"text"}
            className="items-center justify-center rounded-md bg-violet-600 px-4 py-2 font-semibold text-white"
          >
            Painel da Transparência
          </GlobalButton>
        </div>
      </article>
      <ModalBase isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedImage && (
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="w-full h-auto rounded-md"
          />
        )}
      </ModalBase>
    </>
  );
}
