"use client";
import { useState, useEffect } from "react";
import type { Post } from "@/app/_types/Post";
import type { PostApiResponse } from "@/app/_types/PostApiResponse";
import type { Category } from "@/app/_types/Category";
import PostSummary from "@/app/_components/PostSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Page: React.FC = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const requestUrl = `/api/posts`;
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

    const fetchCategories = async () => {
      try {
        const requestUrl = `/api/categories`;
        const response = await fetch(requestUrl, {
          method: "GET",
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error("カテゴリの取得に失敗しました");
        }
        const categories: Category[] = await response.json();
        setCategories(categories);
      } catch (e) {
        setFetchError(
          e instanceof Error ? e.message : "予期せぬエラーが発生しました"
        );
      }
    };

    fetchPosts();
    fetchCategories();
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    );
  };

  const filteredPosts = posts?.filter((post) =>
    selectedCategories.length === 0
      ? true
      : post.categories.some((category) =>
          selectedCategories.includes(category.id)
        )
  );

  if (fetchError) {
    return <div>{fetchError}</div>;
  }

  if (!posts || !categories) {
    return (
      <div className="text-gray-500">
        <FontAwesomeIcon icon={faSpinner} className="mr-1 animate-spin" />
        Loading...
      </div>
    );
  }

  return (
    <main>
      <div className="text-2xl font-bold">投稿記事一覧</div>
      <div className="mb-1 flex justify-end">
        <Link href="/admin" className="text-blue-500 underline">
          管理者機能
        </Link>
      </div>
      <div className="mb-4">
        <div className="text-lg font-bold">カテゴリでフィルタリング</div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
              />
              <span>{category.name}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        {filteredPosts?.map((post) => (
          <PostSummary key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Page;
