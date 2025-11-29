import React, { useMemo, useState } from "react";
import NotificationCard from "../Components/NotificationCard";
import Badge from "../Components/Badge";
import Icon from "../Components/Icon";
import "../styles/glass.css";

export default function Notifications() {
  const [items, setItems] = useState([
    {
      id: "1",
      title: "Competition Results Published",
      description: "Results for AI Innovation Challenge 2025 are now available!",
      date: "14 octobre 2025 à 01:00",
      isNew: true,
      unread: true,
      icon: "award",
    },
    {
      id: "2",
      title: "New Announcement",
      description: "Submission deadline extended by 2 days",
      date: "13 octobre 2025 à 01:00",
      isNew: true,
      unread: true,
      icon: "announcement",
    },
    {
      id: "3",
      title: "Team Invitation",
      description: "You have been invited to join Code Wizards",
      date: "10 octobre 2025 à 01:00",
      isNew: false,
      unread: false,
      icon: "user-add",
    },
  ]);

  const unreadCount = useMemo(() => items.filter(i => i.unread).length, [items]);

  const markAllRead = () => {
    setItems(prev => prev.map(i => ({ ...i, unread: false, isNew: false })));
  };
  const markRead = (id) =>
    setItems(prev => prev.map(i => (i.id === id ? { ...i, unread: false, isNew: false } : i)));

  return (
    <div className="min-h-screen px-3 md:px-6 py-6 bg-base-50">
      {/* Top chip */}
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 glass-pill px-4 py-2">
          <Icon name="cup" />
          <span className="text-sm font-medium text-gray-700">Competition Site</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="max-w-6xl mx-auto mt-6">
        <div className="glass rounded-full px-4 md:px-6 py-3 flex items-center gap-6">
          <a className="flex items-center gap-2 text-gray-600 hover:text-gray-800" href="#">
            <Icon name="home" />
            <span>Home</span>
          </a>
          <a className="flex items-center gap-2 text-gray-600 hover:text-gray-800" href="#">
            <Icon name="cup" />
            <span>Competitions</span>
          </a>
          <div className="ml-0 md:ml-2 flex items-center gap-2 bg-brand-700 text-white rounded-full px-3 py-1 shadow-glass">
            <Icon name="bell" className="h-5 w-5 text-white" />
            <span>Notifications</span>
            <Badge variant="primary">{unreadCount}</Badge>
          </div>
          <a className="flex items-center gap-2 text-gray-600 hover:text-gray-800 ml-auto" href="#">
            <Icon name="users" />
            <span>Teams</span>
          </a>
        </div>
      </nav>

      {/* Header + actions */}
      <header className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-xl2 bg-white/85 shadow-insetSoft flex items-center justify-center">
            <Icon name="bell" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-brand-800">Notifications</h1>
            <p className="text-sm text-gray-500 mt-1">Restez informé des résultats et annonces</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <button className="btn-primary flex items-center gap-2">
            <Icon name="bell" className="h-5 w-5 text-white" />
            <span>{unreadCount} Non lues</span>
          </button>
          <button className="btn flex items-center gap-2" onClick={markAllRead}>
            <Icon name="check" />
            <span>Tout marquer</span>
          </button>
        </div>
      </header>

      {/* Summary cards */}
      <section className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="glass rounded-xl2 p-6 relative">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl2 bg-white/85 shadow-insetSoft flex items-center justify-center">
              <Icon name="bag" />
            </div>
            <div>
              <div className="text-brand-800 text-2xl font-semibold">{items.length}</div>
              <div className="text-xs text-gray-500">TOUTES</div>
            </div>
          </div>
          <span className="absolute right-6 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-brand-600 shadow-glass"></span>
        </div>

        <div className="glass rounded-xl2 p-6">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl2 bg-white/85 shadow-insetSoft flex items-center justify-center">
              <Icon name="bell" />
            </div>
            <div>
              <div className="text-brand-800 text-2xl font-semibold">{unreadCount}</div>
              <div className="text-xs text-gray-500">NON LUES</div>
            </div>
          </div>
        </div>
      </section>

      {/* List */}
      <main className="max-w-6xl mx-auto mt-4 pb-10">
        {items.map(item => (
          <NotificationCard key={item.id} item={item} onMarkRead={markRead} />
        ))}

        {/* Dernière carte "fade" statique */}
        <div className="glass rounded-xl2 p-6 mt-5">
          <div className="flex items-start">
            <div className="mr-4 flex h-11 w-11 items-center justify-center rounded-xl2 bg-white/85 shadow-insetSoft">
              <Icon name="user-add" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-700">Team Invitation</h3>
              <p className="mt-2 text-sm text-gray-600">You have been invited to join Code Wizards</p>
              <p className="mt-3 text-xs text-gray-500">10 octobre 2025 à 01:00</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}