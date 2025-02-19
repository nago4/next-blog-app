"use client";
import { useState } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { supabase } from "@/utils/supabase"; // ◀ 追加
import { useAuth } from "@/app/_hooks/useAuth"; // ◀ 追加
import { useRouter } from "next/navigation"; // ◀ 追加

const Header: React.FC = () => {
  // ▼ 追加
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { isLoading, session } = useAuth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
          <div className="flex items-center gap-x-2">
            <FontAwesomeIcon icon={faFish} className="mr-1" />
            AMGMs Blog
          </div>
          <div className="flex items-center gap-x-4">
            <button
              onClick={toggleMenu}
              className="rounded bg-gray-700 px-4 py-2 hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
              メニュー
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="bg-slate-700 py-4">
          <div className="mx-4 max-w-2xl text-white md:mx-auto">
            <Link
              href="/"
              className="block w-full rounded bg-gray-500 px-4 py-2 hover:bg-gray-600"
            >
              AMGMs Blog
            </Link>
            {!isLoading &&
              (session ? (
                <button
                  onClick={logout}
                  className="block w-full rounded bg-red-500 px-4 py-2 hover:bg-red-600"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  className="block w-full rounded bg-blue-500 px-4 py-2 hover:bg-blue-600"
                >
                  編集機能へ
                </Link>
              ))}
            <Link
              href="/about"
              className="block w-full rounded bg-green-500 px-4 py-2 hover:bg-green-600"
            >
              ユーザー登録
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
