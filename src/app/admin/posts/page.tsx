"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

// 投稿記事をフェッチしたときのレスポンスのデータ型
type PostApiResponse = {
  id: string;
  title: string;
  content: string;
  coverImageURL: string;
  createdAt: string;
  categories: {
    category: {
      id: string;
      name: string;
    };
  }[];
};

// 投稿記事のリストページ
const AdminPostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostApiResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchErrorMsg, setFetchErrorMsg] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const router = useRouter();

  // 投稿記事の取得
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const requestUrl = "/api/posts";
        const res = await fetch(requestUrl, {
          method: "GET",
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error(`${res.status}: ${res.statusText}`);
        }
        const apiResBody = (await res.json()) as PostApiResponse[];
        setPosts(apiResBody);
      } catch (error) {
        const errorMsg =
          error instanceof Error
            ? `投稿記事の取得に失敗しました: ${error.message}`
            : `予期せぬエラーが発生しました ${error}`;
        console.error(errorMsg);
        setFetchErrorMsg(errorMsg);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // 検索クエリに基づいて投稿をフィルタリング
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ページネーションのための投稿のスライス
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/posts/${id}`);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("本当にこの投稿を削除しますか？")) return;

    try {
      const requestUrl = `/api/admin/posts/${id}`;
      const res = await fetch(requestUrl, {
        method: "DELETE",
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error(`${res.status}: ${res.statusText}`);
      }

      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      const errorMsg =
        error instanceof Error
          ? `投稿記事の削除に失敗しました: ${error.message}`
          : `予期せぬエラーが発生しました: ${error}`;
      console.error(errorMsg);
      window.alert(errorMsg);
    }
  };

  if (fetchErrorMsg) {
    return <div className="text-red-500">{fetchErrorMsg}</div>;
  }

  if (isLoading) {
    return (
      <div className="text-gray-500">
        <FontAwesomeIcon icon={faSpinner} className="mr-1 animate-spin" />
        Loading...
      </div>
    );
  }

  return (
    <main className="container mx-auto p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          投稿記事の管理
          <span className="ml-2 text-sm text-gray-500">({posts.length}件)</span>
        </div>
        <Link href="/admin/posts/new">
          <button
            type="submit"
            className={twMerge(
              "rounded-md px-5 py-1 font-bold",
              "bg-blue-500 text-white hover:bg-blue-600",
              "disabled:cursor-not-allowed disabled:opacity-50"
            )}
          >
            新しい投稿記事を作成
          </button>
        </Link>
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="タイトルで検索"
          className="w-full rounded-md border-2 px-2 py-1"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((post) => (
          <div key={post.id} className="rounded-lg bg-white p-4 shadow-md">
            <h2 className="mb-2 text-xl font-bold">{post.title}</h2>
            <p className="mb-4 text-gray-700">
              {post.content.slice(0, 100)}...
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => handleEdit(post.id)}
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        {Array.from(
          { length: Math.ceil(filteredPosts.length / postsPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={twMerge(
                "rounded px-4 py-2",
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              )}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </main>
  );
};

export default AdminPostsPage;
