import auth from "@/features/admin-login/api/utils/auth";
import { prisma } from "@/utils/prisma";
import * as dotenv from "dotenv";
dotenv.config();

// npx prisma migrate dev
// npx prisma generate
// npx prisma db seed
async function seed() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME;
  if (!email || !password || !name) {
    throw new Error("ADMIN_EMAIL, ADMIN_PASSWORD e ADMIN_NAME precisam estar no .env");
  }

  const result = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
  });
  if (!result?.user) {
    throw new Error("Falha ao criar usuário admin");
  }

  console.log('Database seeded!');
  await prisma.$disconnect();
}

seed().catch((err) => {
  console.error(err);
  prisma.$disconnect();
  process.exit(1);
});

