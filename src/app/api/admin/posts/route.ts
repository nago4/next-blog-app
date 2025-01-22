import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { Post } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { supabase } from "@/utils/supabase";

type RequestBody = {
  title: string;
  content: string;
  coverImageKey: string;
  categoryIds: string[];
};

// /* POSTリクエストのボディの設定例
// {
//   "title": "投稿X",
//   "content": "投稿Xの本文。<br/>投稿Xの本文。投稿Xの本文。",
//   "coverImageURL": "https://....",
//   "categoryIds": [
//     "412b3199-5ae1-45eb-a224-8f53ba3790d0",
//     "db450dc7-a73b-4311-8b70-3af652efd144"
//   ]
// }
// */

export const POST = async (req: NextRequest) => {
  const token = req.headers.get("Authorization")?.replace("Bearer ", "") ?? "";
  const { data, error } = await supabase.auth.getUser(token);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }

  try {
    const requestBody: RequestBody = await req.json();
    const { title, content, coverImageKey, categoryIds } = requestBody;

    // 投稿記事テーブルにレコードを追加
    const post: Post = await prisma.post.create({
      data: {
        title,
        content,
        coverImageKey,
        // Prismaのネスト機能で関連カテゴリを同時作成（中間テーブル自動生成）
        // もし、カテゴリが存在しなければ外部キー制約違反エラー "P2003" が発生
        categories: {
          create: categoryIds.map((categoryId) => ({
            categoryId,
          })),
        },
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error(error);

    // 外部キー制約違反のエラーをキャッチ
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2003") {
        return NextResponse.json(
          { error: "指定されたカテゴリの一部が存在しません" },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: "投稿記事の作成に失敗しました" },
      { status: 500 }
    );
  }
};
