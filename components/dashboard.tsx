"use client";

import { ArrowDownRight, ArrowRight, ArrowUpRight, Bell, BookOpen, Check, ChevronLeft, ChevronRight, Clock3, MoreHorizontal, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const grades = [
  { subject: "Математика", teacher: "Олена Петрівна", grade: "11", color: "violet", date: "Сьогодні" },
  { subject: "Українська мова", teacher: "Ірина Миколаївна", grade: "10", color: "blue", date: "Вчора" },
  { subject: "Фізика", teacher: "Андрій Васильович", grade: "9", color: "amber", date: "14 жовт." },
];
const schedule = [
  { time: "08:30", end: "09:15", subject: "Алгебра", room: "Каб. 214", color: "violet", next: true },
  { time: "09:25", end: "10:10", subject: "Українська мова", room: "Каб. 108", color: "blue" },
  { time: "10:30", end: "11:15", subject: "Історія України", room: "Каб. 302", color: "amber" },
];
const tasks = [
  { subject: "Біологія", title: "Підготувати презентацію про екосистеми", due: "Сьогодні, 18:00", color: "green" },
  { subject: "Геометрія", title: "Вправи 214, 218 — розділ 5", due: "Завтра, 20:00", color: "violet" },
  { subject: "Англійська мова", title: "Workbook, стор. 42–43", due: "Пт, 17 жовт.", color: "blue" },
];

export function Dashboard() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [week, setWeek] = useState(0);
  const toggleTask = (title: string) => setCompleted(current => current.includes(title) ? current.filter(item => item !== title) : [...current, title]);
  return (
    <div className="dashboard">
      <div className="welcome-row"><div><span className="eyebrow">ВІВТОРОК, 15 ЖОВТНЯ 2024</span><h1>Доброго ранку, Маріє <span className="wave">✳</span></h1><p>Новий день — нові можливості. Ось твій навчальний план.</p></div><Link href="/schedule" className="date-button"><span className="date-icon">15</span><span><strong>Жовтень 2024</strong><small>2-й семестр · 9-А</small></span><ChevronRight size={17} /></Link></div>
      <div className="demo-banner"><span className="demo-dot" /><span><strong>Попередній перегляд</strong> · прикладові дані для демонстрації інтерфейсу, не підключені до бази даних.</span><button aria-label="Закрити повідомлення" onClick={(e) => e.currentTarget.parentElement?.remove()}><span>×</span></button></div>
      <section className="stats-grid" aria-label="Навчальна статистика">
        <article className="stat-card"><div className="stat-top"><span className="stat-icon purple"><BookOpen size={18} /></span><span className="stat-caption">ЗАГАЛЬНИЙ БАЛ</span><MoreHorizontal size={18} className="muted-icon" /></div><div className="stat-value">10,4 <span className="stat-out-of">/ 12</span></div><div className="stat-foot"><span className="trend"><TrendingUp size={14} /> +0,3</span><span>до минулого місяця</span></div><div className="stat-sparkline spark-purple"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></article>
        <article className="stat-card"><div className="stat-top"><span className="stat-icon green"><Check size={18} /></span><span className="stat-caption">ВІДВІДУВАНІСТЬ</span><MoreHorizontal size={18} className="muted-icon" /></div><div className="stat-value">96<span className="stat-out-of">%</span></div><div className="stat-foot"><span className="positive-text">Чудовий результат</span><span>за цей семестр</span></div><div className="progress-track"><i style={{width:"96%"}} /></div></article>
        <article className="stat-card"><div className="stat-top"><span className="stat-icon amber"><Clock3 size={18} /></span><span className="stat-caption">ЗАВДАННЯ</span><MoreHorizontal size={18} className="muted-icon" /></div><div className="stat-value">3 <span className="stat-out-of">активні</span></div><div className="stat-foot"><span className="deadline-dot" /> 1 завдання на сьогодні</div><div className="task-mini-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></article>
        <article className="stat-card"><div className="stat-top"><span className="stat-icon blue"><Bell size={18} /></span><span className="stat-caption">НОВІ ПОВІДОМЛЕННЯ</span><MoreHorizontal size={18} className="muted-icon" /></div><div className="stat-value">2 <span className="stat-out-of">непрочитані</span></div><div className="stat-foot"><span>Від Олени Петрівни</span><Link href="/messages" className="tiny-arrow"><ArrowUpRight size={15} /></Link></div><div className="message-avatars"><span>ОП</span><span>АК</span><span>+1</span></div></article>
      </section>
      <section className="content-grid"><article className="panel grades-panel"><div className="panel-heading"><div><span className="eyebrow">ТВОЇ РЕЗУЛЬТАТИ</span><h2>Останні оцінки</h2></div><Link href="/diary" className="view-all">Весь щоденник <ArrowRight size={15} /></Link></div><div className="grade-list">{grades.map(item=><div className="grade-row" key={item.subject}><span className={`subject-mark ${item.color}`}>{item.subject.charAt(0)}</span><div className="grade-subject"><strong>{item.subject}</strong><small>{item.teacher}</small></div><span className={`grade-value ${item.color}`}>{item.grade}</span><span className="grade-date">{item.date}</span></div>)}</div><div className="grade-summary"><span>Середній бал за семестр</span><strong>10,4 <small>/ 12</small></strong><span className="grade-summary-icon"><TrendingUp size={16} /></span></div></article>
        <article className="panel schedule-panel"><div className="panel-heading"><div><span className="eyebrow">ВІВТОРОК, 15 ЖОВТНЯ</span><h2>Сьогодні за розкладом</h2></div><div className="panel-arrows"><button aria-label="Попередній день" onClick={()=>setWeek(week-1)}><ChevronLeft size={17}/></button><button aria-label="Наступний день" onClick={()=>setWeek(week+1)}><ChevronRight size={17}/></button></div></div><div className="lesson-list">{schedule.map((lesson,index)=><div className={`lesson-row ${lesson.next ? "lesson-current" : ""}`} key={lesson.subject}><div className="lesson-time"><strong>{lesson.time}</strong><span>{lesson.end}</span></div><span className={`lesson-timeline ${lesson.color}`}><i/></span><div className="lesson-info"><strong>{lesson.subject}</strong><small>{lesson.room} <span>·</span> {index===0?"Олена Петрівна":"Розклад класу"}</small></div>{lesson.next&&<span className="now-pill">ДАЛІ</span>}</div>)}</div><Link href="/schedule" className="schedule-link">Повний розклад <ArrowRight size={15}/></Link></article></section>
      <section className="bottom-grid"><article className="panel homework-panel"><div className="panel-heading"><div><span className="eyebrow">НЕ ЗАБУДЬ ВИКОНАТИ</span><h2>Домашні завдання <span className="heading-count">3</span></h2></div><Link href="/homework" className="view-all">Усі завдання <ArrowRight size={15}/></Link></div><div className="homework-list">{tasks.map(task=><div className={`homework-row ${completed.includes(task.title)?"task-completed":""}`} key={task.title}><button className="task-checkbox" aria-label={`Позначити виконаним: ${task.title}`} onClick={()=>toggleTask(task.title)}>{completed.includes(task.title)&&<Check size={13}/>}</button><span className={`task-color ${task.color}`}/><div className="task-info"><small>{task.subject}</small><strong>{task.title}</strong></div><span className="task-due"><Clock3 size={13}/>{completed.includes(task.title)?"Виконано":task.due}</span></div>)}</div></article>
        <article className="ai-card"><div className="ai-card-top"><span className="ai-icon"><Sparkles size={19}/></span><span className="ai-label">ТВІЙ НАВЧАЛЬНИЙ ПОМІЧНИК</span><span className="ai-stars">✳</span></div><h2>Застрягла на складній темі?</h2><p>ES AI пояснить складне простими словами, допоможе з підготовкою та розрахує потрібні оцінки.</p><Link href="/ai" className="ai-button">Спробувати ES AI <ArrowUpRight size={16}/></Link><span className="ai-decoration" /></article></section>
      <footer className="dashboard-footer"><span>© 2024 Easy Study</span><span>Навчання стає простішим <span className="footer-heart">✳</span></span><button onClick={()=>setWeek(week+1)}>Тиждень {week===0?"15–19 жовтня":week>0?"наступний":"попередній"} <ChevronRight size={14}/></button></footer>
    </div>
  );
}
