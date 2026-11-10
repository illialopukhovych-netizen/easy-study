"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BookOpen, CalendarDays, CheckSquare, ChevronDown, GraduationCap, LayoutDashboard, Menu, MessageCircle, MoreHorizontal, Search, Settings, Sparkles, Trophy, Users, Video, X, Bell } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const navGroups: { label: string; items: { label: string; href: string; icon: LucideIcon; badge?: string }[] }[] = [
  { label: "ОСНОВНЕ", items: [{ label: "Огляд", href: "/", icon: LayoutDashboard }, { label: "Щоденник", href: "/diary", icon: BookOpen }, { label: "Розклад", href: "/schedule", icon: CalendarDays }, { label: "Домашні завдання", href: "/homework", icon: CheckSquare, badge: "3" }] },
  { label: "СПІЛЬНОТА", items: [{ label: "Мої класи", href: "/classes", icon: Users }, { label: "Повідомлення", href: "/messages", icon: MessageCircle }] },
  { label: "МОЖЛИВОСТІ", items: [{ label: "ES AI", href: "/ai", icon: Sparkles, badge: "AI" }, { label: "Олімпіади й курси", href: "/opportunities", icon: Trophy }, { label: "Зустрічі", href: "/meetings", icon: Video }] },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const closeMenu = () => setMobileOpen(false);
  return (
    <div className="app-layout">
      {mobileOpen && <button className="mobile-scrim" aria-label="Закрити меню" onClick={closeMenu} />}
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <Link href="/" className="brand" onClick={closeMenu}><span className="brand-mark"><GraduationCap size={21} strokeWidth={2.2} /></span><span className="brand-name">easy<span>study</span></span><span className="brand-beta">ES</span></Link>
        <button className="school-switch"><span className="school-avatar">Л</span><span className="school-details"><strong>Ліцей «Обрій»</strong><small>Навчальний простір</small></span><ChevronDown size={16} /></button>
        <nav className="side-nav" aria-label="Головна навігація">
          {navGroups.map(group => <div className="nav-group" key={group.label}><span className="nav-label">{group.label}</span>{group.items.map(item => { const Icon = item.icon; const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href); return <Link key={item.href} href={item.href} onClick={closeMenu} className={`nav-item ${active ? "nav-active" : ""}`}><Icon size={18} strokeWidth={1.8} /><span>{item.label}</span>{item.badge && <span className={`nav-badge ${item.badge === "AI" ? "ai-badge" : ""}`}>{item.badge}</span>}</Link>; })}</div>)}
        </nav>
        <div className="sidebar-bottom"><div className="help-card"><span className="help-spark"><Sparkles size={15} /></span><strong>Навчайся впевнено</strong><p>Маленькі кроки щодня — великі результати.</p><Link href="/ai" onClick={closeMenu}>Дізнатися більше <span>↗</span></Link></div><Link href="/settings" onClick={closeMenu} className={`nav-item settings-link ${pathname === "/settings" ? "nav-active" : ""}`}><Settings size={18} /><span>Налаштування</span></Link><button className="profile-row"><span className="profile-avatar">М</span><span className="profile-info"><strong>Марія Коваль</strong><small>Учень · 9-А клас</small></span><MoreHorizontal size={19} /></button></div>
      </aside>
      <main className="main-area">
        <header className="topbar"><button className="mobile-menu-button" aria-label="Відкрити меню" onClick={() => setMobileOpen(true)}><Menu size={21} /></button><div className="breadcrumb"><span>Навчальний простір</span><span className="breadcrumb-sep">/</span><strong>{pathname === "/" ? "Огляд" : navGroups.flatMap(g => g.items).find(i => i.href === pathname)?.label || "Розділ"}</strong></div><div className="topbar-actions"><label className="search-box"><Search size={17} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Пошук..." aria-label="Пошук" />{search && <button type="button" className="clear-search" onClick={() => setSearch("")} aria-label="Очистити пошук"><X size={14} /></button>}<kbd>⌘ K</kbd></label><button className="icon-button notification-button" aria-label="Сповіщення"><Bell size={19} /><i /></button><span className="topbar-divider" /><span className="top-avatar">МК</span></div></header>
        <div className="page-content">{children}</div>
      </main>
    </div>
  );
}
