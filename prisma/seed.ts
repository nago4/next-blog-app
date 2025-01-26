import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const c1 = await prisma.category.create({ data: { name: "Category1" } });
  const c2 = await prisma.category.create({ data: { name: "Category2" } });
  const c3 = await prisma.category.create({ data: { name: "Category3" } });
  const c4 = await prisma.category.create({ data: { name: "Category4" } });

  const p1 = await prisma.post.create({
    data: {
      title: "投稿1",
      content: "投稿1の本文。<br/>投稿1の本文。投稿1の本文。",
      coverImageURL:
        "https://w1980.blob.core.windows.net/pg3/cover-img-red.jpg",
      categories: {
        create: [{ categoryId: c1.id }, { categoryId: c2.id }],
      },
    },
  });

  const p2 = await prisma.post.create({
    data: {
      title: "投稿2",
      content: "投稿2の本文。<br/>投稿2の本文。投稿2の本文。",
      coverImageURL:
        "https://w1980.blob.core.windows.net/pg3/cover-img-blue.jpg",
      categories: {
        create: [{ categoryId: c3.id }, { categoryId: c4.id }],
      },
    },
  });

  // 他の投稿記事データも同様に修正
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
