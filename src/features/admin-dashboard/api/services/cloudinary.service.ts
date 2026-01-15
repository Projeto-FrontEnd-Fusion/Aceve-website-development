import { v2 as cloudinary } from "cloudinary";
import type { UploadApiResponse } from "cloudinary";
import { configureCloudinary } from "../lib/cloudinary.config";
import { IMAGE_SIGNATURES, ImageFormat } from "../types/imageFormats.type";

configureCloudinary();

export const CloudinaryService = async () => {

  const isImageBuffer = (buffer: Buffer): ImageFormat | false => {
    const bufferStart = buffer.subarray(0, 8);
    
    for (const [format, signature] of Object.entries(IMAGE_SIGNATURES)) {
      if (bufferStart.subarray(0, signature.length).equals(signature)) {
        return format as ImageFormat;
      }
    }
    
    return false;
  };

  const UploadImage = async (buffer: Buffer) => {
    try {      
      return new Promise<UploadApiResponse>((resolve, reject) => {
        const imageFormat = isImageBuffer(buffer);
        if (!imageFormat) {
          return reject(new Error("O arquivo não é uma imagem válida. " +
            "Formatos suportados: JPEG, PNG, GIF, BMP e  WebP"));
        }

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
