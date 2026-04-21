import Link from "next/link";
import Counter from "@/components/counter";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl py-12">
      <div className="mb-12 rounded-2xl border border-[#CDE3EB] bg-white p-10 text-center dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#CDE3EB] text-3xl text-[#143A52] dark:bg-gray-700 dark:text-white">
          L
        </div>
        <h1 className="mb-4 text-4xl font-bold text-[#143A52] md:text-5xl dark:text-white">
          Xin chao! Toi la Hoang Long
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-[#6E828A] dark:text-gray-300">
          Sinh vien Cong nghe Thong tin tai Dai hoc Da Lat, dam me phat trien web va cac cong
          nghe moi.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/projects"
            className="rounded-lg bg-[#143A52] px-6 py-3 text-white transition-colors hover:bg-[#6E828A] dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Xem du an
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-[#CDE3EB] px-6 py-3 text-[#143A52] transition-colors hover:bg-[#E3EFF3] dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
          >
            Lien he
          </Link>
        </div>
        <div className="mt-8">
          <Counter />
        </div>
      </div>

      <div className="mb-12 rounded-2xl border border-[#CDE3EB] bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-6 text-center text-2xl font-bold text-[#143A52] dark:text-white">Ky nang</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            "JavaScript",
            "TypeScript",
            "Next.js",
            "React",
            "Tailwind CSS",
            "Node.js",
            "Dart/Flutter",
            "C#/.NET",
            "Python",
            "SQL",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-lg border border-[#CDE3EB] bg-[#E3EFF3] p-3 text-center text-[#143A52] dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[#CDE3EB] bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-3 text-2xl font-bold text-[#143A52] dark:text-white">Doc Blog cua toi</h2>
        <p className="mb-4 text-[#6E828A] dark:text-gray-300">Chia se kien thuc va kinh nghiem hoc lap trinh thuc te.</p>
        <Link href="/blog" className="font-semibold text-[#143A52] hover:underline dark:text-white">
          Xem blog -
        </Link>
      </div>
    </div>
  );
}
