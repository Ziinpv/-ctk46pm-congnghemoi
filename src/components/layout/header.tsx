import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/actions/auth";

export async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Simple Blog
          </Link>

          <nav className="flex items-center gap-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Trang chu
            </Link>
            {user ? (
              <>
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                  Dashboard
                </Link>
                <form action={logout}>
                  <button type="submit" className="text-gray-600 hover:text-gray-900">
                    Dang xuat
                  </button>
                </form>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-600 hover:text-gray-900">
                  Dang nhap
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Dang ky
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
