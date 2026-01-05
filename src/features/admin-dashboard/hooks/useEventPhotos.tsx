import { useEffect, useState } from 'react';
import { EventPhoto } from '../types/event-photo';

const MAX_PHOTOS = 5;

export function useEventPhotos() {
  const [photos, setPhotos] = useState<EventPhoto[]>([]);

  function addPhoto(file: File) {
    if (photos.length >= MAX_PHOTOS) return;

    const previewUrl = URL.createObjectURL(file);

    setPhotos((prev) => [
      ...prev,
      {file, previewUrl, caption: ""}
    ]);
  }

  function removePhoto(index: number) {
    setPhotos((prev) => {
      const photo = prev[index];
      if (photo) {
        URL.revokeObjectURL(photo.previewUrl);
      }

      return prev.filter((_, i) => i !== index);
    })
  }

  function updateCaption(index: number, caption: string) {
    setPhotos((prev) => 
      prev.map((p, i) => 
        i == index ? {...p, caption} : p
      )
    )
  }

  function resetPhotos() {
    setPhotos((prev) => {
      prev.forEach((photo) => {
        URL.revokeObjectURL(photo.previewUrl);
      });

      return [];
    });
  }

  useEffect(() => {
    return () => {
      photos.forEach((p) => {
        URL.revokeObjectURL(p.previewUrl);
      })
    }
  }, [photos]);

  return {
    photos,
    addPhoto,
    removePhoto,
    updateCaption,
    resetPhotos,
    canAddMore: photos.length < MAX_PHOTOS,
  }
}
