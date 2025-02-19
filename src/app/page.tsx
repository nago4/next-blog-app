"use client";
import { useState, useEffect } from "react";
import type { Category } from "@/app/_types/Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation"; // 変更
import Link from "next/link";

const Page: React.FC = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(""); // 追加
  const router = useRouter(); // 変更

  useEffect(() => {
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

    fetchCategories();
  }, []);

  if (fetchError) {
    return <div>{fetchError}</div>;
  }

  if (!categories) {
    return (
      <div className="text-gray-500">
        <FontAwesomeIcon icon={faSpinner} className="mr-1 animate-spin" />
        Loading...
      </div>
    );
  }

  const handleCategoryClick = (categoryId: string) => {
    router.push(`/posts?category=${categoryId}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(date);
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  ); // 追加

  return (
    <main>
      <div className="mb-4 text-2xl font-bold">カテゴリ一覧</div>
      <input
        type="text"
        placeholder="カテゴリを検索"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 w-full rounded border p-2"
      />{" "}
      {/* 追加 */}
      <div className="space-y-4">
        {filteredCategories.map((category) => (
          <div key={category.id} className="rounded-lg border p-4 shadow-sm">
            <div className="text-lg font-semibold">{category.name}</div>
            <div className="text-sm text-gray-500">
              投稿日:{" "}
              {category.createdAt
                ? formatDate(String(category.createdAt))
                : "日付不明"}
            </div>
            <button
              className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
              onClick={() => handleCategoryClick(category.id)}
            >
              詳細を見る
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
