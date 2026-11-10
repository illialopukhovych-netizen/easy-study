export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-slate-100">
      <div className="max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center shadow-soft">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-300">404</p>
        <h1 className="mt-4 text-3xl font-bold">Сторінку не знайдено</h1>
        <p className="mt-3 text-sm text-slate-400">Поверніться до панелі Easy Study.</p>
        <a href="/dashboard" className="button-primary mt-6 w-full">На головну</a>
      </div>
    </main>
  );
}
