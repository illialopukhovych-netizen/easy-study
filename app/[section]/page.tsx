import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";

const sections: Record<string, { title: string; subtitle: string; icon: string; description: string }> = {
  diary: { title: "Щоденник", subtitle: "Успішність у фокусі", icon: "01", description: "Оцінки, коментарі вчителів і статистика за предметами зібрані в одному місці." },
  schedule: { title: "Розклад", subtitle: "Твій навчальний тиждень", icon: "02", description: "Переглядай уроки, кабінети та час занять. Редагування розкладу з’явиться в наступних етапах." },
  homework: { title: "Домашні завдання", subtitle: "Плануй навчання", icon: "03", description: "Список завдань із термінами та статусами допоможе нічого не забути." },
  classes: { title: "Мої класи", subtitle: "Навчаймося разом", icon: "04", description: "Класи, однокласники й оголошення — у спільному навчальному просторі." },
  messages: { title: "Повідомлення", subtitle: "Завжди на зв’язку", icon: "05", description: "Особисті та групові чати для спілкування з учителями й однокласниками." },
  ai: { title: "ES AI", subtitle: "Помічник у навчанні", icon: "06", description: "Пояснення складних тем, підготовка до контрольних і калькулятор оцінок." },
  opportunities: { title: "Можливості", subtitle: "Навчання поза уроками", icon: "07", description: "Олімпіади, конкурси, програми та курси з перевіреними джерелами." },
  meetings: { title: "Зустрічі", subtitle: "Навчання онлайн", icon: "08", description: "Плануй навчальні зустрічі та зберігай посилання на відеодзвінки." },
};

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const item = sections[section];
  if (!item) return <div className="empty-state"><span className="eyebrow">СТОРІНКУ НЕ ЗНАЙДЕНО</span><h1>Схоже, це не той розділ</h1><Link className="text-link" href="/">Повернутися на головну <ArrowUpRight size={16} /></Link></div>;
  return (
    <div className="section-page">
      <Link href="/" className="back-link"><ArrowLeft size={16} /> На головну</Link>
      <div className="section-hero"><span className="section-number">{item.icon}</span><span className="eyebrow">{item.subtitle}</span><h1>{item.title}</h1><p>{item.description}</p></div>
      <div className="coming-card"><div className="coming-icon"><Sparkles size={20} /></div><div><span className="eyebrow">РОЗВИТОК ПЛАТФОРМИ</span><h2>Цей розділ готується</h2><p>Зараз створено адаптивну основу Easy Study. Підключення даних і функцій цього розділу — наступний етап розробки.</p></div></div>
      <p className="demo-note">Тут поки немає підключених даних або навчальних записів.</p>
    </div>
  );
}
