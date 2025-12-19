import { PrismaClient } from '@/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { hashPassword } from 'better-auth/crypto'
import * as dotenv from "dotenv";
dotenv.config();

// npx prisma generate
// npx prisma db seed

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

async function seed() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) {
    throw new Error("ADMIN_EMAIL, ADMIN_PASSWORD precisam estar no .env");
  }

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      id: crypto.randomUUID(),
      name: "Admin",
      email: email,
      emailVerified: true,
      image: null,
    },
  });

  await prisma.account.upsert({
    where: {
     accountId_providerId: {
        accountId: email,
        providerId: "credential",
      },
    },
    update: { password: hashedPassword },
    create: {
      id: crypto.randomUUID(),
      accountId: email,
      providerId: "credential",
      userId: user.id,
      password: hashedPassword,
    },
  });

  console.log("✅ Admin user seeded");
  console.log('Database seeded!');
  await prisma.$disconnect();
}

seed().catch((err) => {
  console.error(err);
  prisma.$disconnect();
  process.exit(1);
});