"use client";
import { GlobalButton } from "@/components/GlobalButton/GlobalButton";
import { SingleCard } from "./SingleCard";
import { ModalBase } from "@/components/ModalBase/ModalBase";
import { useEffect, useState } from "react";
import { PanelModal } from "./PanelModal";
import { PhotoUploadCard } from "@/features/admin-dashboard/components/PhotoUploadCard";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface SingleEventProps {
  title: string;
  photos: {
    photoUrl: string;
    id: number;
    eventId: number;
    description?: string;
  }[];
  total: number;
  beneficiaries: number;
  report?: string;
}

export function SingleEvent({ title, photos }: SingleEventProps) {
  const [isPanelModalOpen, setIsPanelModalOpen] = useState(false);
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

  function handleOpenPanelModal() {
    setIsPanelModalOpen(true);
  }

  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    setActiveIndex(0);
  }, [photos.length]);

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener("resize", check)

    return () => window.removeEventListener("resize", check)
  }, [])


  return (
    <>
      <article>
        <h2 className="text-md font-semibold">{title}</h2>

        {isMobile ? (
          <div className="mt-4" aria-label={`Fotos do evento ${title}`}>
            <Swiper
              slidesPerView="auto"
              spaceBetween={16}
              className="w-full"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {photos.map((photo) => (
                <SwiperSlide key={photo.id} className="!w-[75vw] max-w-[280px]">
                  <PhotoUploadCard
                    photo={{ url: photo.photoUrl, caption: photo.description ?? "" }}
                    readOnly
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {photos.length > 1 && (
              <div className="mt-2 flex justify-center gap-1" aria-hidden="true">
                {photos.map((_, i) => (
                  <span
                    key={i}
                    className={[
                      "h-1.5 w-1.5 rounded-full transition-opacity",
                      i === activeIndex ? "bg-neutral-800 opacity-100" : "bg-neutral-400 opacity-50",
                    ].join(" ")}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div
            className="mt-4 flex gap-4 flex-wrap justify-center"
            aria-label={`Fotos do evento ${title}`}
          >
            {photos.map((photo) => (
              <PhotoUploadCard
                key={photo.id}
                photo={{
                  url: photo.photoUrl,
                  caption: photo.description ?? "",
                }}
                readOnly={true}
              />
            ))}
          </div>
        )}


        <div className="mt-6 flex justify-center">
          <GlobalButton
            variant={"text"}
            onClick={handleOpenPanelModal}
            className="w-full tablet:w-72 h-14 gap-2 px-3 py-4 text-base font-inter font-semibold bg-primary-600 text-primary-100  hover:bg-primary-700"
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
            className="w-full h-auto rounded-md flex flex-col gap-6 justify-between items-center"
          />
        )}
      </ModalBase>
      <PanelModal
        isOpen={isPanelModalOpen}
        onClose={() => setIsPanelModalOpen(false)}
        total={120}
        beneficiaries={10}
        report="What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title={""}
      />
    </>
  );
}
