async function transformInFile(file: unknown): Promise<Buffer | null> {
  if (!file || typeof file === "string" || !((file as any).arrayBuffer)) {
    return null;
  }
  
  const arrayBuffer = await (file as any).arrayBuffer();
  return Buffer.from(arrayBuffer);
}

function getKey(formData: FormData, keyPrefix: string) {
  return Array.from(formData.keys())
    .filter(key => key.startsWith(keyPrefix))
    .sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, '')) || 0;
      const numB = parseInt(b.replace(/\D/g, '')) || 0;
      return numA - numB;
    })
    .slice(0, 5)
    .map(key => formData.get(key));
}

export default async function (formData: FormData) {
    const photoFiles = getKey(formData, "photos");
    const photoDescriptions = getKey(formData, "photoDescription");

    const data = {
        name: formData.get("name"),
        description: formData.get("description"),
        totalFunding: formData.get("totalFunding"),
        peopleBenefited: formData.get("peopleBenefited"),
        date: formData.get("date") ? new Date(formData.get("date") as string) : undefined,
        photos: (await Promise.all(photoFiles.map(async (file, index) => {
            const buffer = await transformInFile(file);
            if (!buffer) return null;

            return {
                file: buffer,
                description: photoDescriptions[index] as string || ""
            };
        }))).filter(p => p !== null) as { file: Buffer; description: string }[]
    };

    return data;
}