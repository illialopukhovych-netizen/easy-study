import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-lg font-bold text-brand-300 shadow-soft">
              ES
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">Easy Study</p>
              <p className="text-xs text-slate-400">Освітня платформа</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <Link href="#features" className="transition hover:text-white">Можливості</Link>
            <Link href="#security" className="transition hover:text-white">Безпека</Link>
            <Link href="#stage1" className="transition hover:text-white">Етап 1</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-brand-400 hover:text-white">
              Увійти
            </Link>
            <Link href="/register" className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-400">
              Реєстрація
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand-200">
            Stage 1 Foundation
          </span>
          <div className="space-y-5">
            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Сучасна платформа для освітнього процесу.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              Easy Study об&apos;єднує щоденник, розклад, домашні завдання, комунікацію та рольові доступи для учнів, вчителів, батьків і адміністрації.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/dashboard" className="rounded-xl bg-brand-500 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-brand-400">
              Відкрити панель
            </Link>
            <Link href="/register" className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800">
              Створити акаунт
            </Link>
          </div>

          <div className="grid max-w-xl grid-cols-3 gap-4 pt-6 text-left">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-2xl font-bold text-white">4</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">ролі</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-2xl font-bold text-white">1</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">супабейс</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-2xl font-bold text-white">1</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">вхід</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-soft">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Огляд</p>
                <h2 className="mt-2 text-2xl font-bold text-white">Панель учня</h2>
              </div>
              <div className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                online
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-sm text-slate-400">Середній бал</p>
                <p className="mt-3 text-3xl font-bold text-white">11.8</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-sm text-slate-400">Домашні</p>
                <p className="mt-3 text-3xl font-bold text-white">3</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-sm text-slate-400">Розклад</p>
                <p className="mt-3 text-lg font-semibold text-white">Сьогодні</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-sm text-slate-400">Сповіщення</p>
                <p className="mt-3 text-lg font-semibold text-white">5 нових</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm text-slate-400">Графік дня</p>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-300">понеділок</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex justify-between border-b border-slate-800 pb-2"><span>Математика</span><span>08:30</span></li>
                <li className="flex justify-between border-b border-slate-800 pb-2"><span>Фізика</span><span>10:25</span></li>
                <li className="flex justify-between"><span>Англійська</span><span>12:15</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Можливості</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Будова платформи</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Щоденник', 'Оцінки, відвідуваність, середні показники та статистика для кожного предмета.'],
            ['Розклад і домашнє', 'Планування занять, завдання, дедлайни та подання робіт.'],
            ['Комунікація', 'Повідомлення, чати, сповіщення, зустрічі та керування школою.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-lg font-semibold text-white">{title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="security" className="border-t border-slate-800 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Безпека</p>
              <h2 className="mt-3 text-3xl font-bold text-white">Рольові права перевіряються на сервері.</h2>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-sm leading-7 text-slate-300">
              Використовується Supabase Auth з політиками RLS, захищеними маршрутами, окремими ролями для учнів, вчителів, батьків та адміністрації. Ключі входу не зберігаються у фронтенді.
            </div>
          </div>
        </div>
      </section>

      <section id="stage1" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Етап 1</p>
        <h2 className="mt-3 text-3xl font-bold text-white">Готовий фундамент платформи</h2>
        <ul className="mt-6 space-y-3 text-slate-300">
          <li>• базова дизайн-система та навігація</li>
          <li>• авторизація та профілі</li>
          <li>• рольові маршрути та захист</li>
          <li>• панель керування, бібліотека та SQL-міграції Supabase</li>
        </ul>
      </section>
    </main>
  );
}
