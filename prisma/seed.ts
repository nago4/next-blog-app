import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // 既存のレコードを全て削除
  await prisma.postCategory?.deleteMany();
  await prisma.post?.deleteMany();
  await prisma.category?.deleteMany();

  // カテゴリデータの作成 (レコードのInsert)
  const c1 = await prisma.category.create({ data: { name: "カテゴリ1" } });
  const c2 = await prisma.category.create({ data: { name: "カテゴリ2" } });
  const c3 = await prisma.category.create({ data: { name: "カテゴリ3" } });
  const c4 = await prisma.category.create({ data: { name: "カテゴリ4" } });

  // 投稿記事データの作成 (レコードのInsert)
  const p1 = await prisma.post.create({
    data: {
      title: "投稿1",
      content: "投稿1の本文。<br/>投稿1の本文。投稿1の本文。",
      coverImageKey:
        "https://w1980.blob.core.windows.net/pg3/cover-img-red.jpg",
      categories: {
        create: [{ categoryId: c1.id }, { categoryId: c2.id }],
      },
    },
  });

  // 他の投稿記事データも同様に修正
  const p2 = await prisma.post.create({
    data: {
      title: "投稿2",
      content: "投稿2の本文。<br/>投稿2の本文。投稿2の本文。",
      coverImageKey:
        "https://w1980.blob.core.windows.net/pg3/cover-img-blue.jpg",
      categories: {
        create: [{ categoryId: c3.id }, { categoryId: c4.id }],
      },
    },
  });

  // 他の投稿記事データも同様に修正
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
