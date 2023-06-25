import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as {
  prisma?: PrismaClient;
};

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

import { faker } from "@faker-js/faker";

async function main() {
  void (await prisma.post.create({
    data: {
      slug: faker.lorem.slug(),
      title: faker.lorem.sentence(),
      excerpt: faker.lorem.paragraph(),
      content: faker.lorem.paragraphs(),
      published: true,
    },
  }));
}
void main().then(async () => {
  await prisma.$disconnect();
});
