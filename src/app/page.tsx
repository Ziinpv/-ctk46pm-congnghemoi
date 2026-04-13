export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-12 font-sans dark:bg-black">
      <main className="w-full max-w-3xl rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900 sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Xin chao, minh la Ziinpv
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          Minh la sinh vien CNTT yeu thich xay dung ung dung web voi Next.js va
          React.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            So thich va muc tieu hoc tap
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
            <li>Lap trinh web full-stack voi React va Next.js.</li>
            <li>Tim hieu UI/UX de xay dung giao dien than thien.</li>
            <li>Ren luyen tu duy giai quyet van de qua cac bai toan thuc te.</li>
            <li>Nang cao tieng Anh chuyen nganh cong nghe thong tin.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
