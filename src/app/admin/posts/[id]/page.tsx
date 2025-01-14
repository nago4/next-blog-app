"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

// カテゴリをフェッチしたときのレスポンスのデータ型
type RawApiCategoryResponse = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

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

// 投稿記事のカテゴリ選択用のデータ型
type SelectableCategory = {
  id: string;
  name: string;
  isSelect: boolean;
};

// 投稿記事の編集ページ
const Page: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fetchErrorMsg, setFetchErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newCoverImageURL, setNewCoverImageURL] = useState("");

  const { id } = useParams() as { id: string };
  const router = useRouter();

  // カテゴリ配列 (State)。取得中と取得失敗時は null、既存カテゴリが0個なら []
  const [checkableCategories, setCheckableCategories] = useState<
    SelectableCategory[] | null
  >(null);

  // 編集前の投稿記事のデータ (State)
  const [rawApiPostResponse, setRawApiPostResponse] =
    useState<PostApiResponse | null>(null);

  // 投稿記事の取得
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const requestUrl = `/api/posts/${id}`;
        const res = await fetch(requestUrl, {
          method: "GET",
          cache: "no-store",
        });
        if (!res.ok) {
          setRawApiPostResponse(null);
          throw new Error(`${res.status}: ${res.statusText}`);
        }
        const apiResBody = (await res.json()) as PostApiResponse;
        setRawApiPostResponse(apiResBody);
      } catch (error) {
        const errorMsg =
          error instanceof Error
            ? `投稿記事の取得に失敗しました: ${error.message}`
            : `予期せぬエラーが発生しました ${error}`;
        console.error(errorMsg);
        setFetchErrorMsg(errorMsg);
      }
    };

    fetchPost();
  }, [id]);

  // カテゴリの一覧の取得
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const requestUrl = "/api/categories";
        const res = await fetch(requestUrl, {
          method: "GET",
          cache: "no-store",
        });
        if (!res.ok) {
          setCheckableCategories(null);
          throw new Error(`${res.status}: ${res.statusText}`);
        }
        const apiResBody = (await res.json()) as RawApiCategoryResponse[];
        setCheckableCategories(
          apiResBody.map((body) => ({
            id: body.id,
            name: body.name,
            isSelect: false,
          }))
        );
      } catch (error) {
        const errorMsg =
          error instanceof Error
            ? `カテゴリの一覧のフェッチに失敗しました: ${error.message}`
            : `予期せぬエラーが発生しました ${error}`;
        console.error(errorMsg);
        setFetchErrorMsg(errorMsg);
      }
    };
    fetchCategories();
  }, []);

  // 投稿記事のデータが取得できたらカテゴリの選択状態を更新する
  useEffect(() => {
    // 初期化済みなら戻る
    if (isInitialized) return;

    // 投稿記事 または カテゴリ一覧 が取得できていないなら戻る
    if (!rawApiPostResponse || !checkableCategories) return;

    // 投稿記事のタイトル、本文、カバーイメージURLを更新
    setNewTitle(rawApiPostResponse.title);
    setNewContent(rawApiPostResponse.content);
    setNewCoverImageURL(rawApiPostResponse.coverImageURL);

    // カテゴリの選択状態を更新
    const selectedIds = new Set(
      rawApiPostResponse.categories.map((c) => c.category.id)
    );
    setCheckableCategories(
      checkableCategories.map((category) => ({
        ...category,
        isSelect: selectedIds.has(category.id),
      }))
    );
    setIsInitialized(true);
  }, [isInitialized, rawApiPostResponse, checkableCategories]);

  // チェックボックスの状態 (State) を更新する関数
  const switchCategoryState = (categoryId: string) => {
    if (!checkableCategories) return;

    setCheckableCategories(
      checkableCategories.map((category) =>
        category.id === categoryId
          ? { ...category, isSelect: !category.isSelect }
          : category
      )
    );
  };

  const updateNewTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    // ここにタイトルのバリデーション処理を追加する
    setNewTitle(e.target.value);
  };

  const updateNewContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // ここに本文のバリデーション処理を追加する
    setNewContent(e.target.value);
  };

  const updateNewCoverImageURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    // ここにカバーイメージURLのバリデーション処理を追加する
    setNewCoverImageURL(e.target.value);
  };

  // 投稿記事の削除処理
  const handleDelete = async () => {
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

      router.push("/");
    } catch (error) {
      const errorMsg =
        error instanceof Error
          ? `投稿記事の削除に失敗しました: ${error.message}`
          : `予期せぬエラーが発生しました ${error}`;
      console.error(errorMsg);
      window.alert(errorMsg);
    }
  };

  // フォームのリセット処理
  const handleReset = () => {
    if (!rawApiPostResponse) return;

    setNewTitle(rawApiPostResponse.title);
    setNewContent(rawApiPostResponse.content);
    setNewCoverImageURL(rawApiPostResponse.coverImageURL);

    const selectedIds = new Set(
      rawApiPostResponse.categories.map((c) => c.category.id)
    );
    setCheckableCategories(
      checkableCategories!.map((category) => ({
        ...category,
        isSelect: selectedIds.has(category.id),
      }))
    );
  };

  // フォームの送信処理
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // この処理をしないとページがリロードされるので注意

    setIsSubmitting(true);

    // ▼▼ 追加 ウェブAPI (/api/admin/posts/[id]) にPUTリクエストを送信する処理
    try {
      const requestBody = {
        title: newTitle,
        content: newContent,
        coverImageURL: newCoverImageURL,
        categoryIds: checkableCategories
          ? checkableCategories.filter((c) => c.isSelect).map((c) => c.id)
          : [],
      };
      const requestUrl = `/api/admin/posts/${id}`;
      console.log(`${requestUrl} => ${JSON.stringify(requestBody, null, 2)}`);
      const res = await fetch(requestUrl, {
        method: "PUT",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!res.ok) {
        throw new Error(`${res.status}: ${res.statusText}`); // -> catch節に移動
      }

      // 成功メッセージを表示
      setSuccessMsg("投稿記事が更新されました");
      setIsSubmitting(false);
    } catch (error) {
      const errorMsg =
        error instanceof Error
          ? `投稿記事の更新に失敗しました: ${error.message}`
          : `予期せぬエラーが発生しました: ${error}`;
      console.error(errorMsg);
      window.alert(errorMsg);
      setIsSubmitting(false);
    }
  };

  if (fetchErrorMsg) {
    return <div className="text-red-500">{fetchErrorMsg}</div>;
  }

  if (!isInitialized) {
    return (
      <div className="text-gray-500">
        <FontAwesomeIcon icon={faSpinner} className="mr-1 animate-spin" />
        Loading...
      </div>
    );
  }

  return (
    <main>
      <div className="mb-4 text-2xl font-bold">投稿記事の編集・削除</div>

      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="flex items-center rounded-lg bg-white px-8 py-4 shadow-lg">
            <FontAwesomeIcon
              icon={faSpinner}
              className="mr-2 animate-spin text-gray-500"
            />
            <div className="flex items-center text-gray-500">処理中...</div>
          </div>
        </div>
      )}

      {successMsg && (
        <div className="mb-4 rounded bg-green-100 p-4 text-green-700">
          {successMsg}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={twMerge("space-y-4", isSubmitting && "opacity-50")}
      >
        <div className="space-y-1">
          <label htmlFor="title" className="block font-bold">
            タイトル
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full rounded-md border-2 px-2 py-1"
            value={newTitle}
            onChange={updateNewTitle}
            placeholder="タイトルを記入してください"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="content" className="block font-bold">
            本文
          </label>
          <textarea
            id="content"
            name="content"
            className="h-48 w-full rounded-md border-2 px-2 py-1"
            value={newContent}
            onChange={updateNewContent}
            placeholder="本文を記入してください"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="coverImageURL" className="block font-bold">
            カバーイメージ (URL)
          </label>
          <input
            type="url"
            id="coverImageURL"
            name="coverImageURL"
            className="w-full rounded-md border-2 px-2 py-1"
            value={newCoverImageURL}
            onChange={updateNewCoverImageURL}
            placeholder="カバーイメージのURLを記入してください"
            required
          />
          {newCoverImageURL && (
            <div className="mt-4">
              <Image
                src={newCoverImageURL}
                alt="Cover Image"
                width={200}
                height={120}
                className="rounded"
              />
            </div>
          )}
        </div>

        <div className="space-y-1">
          <div className="font-bold">タグ</div>
          <div className="flex flex-wrap gap-2">
            {checkableCategories!.length > 0 ? (
              checkableCategories!.map((c) => (
                <span
                  key={c.id}
                  className={twMerge(
                    "cursor-pointer rounded-full px-3 py-1 text-sm font-semibold",
                    c.isSelect
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  )}
                  onClick={() => switchCategoryState(c.id)}
                >
                  {c.name}
                </span>
              ))
            ) : (
              <div>選択可能なカテゴリが存在しません。</div>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={handleReset}
            className="rounded-md bg-gray-500 px-5 py-1 font-bold text-white hover:bg-gray-600"
          >
            リセット
          </button>

          <button
            type="submit"
            className={twMerge(
              "rounded-md px-5 py-1 font-bold",
              "bg-indigo-500 text-white hover:bg-indigo-600",
              "disabled:cursor-not-allowed"
            )}
            disabled={isSubmitting}
          >
            記事を更新
          </button>

          <button
            type="button"
            className={twMerge(
              "rounded-md px-5 py-1 font-bold",
              "bg-red-500 text-white hover:bg-red-600"
            )}
            onClick={handleDelete}
          >
            削除
          </button>
        </div>
      </form>
    </main>
  );
};

export default Page;
