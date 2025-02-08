"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { supabase } from "@/utils/supabase"; // ◀ 追加
import { useAuth } from "@/app/_hooks/useAuth"; // ◀ 追加
import { useRouter } from "next/navigation"; // ◀ 追加

const Header: React.FC = () => {
  // ▼ 追加
  const router = useRouter();
  const { isLoading, session } = useAuth();
  const logout = async () => {
    await supabase.auth.signOut();
    router.replace("/");
  };
  // ▲ 追加

  return (
    <header>
      <div className="bg-slate-800 py-2">
        <div
          className={twMerge(
            "mx-4 max-w-2xl md:mx-auto",
            "flex items-center justify-between",
            "text-lg font-bold text-white"
          )}
        >
          <div>
            <Link href="/" className="flex items-center gap-x-2">
              <FontAwesomeIcon icon={faFish} className="mr-1" />
              AMGMs Blog
            </Link>
          </div>
          <div className="flex gap-x-4">
            {/* ▼ 追加 */}
            {!isLoading &&
              (session ? (
                <button
                  onClick={logout}
                  className="rounded bg-red-500 px-4 py-2 hover:bg-red-600"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  className="rounded bg-blue-500 px-4 py-2 hover:bg-blue-600"
                >
                  編集機能へ
                </Link>
              ))}
            {/* ▲ 追加 */}
            <Link
              href="/about"
              className="rounded bg-green-500 px-4 py-2 hover:bg-green-600"
            >
              ユーザー登録
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
