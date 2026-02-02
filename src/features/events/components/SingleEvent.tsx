"use client";
import { GlobalButton } from "@/components/GlobalButton/GlobalButton";
import { ModalBase } from "@/components/ModalBase/ModalBase";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PanelModal } from "./PanelModal";
import { PhotoUploadCard } from "@/features/admin-dashboard/components/PhotoUploadCard";
import NotebookIcon from "../assets/notebook.svg";

import { Swiper, SwiperSlide } from "swiper/react";
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

export function SingleEvent({
  title,
  photos,
  total,
  beneficiaries,
  report,
}: SingleEventProps) {
  const [isPanelModalOpen, setIsPanelModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption?: string;
  } | null>(null);

  function handleOpenModal(src: string, alt: string, caption?: string) {
    setSelectedImage({ src, alt, caption });
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
              slidesPerView={1}
              spaceBetween={16}
              className="w-full"
              centeredSlides
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {photos.map((photo) => (
                <SwiperSlide key={photo.id} className="!w-full">
                  <div className="w-full flex justify-center">
                    <PhotoUploadCard
                      photo={{ url: photo.photoUrl, caption: photo.description ?? "" }}
                      readOnly
                      onImageClick={(src, alt) =>
                        handleOpenModal(src, alt, photo.description)
                      }
                    />
                  </div>
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
                onImageClick={(src, alt) =>
                  handleOpenModal(src, alt, photo.description)
                }
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
            <Image
              src={NotebookIcon}
              alt=""
              aria-hidden="true"
              className="h-[30px] w-[31px]"
            />
            Painel da Transparência
          </GlobalButton>
        </div>
      </article>
      <ModalBase isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedImage && (
          <div className="flex flex-col gap-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="h-auto max-w-full rounded-md"
            />
            {selectedImage.caption && (
              <p className="text-sm text-neutral-700">
                {selectedImage.caption}
              </p>
            )}
          </div>
        )}
      </ModalBase>
      <PanelModal
        isOpen={isPanelModalOpen}
        onClose={() => setIsPanelModalOpen(false)}
        total={total}
        beneficiaries={beneficiaries}
        report={report}
        title={title}
      />
    </>
  );
}
