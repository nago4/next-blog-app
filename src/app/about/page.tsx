"use client";
import { FormEvent, useState } from "react";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
    } else {
      setSuccess("ユーザー登録が成功しました！");
      console.log("User signed up:", data.user);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignUp}
        className="w-full max-w-md space-y-4 rounded bg-white p-8 shadow-md"
      >
        <h1 className="text-center text-2xl font-bold">ユーザー登録</h1>
        {error && <div className="text-red-500">{error}</div>}
        {success && <div className="text-green-500">{success}</div>}
        <div>
          <label className="block text-sm font-medium">メールアドレス</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">パスワード</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded border px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full rounded bg-blue-500 py-2 text-white"
        >
          登録
        </button>
      </form>
    </main>
  );
};

export default SignUp;
