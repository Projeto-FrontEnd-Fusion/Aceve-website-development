import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function uploadImage(base64: string): Promise<UploadApiResponse> {
    try {
        return await cloudinary.uploader.upload(base64, {
            folder: "admin-dashboard",
            resource_type: "image",
        })
    } catch (error) {
        console.error("Cloudinary upload error:", error)
        throw new Error("Falha ao enviar imagem para Cloudinary")
    }
}