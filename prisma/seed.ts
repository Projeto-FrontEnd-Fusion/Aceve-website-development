import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcryptjs';
import * as dotenv from "dotenv";
dotenv.config();

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

async function seed() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;


  if (!email || !password) {
    throw new Error("ADMIN_EMAIL e ADMIN_PASSWORD precisam estar no .env");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.users.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  console.log('Database seeded!');
  await prisma.$disconnect();
}

seed().catch((err) => {
  console.error(err);
  prisma.$disconnect();
  process.exit(1);
});

