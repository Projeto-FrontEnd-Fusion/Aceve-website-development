import { v2 as cloudinary } from "cloudinary";
import type { UploadApiResponse } from "cloudinary";
import { configureCloudinary } from "../utils/cloudinary";

configureCloudinary();

export const CloudinaryService = async () => {

  const UploadImage = async (buffer: Buffer) => {
    try {      
      return new Promise<UploadApiResponse>((resolve, reject) => {

        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "events",
            format: "webp",
            transformation: [{ quality: "auto" }],
          },
          (error, result) => {
            if (error) {
              console.error("❌ Erro no upload do Cloudinary:", error);
              return reject(error);
            }
            if (!result) {
              const mensage = "Cloudinary retornou resultado vazio";
              console.error("❌ ", mensage);
              return reject(new Error(mensage));
            }
            console.log("✅ Imagem enviada com sucesso:", result.public_id);
            resolve(result);
          }
        );
        
        uploadStream.end(buffer);
      });
    } catch (error) {
      console.error("❌ Erro na configuração do Cloudinary:", error);
      throw error;
    }
  };

  return { UploadImage } as const;
};
