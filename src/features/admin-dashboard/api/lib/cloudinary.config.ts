import { v2 as cloudinary } from 'cloudinary';

let isConfigured = false;

export const configureCloudinary = () => {
  if (isConfigured) return;
  
  const config = {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
    secure: true
  };

  const missing = Object.entries(config)
    .filter(([key, value]) => !value)
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(
      `❌ Cloudinary configuration missing: ${missing.join(', ')}\n` +
      `Please check your .env.local file`
    );
  }

  cloudinary.config(config);
  isConfigured = true;
  
  console.log('✅ Cloudinary configured successfully');
};

export { cloudinary };