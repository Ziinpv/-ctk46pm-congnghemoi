"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (loginError) {
        setError(loginError.message);
        return;
      }

      if (data.session) {
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      setError("Co loi xay ra. Vui long thu lai.");
    } finally {
      setLoading(false);
    }
  };

  const handleGitHubLogin = async () => {
    setError(null);
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (oauthError) {
      setError(oauthError.message);
    }
  };

  return (
    <div className="mt-8 space-y-6">
      {error ? <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">{error}</div> : null}

      <button
        type="button"
        onClick={handleGitHubLogin}
        className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
      >
        Dang nhap voi GitHub
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Hoac</span>
        </div>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Mat khau
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="******"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Dang xu ly..." : "Dang nhap"}
        </button>
      </form>

      <p className="text-center text-sm text-gray-600">
        Chua co tai khoan?{" "}
        <Link href="/register" className="text-blue-600 hover:text-blue-500">
          Dang ky ngay
        </Link>
      </p>
    </div>
  );
}
