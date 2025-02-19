"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import type { Post } from "@/app/_types/Post";
import type { PostApiResponse } from "@/app/_types/PostApiResponse";
import PostSummary from "@/app/_components/PostSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const requestUrl = `/api/posts?category=${category}`;
        const response = await fetch(requestUrl, {
          method: "GET",
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }
        const postResponse: PostApiResponse[] = await response.json();
        setPosts(
          postResponse.map((rawPost) => ({
            id: rawPost.id,
            title: rawPost.title,
            content: rawPost.content,
            coverImage: {
              url: rawPost.coverImageURL,
              width: 1000,
              height: 1000,
            },
            createdAt: rawPost.createdAt,
            categories: rawPost.categories.map((category) => ({
              id: category.category.id,
              name: category.category.name,
            })),
          }))
        );
      } catch (e) {
        setFetchError(
          e instanceof Error ? e.message : "予期せぬエラーが発生しました"
        );
      }
    };

    if (category) {
      fetchPosts();
    }
  }, [category]);

  if (fetchError) {
    return <div>{fetchError}</div>;
  }

  if (!posts) {
    return (
      <div className="text-gray-500">
        <FontAwesomeIcon icon={faSpinner} className="mr-1 animate-spin" />
        Loading...
      </div>
    );
  }

  const filteredPosts = posts.filter((post) =>
    post.categories.some((cat) => cat.id === category)
  );

  return (
    <main>
      <div className="flex items-center text-2xl font-bold">
        <span>投稿記事一覧</span>
        <span className="ml-2 text-lg text-gray-500">
          ({filteredPosts.length}件)
        </span>
      </div>
      <div className="space-y-3">
        {filteredPosts.map((post) => (
          <PostSummary key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostsPage />
    </Suspense>
  );
}
