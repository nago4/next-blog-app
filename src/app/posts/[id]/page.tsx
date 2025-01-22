/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import type { Post } from "@/app/_types/Post";
import type { PostApiResponse } from "@/app/_types/PostApiResponse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import DOMPurify from "isomorphic-dompurify";

// 投稿記事の詳細表示 /posts/[id]
const Page: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // 動的ルートパラメータから id を取得 （URL:/posts/[id]）
  const { id } = useParams() as { id: string };

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const requestUrl = `/api/posts/${id}`;
        const response = await fetch(requestUrl, {
          method: "GET",
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }
        const postApiResponse: PostApiResponse = await response.json();
        setPost({
          id: postApiResponse.id,
          title: postApiResponse.title,
          content: postApiResponse.content,
          coverImage: {
            url: postApiResponse.coverImageKey || null,
            width: 1000,
            height: 1000,
          },
          createdAt: postApiResponse.createdAt,
          starredAt: null, // or provide the appropriate value
          categories: postApiResponse.categories.map((category) => ({
            id: category.category.id,
            name: category.category.name,
          })),
        });

        // 関連する投稿を取得
        const categoryIds = postApiResponse.categories.map(
          (category) => category.category.id
        );
        const relatedPostsResponse = await fetch(
          `/api/posts?categories=${categoryIds.join(",")}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );
        if (!relatedPostsResponse.ok) {
          throw new Error("関連する投稿の取得に失敗しました");
        }
        const relatedPostsApiResponse: PostApiResponse[] =
          await relatedPostsResponse.json();
        setRelatedPosts(
          relatedPostsApiResponse
            .filter((relatedPost) =>
              relatedPost.categories.some((category) =>
                categoryIds.includes(category.category.id)
              )
            )
            .map((relatedPost) => ({
              id: relatedPost.id,
              title: relatedPost.title,
              content: relatedPost.content,
              coverImage: {
                url: relatedPost.coverImageKey || null,
                width: 1000,
                height: 1000,
              },
              createdAt: relatedPost.createdAt,
              starredAt: null, // or provide the appropriate value
              categories: relatedPost.categories.map((category) => ({
                id: category.category.id,
                name: category.category.name,
              })),
            }))
        );
      } catch (e) {
        setFetchError(
          e instanceof Error ? e.message : "予期せぬエラーが発生しました"
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (fetchError) {
    return <div>{fetchError}</div>;
  }

  // 投稿データの取得中は「Loading...」を表示
  if (isLoading) {
    return (
      <div className="text-gray-500">
        <FontAwesomeIcon icon={faSpinner} className="mr-1 animate-spin" />
        Loading...
      </div>
    );
  }

  // 投稿データが取得できなかったらエラーメッセージを表示
  if (!post) {
    return <div>指定idの投稿の取得に失敗しました。</div>;
  }

  // HTMLコンテンツのサニタイズ
  const safeHTML = DOMPurify.sanitize(post.content, {
    ALLOWED_TAGS: ["b", "strong", "i", "em", "u", "br"],
  });

  return (
    <main className="container mx-auto p-4">
      <div className="mx-auto mb-8 max-w-4xl rounded-lg bg-white p-6 shadow-md">
        <div className="mb-4 flex items-center">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <div className="ml-4 flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <span
                key={category.id}
                className="rounded bg-blue-100 px-2.5 py-0.5 text-sm font-semibold text-blue-800"
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>
        {post.coverImage.url && (
          <Image
            src={post.coverImage.url}
            alt="Example Image"
            width={post.coverImage.width}
            height={post.coverImage.height}
            priority
            className="mb-4 rounded-xl"
          />
        )}
        <div
          className="prose prose-lg mb-4 text-gray-700"
          dangerouslySetInnerHTML={{ __html: safeHTML }}
        />
      </div>
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 text-sm shadow-md">
        <h2 className="text-0.5lg mb-4 font-bold">関連する投稿</h2>
        <ul className="list-inside list-disc">
          {relatedPosts.map((relatedPost) => (
            <li key={relatedPost.id} className="mb-2">
              <a
                href={`/posts/${relatedPost.id}`}
                className="font-bold text-blue-500 hover:underline"
              >
                {relatedPost.title}
              </a>
              <div className="ml-2 inline-flex flex-wrap gap-2">
                {relatedPost.categories.map((category) => (
                  <span
                    key={category.id}
                    className={`rounded px-2.5 py-0.5 text-xs font-semibold ${
                      post.categories.some(
                        (postCategory) => postCategory.id === category.id
                      )
                        ? "border border-blue-500 bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Page;
