import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

type RouteParams = {
  params: {
    id: string;
  };
};

export const POST = async (req: NextRequest, { params }: RouteParams) => {
  try {
    const id = params.id;
    const post = await prisma.post.update({
      where: { id },
      data: { starredAt: new Date() },
    });
    return NextResponse.json(post);
  } catch (error) {
    console.error("Error starring post:", error);
    return NextResponse.json(
      { error: "星を付けることに失敗しました" },
      { status: 500 }
    );
  }
};
