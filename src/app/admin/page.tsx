"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Page: React.FC = () => {
  return (
    <main>
      <div className="mb-2 text-2xl font-bold">管理者用機能の一覧</div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
          <Link className="text-blue-500 underline" href="/admin/posts">
            ポストの削除、編集へ
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
          <Link className="text-blue-500 underline" href="/admin/posts/new">
            新規投稿を作る
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
          <Link className="text-blue-500 underline" href="/admin/categories">
            カテゴリの削除、編集へ
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
          <Link
            className="text-blue-500 underline"
            href="/admin/categories/new"
          >
            新規カテゴリを作る
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Page;
