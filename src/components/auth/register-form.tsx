"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function RegisterForm() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { display_name: displayName },
        },
      });

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      if (data.user) {
        router.push("/login?message=Dang ky thanh cong! Vui long kiem tra email.");
      }
    } catch {
      setError("Co loi xay ra. Vui long thu lai.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="mt-8 space-y-6">
      {error ? <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">{error}</div> : null}

      <div className="space-y-4">
        <div>
          <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">
            Ten hien thi
          </label>
          <input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Hoang Long"
          />
        </div>

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
            minLength={6}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="******"
          />
          <p className="mt-1 text-xs text-gray-500">Toi thieu 6 ky tu</p>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Dang xu ly..." : "Dang ky"}
      </button>

      <p className="text-center text-sm text-gray-600">
        Da co tai khoan?{" "}
        <Link href="/login" className="text-blue-600 hover:text-blue-500">
          Dang nhap
        </Link>
      </p>
    </form>
  );
}
